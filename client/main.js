import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.signup.onCreated(function helloOnCreated() {
  // counter starts at 0
  //this.counter = new ReactiveVar(0);
});

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

Template.signup.events({
  'submit .signupform'(event, instance) {
    event.preventDefault();
    const target = event.target;
    const name = target.name.value;
    const email = target.email.value;
    const password = target.password.value;
    const confirmpassword = target.confirm.value;
    if(password!=confirmpassword){
      alert("password is not same");
    }
    alert(email);
    // increment the counter when button is clicked
    // instance.counter.set(instance.counter.get() + 1);
  },
});
