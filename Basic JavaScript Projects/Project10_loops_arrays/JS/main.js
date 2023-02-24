function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

function text_length() {
    var Y = "Hello World";
    var Z = Y.length; 
    document.getElementById("text.length").innerHTML = Z;
}

    function for_Loop() {
        var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "flute"];
        var Content = "";
        var Y;
        for (Y = 0; Y < Instruments.length; Y++)  {
        Content += Instruments[Y] + "<br>";
        }
        document.getElementById("List_of_Instruments").innerHTML = Content;
    }

    function cat_pics() {
        var Cat_Picture = [];
        Cat_Picture[0] = "sleeping";
        Cat_Picture[1] = "playing";
        Cat_Picture[2] = "eating";
        document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
    }

    function constant_function() {
        const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
        Musical_Instrument.color = "blue";
        Musical_Instrument.price = "$900";
        document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
    }

    var X = 99
    document.write(X);
    {
        let X = 25
        document.write("<br>" + X);
    }
    document.write("<br>" + X);

    function myFunction(name) {
        return "Hello" + name;
    }
    document.getElementById("demo").innerHTML = myFunction("John");

    let car = {
        make: "Dodge ",
        model: "Viper ",
        year: "2021 ",
        color: "red ",
        description : function() {
            return "The car is a " + this.year + this.color + this.make + this.model; 
        }
    };
    document.getElementById("Car_Object").innerHTML = car.description();

    let text = "";
        for (let i = 0; i < 10; i++) {
        if (i === 3) { break; }
        if (i === 3) { continue; }
        text += "The number is " + i + "<br>";
}
document.getElementById("Sarah").innerHTML = text;
