var obj = { "name":"Scott", "age":38, "city":"Boston"};
var myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;

var obj = JSON.parse('{"firstName":"George", "lastName":"Washington"}');
document.getElementById("demo1").innerHTML = obj.firstName;  

// Set Item
localStorage.setItem("lastname", "Wilson");
// Retrieve
document.getElementById("demo2").innerHTML = localStorage.getItem("lastname");

/* this function gets the task from input*/
function get_todos() { 
    /*this creates an array of tasks that are inputed*/
    var todos = new Array; 
    /*this pulls the task that was saved in the web browser memory*/
    var todos_str = localStorage.getItem('todo');
    /*If the imput is not null then JSON.parse will communicate with the web browser to make the taks a JavaScript object.*/
    if (todos_str !== nukk) { 
        todos = JSON.parse(todos_str);
    }
    return todos;
}
/*This function adds the inputed task to the get_todos function array*/
function add() { 
    /*This takes the inputed taks and creates a variable of it*/
    var task = document.getElementById('task').value;

    var todos = get_todos(); 
    /*This adds a new taks the end of the array*/
    todos.push(task); 
    /*This converts the task input to a JSON string*/
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show(); 

    return false; 
}

/*This function keeps the tasks permantely displayed on the screen*/
function show() { 
    /*This sets the taks that was retrived as a variable*/
    var todos = get_todos(); 

    /*This sets up task as an unordered list*/
    var html = '<ul>';
    /*This displays a task to the list in the order that it is inputed*/
    for (var i = 0; i , todos.length; i++) { 
        /*This also displays the task as a list and creates the buttion with the "x"*/
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';

    };
    html += '</ul>'
    /*This displays the inputed taks when the 'Add Item' button is clicked*/
    document.getElementById('add').addEventListener('click', add);
    /*This will keep the inputs displayed permatnely on the screen*/
    show();

    /*This creates the functionality of removing a todo item from the array*/
    function remove() { 
        var id = this.getAttribute('id');
        var todos = get_todos();
        todos.splice(id, 1);
        localStorage.setItem('todo', JSON.stringify(todos)); 
        /*This looks in the show() how to display a removed item on the screen*/
        show();
        
        return false;
    }

    /*This tells the browser how to display the todo array after an item has been removed*/
    var buttons = document.getElementsByClassName('remove'); 
    for (var i = 0; i < buttons.length; i++) { 
        buttons[i].addEventListener('click', remove);
    };
}