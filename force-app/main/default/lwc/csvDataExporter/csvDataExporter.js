import { LightningElement, wire} from 'lwc';
import fetchRecords from '@salesforce/apex/CsvController.fetchRecords';
export default class CsvDataExporter extends LightningElement {
    accountData = [];
    columns = [
        { label: 'Id', fieldName: 'Id', type: 'text' },
        { label: 'Account Name', fieldName: 'Name' },
        { label: 'Phone', fieldName: 'Phone', type: 'phone' },
        { label: 'Industry', fieldName: 'Industry', type: 'text' }
    ];
    @wire(fetchRecords) wiredFunction({data, error}) {
        if(data) {
            this.accountData = data;
    
        } else if(error) {
            console.log(error);
        }
    }

    get checkRecord() {
        return this.accountData.length > 0 ? false : true; 
    }

    clickHandler() {
        let selectedRows = [];
        let downloadRecords = [];
        selectedRows = this.template.querySelector("lightning-datatable").getSelectedRows()
        if(selectedRows.length > 0) {
            downloadRecords = [...selectedRows];
        } else {
            downloadRecords = [...this.accountData];
        }
        let csvFile = this.convertArrayToCsv(downloadRecords)
        this.createLinkForDownload(csvFile);
    }

    convertArrayToCsv(downloadRecords) {
        let csvHeader = Object.keys(downloadRecords[0]).toString() ;
        console.log('header: '+csvHeader);
        let csvBody = downloadRecords.map((currItem) => Object.values(currItem).toString());
        console.log('body: '+csvBody);
        let csvFile = csvHeader + "\n" + csvBody.join("\n");
        return csvFile;
    }

    createLinkForDownload(csvFile) {
        const downLink = document.createElement("a");
        downLink.href = "data:text/csv;charset=utf-8," + encodeURI(csvFile);
        downLink.target = '_blank';
        downLink.download = "Account_Record_Data.csv"
        downLink.click();
    }

}

