
var person1 = {
  Property_id: "ravi123",
  Title_Deed: "ravi",
  Land_Area_in_acre:5,
  Email: "ravi@gmail.com",
  Mobile_Number:3456,
  Age : 23,
  Gender:"Male",
  Digital_Signiture:"password" 
};

var person2 = {
  Property_id: "raj123",
  Title_Deed: "raj",
  Land_Area_in_acre:6,
  Email: "raj@gmail.com",
  Mobile_Number:3457,
  Age : 24,
  Gender:"Male",
  Digital_Signiture:"password1" 
};

var person3 = {
  Property_id: "varma123",
  Title_Deed: "varma",
  Land_Area_in_acre:10,
  Email: "varma@gmail.com",
  Mobile_Number:3458,
  Age : 28,
  Gender:"Male",
  Digital_Signiture:"password1" 
};

function searchDetails() {

var Eproperty_id = document.getElementById("propertyid").value;
var Etitle_deed = document.getElementById("titledeed").value;
var Eland_area = document.getElementById("landarea").value;
var Eemail = document.getElementById("emaill").value;
var Emobile_number = document.getElementById("mobilenumber").value;

if (person1.Property_id==Eproperty_id && person1.Title_Deed==Etitle_deed && person1.Land_Area_in_acre==Eland_area &&  person1.Email == Eemail && person1.Mobile_Number==Emobile_number) {
  alert("Your Land Information is Available in the land records , You can now move forward to validate your details");
}
else if (person2.Property_id==Eproperty_id && person2.Title_Deed==Etitle_deed && person2.Land_Area_in_acre==Eland_area &&  person2.Email == Eemail && person2.Mobile_Number==Emobile_number) {
  alert("Your Land Information is Available in the land records , You can now move forward to validate your details");
}
else if(Eproperty_id!="" &&Etitle_deed!=""&& Eland_area!=""&&Eemail!=""&&Emobile_number!=""){
  alert("Your Land Information is not Available in the land records")
}
}








