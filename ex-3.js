//  Start coding here

class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

class PostList {
  constructor(posts) {
    this.posts = [];
  }
  addPost(post) {
    this.posts.push(post);
  }
  sharePost(post) {
    console.log(`You've  shared post ${post.title} to your friend.`);
  }
}

class Post {
  constructor(id, title, content, comment) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comment = comment;
  }
  addComment(newComment) {
    this.comment.push(newComment);
  }
}

class Comment {
  constructor(id, content, createdBy, like) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = 0;
  }
  addLike() {
    ++this.like;
  }
}

class Facebook {
  constructor(groupList, pageList) {
    this.groupList = [];
    this.pageList = [];
  }
  addGroup(groupName) {
    this.groupList.push(groupName);
  }
  addPage(pageName) {
    this.pageList.push(pageName);
  }
}
class FacebookPage {
  constructor(pageName) {
    this.pageName = pageName;
  }
}

class FacebookGroup {
  constructor(groupName) {
    this.groupName = groupName;
  }
}

class Notification {
  constructor(id) {
    this.id = id;
  }
  send(comment, post) {
    console.log(
      `${comment.createdBy} just commented on this post ${post.title}`
    );
    console.log(`${comment.createdBy}`);
    console.log(`${post.title}`);
  }
}
