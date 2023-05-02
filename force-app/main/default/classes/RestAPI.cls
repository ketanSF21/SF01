@RestResource(urlMapping='/v1/contact/*')
global with sharing class RestAPI {
    
/*@HttpGet
    global static List<Contact> getContact(){
        return [Select id,name from Contact];
    }*/
    
    /*@HttpGet
    global static List<Contact> getContact(){
        RestRequest req = RestContext.request;
        String contactId = req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);
        if(!String.isBlank(contactId)){
                    return [Select id,name from Contact where id =: contactId];

        }else{
                    return [Select id,name from Contact];

        }
    }*/
    
    @HttpGet
    global static List<Contact> getContact(){
        String contactId = RestContext.request.params.get('conId');
        System.debug('test'+RestContext.request.params.get('conId'));
        if(!String.isBlank(contactId)){
                    return [Select id,name from Contact where id =: contactId];

        }else{
                    return [Select id,name from Contact];

        }
    }
}