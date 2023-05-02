trigger AccountTrigger on Account (after insert) {
    for(Account a : Trigger.new){
        FutureTaskCreator.createTask(a.Id);
        QueueableAccount q = new QueueableAccount(a.Id);

        Id jobId = System.enqueueJob(q);
        System.debug('JobID- '+jobId);
    }
}