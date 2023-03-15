import { LightningElement,api,wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import { getRecord } from 'lightning/uiRecordApi';

export default class WireApexDemo extends LightningElement {

    @api recordId;
    contacts;
    error;

    @wire(getContacts, {accId:'$recordId'})
    wiredContact({error,data}){
        if(data){
            this.contacts = data;
            this.error = undefined;
        }else if(error){
            this.contacts = undefined;
            this.error = error;
        }
    }
    
    @wire(getRecord, {recordId: '$recordId', fields: 'Account.Name'})
    record;

    get name(){
       return this.record.data.fields.Name.value;
    }
}