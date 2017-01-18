// jshint esversion: 6
import module from './register.module';
import template from './register.html';
import { Accounts } from 'meteor/accounts-base';
import { UserSettings } from '/imports/api/user-settings';

class RegisterForm {
  constructor($scope, $reactive, $state) {
   'ngInject';

    $reactive(this).attach($scope);

    this.user = {};

    this.goToDashboard = () => {
      $state.go("dashboard");
    };
  }

  submit(valid) {
    let message;

    if (valid){
      if (this.user.password === this.user.password2) {
        let newAccount = {
          email: this.user.email,
          password: this.user.password,
          profile: {
            login: this.user.login,
            name: this.user.name,
            surname: this.user.surname
          }
        };

        Accounts.createUser(newAccount, this.$bindToContext((err) => {
          if (err) {
            this.message = err.message;
          } else {
            this.insertUserSettings();
            this.goToDashboard();
          }
        }));
      } else {
        this.message = "Password not match";
      }
    } else {
      this.message = "Please enter valid data and accept terms!";
    }
  }

  insertUserSettings() {
    let defaultSettings = UserSettings.findOne({ _id: 'default' });
    delete defaultSettings._id;
    defaultSettings.userId = Meteor.userId();
    UserSettings.insert(defaultSettings);
  }
}

const name = 'register';

module.component(name, {
    template,
    controller: RegisterForm
  })
  .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('register', {
      url: '/register',
      template: '<register></register>'
    });
}
