function Vehicle(Make, Model, Year, Color) { //this is my function
    this.Vehicle_Make = Make; //this is my vehicle "make"
    this.Vehicle_Model = Model; //this is my vehicle "model"
    this.Vehicle_Year = Year; //this is my vehicle "year"
    this.Vehicle_Color = Color; //this is my vehicle "color"
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //this is my variable
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //this is my variable
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); //this is my variable
function myFunction() { //this is my function
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + " -colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year; //this is my get element
}

function one_Function() { //this is my function
    document.getElementById("Counting").innerHTML = Count(); //this is my element
    function Count() { //this my my function
        var Starting_point = 9; //this is my variable
        function Plus_one() {Starting_point += 1;} //this is my function
        Plus_one(); //this is my function
        return Starting_point; //this is my return
    }
}

function Ride_Function() { //this is my function 
    var Height, Can_ride; //this is my variable
    Height = document.getElementById("Height").value; //this is my definition
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //this is my string
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //this is my element
}