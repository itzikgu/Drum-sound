/*find the first buttton, create an event listener and listen to clicks. 
when the button is clickes, invoke the function.
when using event listeners, we will not call the function with the ().
if we will use () in event listener, the function will be immidienty triggered, not when clicked*/

/*detecting which event was pressed in the keyboard
we add a listener to the entire document to see which key was pressed*/
document.addEventListener("keypress", function(event){
    console.log(event);
})    


//creating all buttons array
var buttons=document.querySelectorAll(".drum");

//adding event listener to the mouse click
for (var i=0;i<buttons.length;i++){
    //void function that take the innerHTML of the button[i] and sends it to the makeSound function
    buttons[i].addEventListener("click", function(){ 
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
    }
    )}

//adding event listener to the keyboard press
//using void function that sends the key that was pressed to the makeSound function
//event.key returns the specific key that was pressed
document.addEventListener("keypress",function(event){
    makeSound(event.key);
})


/*the function recieves a key as an input. based on the key (mouse click or keypress) 
the relevant audio is being played*/
function makeSound(key){
    switch (key){
        case('w'):
            var audio=new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case('a'):
            var audio=new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case('s'):
            var audio=new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case('d'):
            var audio=new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case('j'):
            var audio=new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case('k'):
            var audio=new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case('l'):
            var audio=new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        //the default for other keyboard keys
        default:
            alert("No such drum type!")        
    }
}



