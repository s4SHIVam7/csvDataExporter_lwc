# CSV Data Exporter - Lightning Web Component (LWC)

CSV Data Exporter is a Salesforce Lightning Web Component (LWC) that simplifies the process of exporting data from Salesforce objects into CSV format. This component provides a user-friendly interface for selecting and exporting records, making it easier for users to retrieve data for reporting and analysis.

![CSV Data Exporter Demo](demo.gif)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [ScreenShots](#ScreenShots)
- [Contact](#contact)

## Features

- Export data from Salesforce objects to CSV files.
- Choose specific records or export all records.
- Customize exported fields to meet your requirements.
- Designed for Salesforce Lightning Experience.

## Installation

To use this Lightning Web Component in your Salesforce org, follow these steps:

1. **Clone or Download this Repository**:
   - Clone this GitHub repository to your local machine using the following command:
     ```
     git clone https://github.com/s4SHIVam7/csvDataExporter_lwc.git
     ```

2. **Deploy the Lightning Web Component**:
   - Deploy the `CsvDataExporter` Lightning Web Component to your Salesforce org.

3. **Configure the Apex Controller**:
   - Modify the `CsvController` Apex class to fetch the data you want to export.

4. **Add the Component to Your Salesforce Page**:
   - Add the `CsvDataExporter` component to your Lightning App or Record Page.

## Usage

1. **Open a Salesforce Lightning Page or App**:
   - Navigate to a Salesforce Lightning Page or App where you've added the `CsvDataExporter` component.

2. **Select Records for Export**:
   - Select the records you want to export by checking the checkboxes in the data table.

3. **Export Data**:
   - Click the "Export Data" button.

4. **Download CSV File**:
   - A CSV file containing the selected data will be generated and downloaded.

## Customization

You can customize the fields that are exported by modifying the `columns` property in the `CsvDataExporter.js` file. Adjust the `label`, `fieldName`, and `type` as needed to match your Salesforce object's schema.

```javascript
columns = [
    { label: 'Account Name', fieldName: 'Name' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Industry', fieldName: 'Industry', type: 'text' }
];
```
Additionally, you can customize the Apex class and SOQL query in the CsvController to fetch data from your specific Salesforce objects. Update the class and query to match your Salesforce data structure.

```CsvController.cls
public static List<Account> fetchRecords() {
        return [SELECT Id, Name, Phone, Industry From Account WHERE Phone != null ORDER BY LastModifiedDate DESC Limit 20];
    }
```

## ScreenShots
1. Main Component
![image](https://github.com/s4SHIVam7/csvDataExporter_lwc/assets/60181328/3db27f1f-4789-4e84-a3b9-0e2d3b51c91a)

2. Result 2(Selected Records using Checkbox): 
![image](https://github.com/s4SHIVam7/csvDataExporter_lwc/assets/60181328/2aeb4ad4-4c03-49d3-8450-834d479f44e8)

3. Result 2(All Records using Checkbox):
![image](https://github.com/s4SHIVam7/csvDataExporter_lwc/assets/60181328/f32d5f19-9a41-4f61-a5f6-5db55dd1d843)

4. Download Window:
![image](https://github.com/s4SHIVam7/csvDataExporter_lwc/assets/60181328/7d1e532b-f7f2-44ba-9781-9e2dc71080cb)

5. Csv File (only Selected Records):
![image](https://github.com/s4SHIVam7/csvDataExporter_lwc/assets/60181328/3fdccbb7-3e7d-4bb8-9776-499b4415cb53)

6. Csv File (All Selected Records):
![image](https://github.com/s4SHIVam7/csvDataExporter_lwc/assets/60181328/dabbbda9-2a59-4b3f-b557-f8564cfceebf)

## Contact

For questions, support, or feedback, please feel free to reach out:

- **Telegram**: [@shivam_l](https://t.me/shivam_l)
- **LinkedIn**: [Shivam Laidwar](https://www.linkedin.com/in/shivam-laidwar/)





 





