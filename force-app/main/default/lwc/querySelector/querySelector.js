import { LightningElement } from 'lwc';

export default class QuerySelector extends LightningElement {

    firstName ='';
    lastName = '';


    handleClick(event){
        var input = this.template.querySelectorAll("lightning-input");
        
        input.forEach(function(element){
            if(element.name == 'fName'){
                this.firstName = element.value;
            }else if(element.name == 'lName'){
                this.lastName = element.value;
            }
        },this);
    }
}