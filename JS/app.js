
var myVariable = "Welcome to My page";

alert(myVariable);


var time = prompt('what time is now ?');

if ( time < 12 ){

    document.write('we say when '+ time +' GOOD-MORNING<br>');
} 


else if ( time > 12 && time < 24 ){
    document.write('we say when '+ time +' GOOD-EVENING<br>');
} 

else {
    document.write('There is something wrong<br>');
}

var name = prompt("Please enter your name");
    document.getElementById("name").innerHTML=name;

if (confirm('Do you want to continue?')) {
        
        console.log('Thing was saved to the database.');
      
var numberofProperty = prompt("Please enter the number of your Property");
   
        for(var i=1 ; i<=numberofProperty ; i++) 
    {
            document.write('<img width=100px height=100px src="https://www.thewowstyle.com/wp-content/uploads/2020/09/HOME-2.jpg">');
   
    }
}
    else {
        console.log('Thing was not saved to the database.');
      }

    


/*function color() 
    {
        var color = prompt("Enter what color you prefer to be background", color);
        let color = document.getElementById('id').nodeValue;
        if (color == "orange") 
        {
            document.getElementById("id").style.background.color = "orange";
        
        }
        else if (color == "blue")
        {
            document.getElementById("id").style.background.color = "blue";
        }
        else if (person == "black")
        {
            document.getElementById("id").style.background.color = "black";
        }
        
        else 
        {
          document.write('input error');
        }
    }*/