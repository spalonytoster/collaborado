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
    this.uploads = [];

    this.chips = () => {
      let placeholderTags = [];
      this.tags = angular.copy(placeholderTags);
    };

    this.chips();

    this.checkText = () => {
      if (this.upload!==undefined && this.uploads.includes(this.upload)===false){
        this.uploads.push(this.upload);
      }

      if (this.body.length > 0) {
        return false;
        } else {
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
        files:this.uploads,
        time:"Just now",
        pinned:false,
      };

      postBase.push(newPost);
      this.body="";
      this.chips();

      console.log(postBase);
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

  deleteFile(upload){
    this.uploads.forEach((item,i) =>{
      if (upload === item){
          this.uploads.splice(i,1);
      }
    });
  }

}

const name = 'posts';

module.component(name, {
  template,
  controller: Posts
});
