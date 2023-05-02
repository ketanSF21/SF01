public with sharing class FutureTaskCreator {


    @future(callout=true)
    public static void createTask(String recId){
        //testying
        Task t = new Task();
        t.Subject = 'Creating from Future Method';
        t.WhatId = recId;
        insert t;
    }

}