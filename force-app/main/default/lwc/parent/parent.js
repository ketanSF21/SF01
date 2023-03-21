import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {

    firstName = 'parent Fname';
    lastName = 'parent Lname';

    handleChange(event){
        if(event.target.name == 'fName'){
            this.firstName = event.target.value;

        }else if(event.target.name == 'lName'){
            this.lastName = event.target.value;

        }
    }
}