class EmailNotification { 
    
    constructor(notificationId, createdTime, content, receiver){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }

    send() {
        return "Notification has been sent to <email>"
    }
}

class SMSNotification { 
    constructor(notificationId, createdTime, content, phoneNumber){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
    }

    send(){
        return `Notification has been sent to ${this.phoneNumber}`
    }
}

const bill = new EmailNotification("00", "18:00", "Guest", "mail")
console.log(bill.send())
const nael = new SMSNotification("01", "8:00", "Host", "xxx-xxx-xxxx")
console.log(nael.send())