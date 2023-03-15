import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {

    firstName = 'parent Fname';
    lastName = 'parent Lname';

    handleChange(event){
        this.firstName = event.target.value;
    }
}