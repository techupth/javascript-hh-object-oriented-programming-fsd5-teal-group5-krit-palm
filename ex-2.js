class Notification {
    constructor(notificationId, createdTime, content, receiver){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }

    send(){
        return `Notification has been sent to ${this.receiver}`
    }
 }

class EmailNotification extends Notification {
    constructor(notificationId, createdTime, content, receiver){
        super(notificationId, createdTime, content, receiver);
    }
 }

class SMSNotification extends Notification { 
    constructor(notificationId, createdTime, content, phoneNumber){
        super(notificationId, createdTime, content, phoneNumber);
    }
}

const bill = new EmailNotification("00", "18:00", "Guest", "mail")
console.log(bill.send())
const nael = new SMSNotification("01", "8:00", "Host", "xxx-xxx-xxxx")
console.log(nael.send())
