import { LightningElement,track } from 'lwc';
import { subscribe, unsubscribe, onError} from 'lightning/empApi';
export default class ProductMessage extends LightningElement {
    @track channelName = '/event/ProductEvent__e';
    @track textValue='';
    @track isSubscribeDisabled = false;
    @track isUnsubscribeDisabled = !this.isSubscribeDisabled;

    get getTime()
    {
        return new Date().toISOString();
    }
    @track payload=[];
    subscription = {};

    // Tracks changes to channelName text field
    handleChannelName(event) {
        this.channelName = event.target.value;
    }

    // Handles subscribe button click
    handleSubscribe() {
        // Callback invoked whenever a new event message is received
        const messageCallback = (response) => {
            console.log('New message received : ', JSON.stringify(response));
            this.textValue+='\n'+ this.getTime +': '+ JSON.stringify(response);
            console.log('this.payload: ' + this.payload);
            // Response contains the payload of the new message received
        };

        // Invoke subscribe method of empApi. Pass reference to messageCallback
        subscribe(this.channelName, -1, messageCallback).then(response => {
            // Response contains the subscription information on successful subscribe call
            this.textValue+='\n'+ this.getTime +': '+'Successfully subscribed to : '+ JSON.stringify(response.channel);
            this.subscription = response;
            this.toggleSubscribeButton(true);
        });
    }

    // Handles unsubscribe button click
    handleUnsubscribe() {
        this.toggleSubscribeButton(false);

        // Invoke unsubscribe method of empApi
        unsubscribe(this.subscription, response => {
            this.textValue+='\n'+ this.getTime +':  unsubscribe() response: '+ JSON.stringify(response);
            // Response is true for successful unsubscribe
        });
    }

    toggleSubscribeButton(enableSubscribe) {
        this.isSubscribeDisabled = enableSubscribe;
        this.isUnsubscribeDisabled = !enableSubscribe;
    }

    registerErrorListener() {
        // Invoke onError empApi method
        onError(error => {
            this.textValue+='\n'+ this.getTime +':  Received error from server: '+ JSON.stringify(error);
            // Error contains the server-side error
        });
    }

    handleGetOldEvents()
    { 
        const messageCallback = (response) => {
            console.log('New message received : ', JSON.stringify(response));
            this.textValue+='\n'+ this.getTime +': '+ JSON.stringify(response);
            // Response contains the payload of the new message received
        };

        subscribe(this.channelName, -2, messageCallback).then(response => {
            // Response contains the subscription information on successful subscribe call
            this.subscription = response;
        });
        this.toggleSubscribeButton(false);
    }
    handleClearLog()
    {
        this.textValue='';
    }
}