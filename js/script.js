import 'bootstrap';
import "../sass/main.scss";
import AOS from 'aos';
require('jquery/dist/jquery');
require('popper.js/dist/umd/popper');
require('bootstrap/dist/js/bootstrap');

function validate() {
  var username = document.registration.username;
  console.log(username)
  var number = document.registration.number;
  var genderM = document.registration.male;
  var genderF = document.registration.female;
  var bDay = document.registration.dayOfBirth;
  var bMonth = document.registration.monthOfBirth;
  var bYear = document.registration.yearOfBirth;
}
