const months = [
  {}, // first item in array months[0] is empty
  {long:'January', short:'Jan'},//months[1] == jan
  {long:'February', short:'Feb'},
  {long:'March', short:'Mar'},
  {long:'April', short:'Apr'},
  {long:'May', short:'May'},
  {long:'June', short:'Jun'},
  {long:'July', short:'Jul'},
  {long:'August', short:'Aug'},
  {long:'September', short:'Sep'},
  {long:'October', short:'Oct'},
  {long:'November', short:'Nov'},
  {long:'December', short:'Dec'}
];

myFunctions = {
  //write your methods here
  helloWorld(){
    return "Hello World!";
  },
  add(num1,num2){
    return num1 + num2;
  },
  subtract(num1,num2){
    return num1 - num2;
  },
  multiply(num1,num2){
    return num1 * num2;
  },
  divide(num1,num2) {
    return num1 / num2;
  },
  lengthOfString(string){
    return string.length;
  },
  concatenateStrings(str1,str2){
    return str1 + str2;
  },
  addStringAsNumber(str1,str2){
    return parseInt(str1) + parseInt(str2);
  },
  numberToFullMonthName(num1){
    return months[num1].long;
  },
  numberToShortMonthName(num1){
    return months[num1].short;
  },
  cubedNumber(num1){
    return num1**3;
  },
  sphereVolume(radius){
    volume = (4/3)*Math.PI*(radius**3);
    return parseInt(volume.toPrecision(6));
  }
};

module.exports = myFunctions;
