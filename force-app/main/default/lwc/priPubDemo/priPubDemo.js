import { LightningElement,api } from 'lwc';

export default class PriPubDemo extends LightningElement {

    message = 'private Property';
    
    @api recordId;

}