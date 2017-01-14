// jshint esversion: 6

import Login from './login.module';
import template from './login.html';
import { account } from '../accounts.js';

class LoginForm {
  constructor($scope, $reactive, $state) {
    'ngInject';

    this.$state = $state;

    $reactive(this).attach($scope);

    this.$onInit = () => {
      this.init();
    };


    this.goToDashboard = () => {
      $state.go("dashboard");
    };
  }


  init(){
    this.user = {};
  }

    submit(valid) {
      let message;

      if (valid){
        let user = this.user;
        let route = this;

        Meteor.loginWithPassword(user.email, user.password, this.$bindToContext((err) => {
          if (err) {
            this.message = err.message;
          } else {
            route.goToDashboard();
          }
        })
      );
    } else {
      this.message ="Please enter valid data";
    }
  }
}


//         account.forEach((item, i) => {
//           if ((user.email === item.email) && (user.password === item.pass)) {
//             console.log("Logged as " + user.email);
//
//           } else if ((i+1) === account.length) {
//             message = "Wrong user or password!";
//           }
//         });
//
//     } else {
//       message = "Please enter valid data!";
//     }
//     this.message = message;
//   }
// }

const name = 'login';


Login.component(name, {
        template,
        controller: LoginForm
    })
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('login', {
            url: '/login',
            template: '<login></login>'
        });
}
