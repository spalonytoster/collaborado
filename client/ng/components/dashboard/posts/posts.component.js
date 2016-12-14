// jshint esversion: 6

import module from './posts.module';
import template from './posts.html';
import { postBase } from './posts.js';

class Posts {
  constructor() {
    'ngInject';
    this.body = "";
    this.tags = "";
    this.post = postBase;

    this.chibs = () => {
      let placeholderTags = [];
      this.tags = angular.copy(placeholderTags);
    };

    this.chibs();

    this.checkText = () =>{
      if (this.body.length > 0) {
        return false;
        }
        else {
         return true;
       }
     };

  }
  submit(){
      let tags = this.tags.join(', ');
      let newPost ={
        love:0,
        talk:0,
        tags:tags,
        text:this.body,
        files:"",
        time:"Just now",
        pinned:false,
      };

      console.log(this.upload);
      postBase.push(newPost);
      this.body="";
      this.chibs();
  }

  pinup(post){
    for(i = 0; i < postBase.length; i++) {
      if (postBase[i]._id === post._id &&  post.pinned === false){
        post.pinned=true;
        if (i! == 0){
          postBase.splice (i, 1);
          postBase.unshift(post);
        }
        break;
      } else if(postBase[i]._id === post._id && post.pinned === true) {
          post.pinned=false;
          if ((i+1) !== postBase.length){
            postBase.splice (i, 1);
            postBase.push(post);
          }
        break;
      }
    }

  }

  love(post){
    if (post.loved === true){
      post.love--;
      post.loved = false;
    } else {
      post.love++;
      post.loved = true;
    }
  }
  talk(post){
    post.talk++;
  }

}

const name = 'posts';

module.component(name, {
  template,
  controller: Posts
});
