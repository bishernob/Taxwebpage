var myVariable = "Welcome to My page";

alert(myVariable);


var time = prompt('what time is now ?');

if ( time < 12 ){

    document.write('we say when '+ time +' GOOD-MORNING');
} 


else if ( time > 12 && time < 24 ){
    document.write('we say when '+ time +' GOOD-EVENING');
} 

else {
    document.write('There is something werong');
}

var name = prompt("Please enter your name");
    document.getElementById("name").innerHTML=name;

function color() 
{
    var color = prompt("Enter what color you prefer to be background", color);
    if (color == "orange") 
    {
      document.getElementById("id").style.background = color;
    
    }
    else if (color == "Blue")
    {
        document.getElementById("id").style.background = color;
    }
    else if (person == "Black")
    {
        document.getElementById("id").style.background = color;
    }
    else if (person == "Purple")
    {
        document.getElementById("id").style.background = color;
    }
    else 
    {
      document.getElementById("demo").innerHTML =
      "no color";
    }
}