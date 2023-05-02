public with sharing class AccountBatch implements Database.Batchable<Sobject>,Database.Stateful,Schedulable{

    Integer batch = 51;
    Integer accNumber = 0;
    public Database.QueryLocator start(Database.BatchableContext bc){

        return Database.getQueryLocator('Select id,Name,AccountNumber from Account');
    }

    public void execute(Database.BatchableContext bc, List<Account> scope){
        
        for(Account a : scope){
            a.AccountNumber = String.valueOf(batch+'-'+accNumber);
            accNumber++;
        }
        batch++;
        update scope;
    }

    public void finish(Database.BatchableContext bc){

    }

    public void execute(SchedulableContext sc){
        AccountBatch ab = new AccountBatch();
        database.executeBatch(ab,1);
    }

}