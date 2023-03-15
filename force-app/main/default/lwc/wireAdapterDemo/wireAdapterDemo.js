import { api, LightningElement, wire } from 'lwc';
import { getRecord,getFieldValue } from 'lightning/uiRecordApi';

//import NAME_FIELD from '@salesforce/schema/Account.Name';
//import PHONE_FIELD from '@salesforce/schema/Account.Phone';

const FIELDS = [
    'Account.Name',
    'Account.Phone',
    'Account.Id'
]
export default class WireAdapterDemo extends LightningElement {

    @api recordId;

    @wire(getRecord,{recordId: '$recordId' , fields:FIELDS})
    record;

    get name(){
      return this.record.data ? getFieldValue(this.record.data,'Account.Name') : 'error';  
    }
    get phone(){
        return this.record.data ? getFieldValue(this.record.data,'Account.Id') : 'error';  
    }

}