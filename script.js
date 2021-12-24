let stars = [];
let bellAudio = new Audio("audio/bell.mp3")

let count = 0;
while(count <= 9)
{
    stars[count] = document.getElementById("star" + (count + 1))
    count++
}

setInterval(function()
{
    for(i = 0; i < stars.length; i++)
    {
        stars[i].style.color = "rgb(" + randomNumber(255) + ", " + randomNumber(255) + ", " + randomNumber(255) + ")"
        stars[i].style.left = randomNumber(400) + "px"
        stars[i].style.top = randomNumber(600) + "px"
    }
}, 200)

function playAudio()
{
    bellAudio.play()
}

function randomNumber(max)   //random number 
{
    return Math.floor(Math.random() * max)
}