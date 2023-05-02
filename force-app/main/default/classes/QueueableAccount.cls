public with sharing class QueueableAccount implements Queueable {
   
    String recId;

    public QueueableAccount(String recId) {
        this.recId = recId;
    }

    public void execute(QueueableContext context){
        Task t = new Task();
        t.Subject = 'Creating from Queaueable';
        t.WhatId = recId;
        insert t;
    }
}