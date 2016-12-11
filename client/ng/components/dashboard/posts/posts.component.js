// jshint esversion: 6

import module from './posts.module';
import template from './posts.html';
import { postBase } from './posts.js';

class Posts {
  constructor($scope) {
    'ngInject';
    this.body = "";
    this.tags = "";
    this.post = postBase;

    this.chibs = () => {
      let placeholderTags = ['work', 'technology', 'places'];
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
      let tags=this.tags.toString();
      let newPost ={
        love:0,
        talk:0,
        tags:tags,
        text:this.body,
        files:"",
        time:"Just now",
        pinned:false,
      };

      postBase.push(newPost);
  }

  pinup(post){
    for(i=0;i<postBase.length;i++) {
      if (postBase[i].$$hashKey === post.$$hashKey &&  post.pinned===false){
        post.pinned=true;
        if (i!==0){
          postBase.splice (i, 1);
          postBase.unshift(post);
        }
        break;
      } else if(postBase[i].$$hashKey === post.$$hashKey &&  post.pinned===true){
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
    post.love++;
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
