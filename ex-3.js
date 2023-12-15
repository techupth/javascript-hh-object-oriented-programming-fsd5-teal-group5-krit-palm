//  Start coding here

class User {
    constructor(id, name, email){
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

class postList {
    constructor(posts){
        this.posts = posts;
    }

    addpost(post){
        this.posts.push(post);
    }

    sharePost(){
        return `You'vd shared post ${posts} to your friend.`
    }
}

class Post extends User {
    constructor(id, title, content, comment){
        super(id);
        this.title = title;
        this.content = content;
        this.comment = comment;
    }

    addComment(text){
        this.comment.push(text)
    }
}

class Comment extends User{
    constructor(id, content, createBy, like){
        super(id, content);
        this.createBy = createBy;
        this.like = like;
    }

    addLike(){
        this.like = this.like + 1;
    }
}

class Facebook {
    constructor(groupList, pageList){
        this.groupList = groupList;
        this.pageList = pageList;
    }

    addGroup(){
        this.groupList = this.groupList + 1;
    }

    addPage(){
        this.pageList = this.page + 1;
    }
}

class FacebookPage extends User {
    constructor(name){
        super(name);
    }
}

class FacebookGroup extends User {
    constructor(name){
        super(name);
    }
}

class Notification {
    constructor(id){
        this.id = id;
    }

    send(post, comment){
        return `Notification: ${comment.createBy} has just commented on this post- ${post.title}`
    }
}

