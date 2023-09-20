import { LightningElement, track } from 'lwc';

export default class ValidationForm extends LightningElement {

    validator() {
        let fstNameCmp = this.template.querySelector(".fstNameCmp");
        let lstNameCmp = this.template.querySelector(".lastNameCmp");
        let dateCmp = this.template.querySelector(".birthDateCmp");

        let fstNamevalue = fstNameCmp.value;
        let lstNamevalue = lstNameCmp.value;
        let dtValue = dateCmp.value;
       
        if (!fstNamevalue) {
            fstNameCmp.setCustomValidity("First Name is mandatory");
        } else {
            fstNameCmp.setCustomValidity("");
        }
        fstNameCmp.reportValidity();

        if (!lstNamevalue) {
            lstNameCmp.setCustomValidity("Last Name is mandatory");
        } else {
            lstNameCmp.setCustomValidity("");
        }
        lstNameCmp.reportValidity();

        if (!dtValue) {
            dateCmp.setCustomValidity("Birthdate is mandatory");
        } else {
            dateCmp.setCustomValidity("");
        }
        dateCmp.reportValidity();
    }
}