//welcomeMSG
document.write("Hello, welcome to the Benkoya Maluki Database.<br>")

//steelIngot_ironIngot
var steelIngot = ironIngot
var ironIngot ;

//steelRod
var steelRod = 20 + " Steel Ingot" + " = " + 20 + " Iron Ingot"
function createSteelRod(){
    document.write(steelRod)
}

//promptUSERsteelrod
function createSteelRod() {
    var steelRod = "20 Steel Ingot = 20 Iron Ingot";
    alert(steelRod);
}

function promptUser() {
    while (true) {
        var userInput = prompt("Input item you want to know about (type 'exit' to quit):");
        if (userInput === "Steel Rod") {
            createSteelRod();
        } else if (userInput === "exit") {
            break;
        } else {
            alert("Input is not a valid item or it has not been added to the database.");
        }
    }
}

promptUser();
