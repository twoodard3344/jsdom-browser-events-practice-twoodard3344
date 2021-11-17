// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Your Code Here.

let boxTop = 200;
let boxLeft = 200;
let resetBtn = document.getElementById("reset-btn");

function onKeyPress (event)
{
    console.log("You pressed: " + event.key);
    if (event.key === "ArrowDown")
    {
        boxTop += 10;
    }
    else if (event.key === "ArrowUp")
    {
        boxTop -= 10;
    }
    else if (event.key === "ArrowLeft")
    {
        boxLeft -= 10;
    }
    else if (event.key === "ArrowRight")
    {
        boxLeft += 10;
    }
    document.getElementById("box").style.top = boxTop + "px";
    document.getElementById("box").style.left = boxLeft + "px";
}

function onBtnClick()
{
    boxLeft = 200;
    boxTop = 200;

    document.getElementById("box").style.top = boxTop + "px";
    document.getElementById("box").style.left = boxLeft + "px";
}



document.addEventListener("click",onBtnClick)
document.addEventListener("keydown",onKeyPress)
onKeyPress()
