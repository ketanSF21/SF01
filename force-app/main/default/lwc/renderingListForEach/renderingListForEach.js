import { LightningElement } from 'lwc';

export default class RenderingListForEach extends LightningElement {
    contacts = [
        {
            Id:1,
            FirstName:'Ketan',
            LastName:'Arora'
        },
        {
            Id:2,
            FirstName:'Ritu',
            LastName:'Sachdeva'
        },
        {
            Id:3,
            FirstName:'KT',
            LastName:'AR'}
    ];
}