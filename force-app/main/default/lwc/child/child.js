import { api, LightningElement } from 'lwc';

export default class Child extends LightningElement {

    upperCaseName = 'defaultValue';

    @api
    get itemName(){
        return this.upperCaseName;
    }

    set itemName(value){
        this.upperCaseName = value.toUpperCase();
    }
}