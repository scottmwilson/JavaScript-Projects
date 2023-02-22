function full_sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function text_toUpperCase() {
    var Sentence = "Hello World!";
    var text_toUpperCase = Sentence; 
    document.getElementById("UpperCase").innerHTML = text_toUpperCase;
}

function text_search() {
    var Sentence = "Mr. Blue has a blue house";
    var text_search = Sentence; 
    document.getElementById("search").innerHTML = text_search;
}

function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function num_toFixed() {
    var X = 5.56789;
    document.getElementById("fix").innerHTML = X;
}

function text_valueOf() {
    var X = "Hello World";
    document.getElementById("value").innerHTML = X;
}