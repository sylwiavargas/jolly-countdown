// Set the date we're counting down to
let countdownDate = new Date("May 13, 2023 18:00:00").getTime()

let header = document.getElementsByTagName("h1")[0]

function generateHsl() {
    return (
      `hsl(${
      //   Hue
      360 * Math.random()},${111 + 70 * Math.random()}%,${80 + 10 * Math.random()}%)`
    )
}

document.body.style.background = "linear-gradient(to right, " + generateHsl() + "," + generateHsl() + ")"


function updateTime(){
    // Get today's date and time
    let now = new Date().getTime()
      
    // Find the distance between now and the count down date
    let timeLeft = countdownDate - now
  
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)
  
    // grab the countdown element from the DOM and output the result in an element with id="countdown"
    let countdownParagraph = document.getElementById("countdown")
    countdownParagraph.innerText = days + "d " + hours + "h " + minutes + "m " + seconds + "s "
  
    //  change the background every second if it's less than 12h
    if (timeLeft >= 0 && timeLeft <= 43201149) {
        document.body.style.background = "linear-gradient(to right, " + generateHsl() + "," + generateHsl() + ")"
    }

    if (timeLeft >= 0) {
        header.innerText = "You still need to wait..."
    }

    if (timeLeft < 1000) {
      clearInterval(updateTime)
      header.remove()
      countdownParagraph.innerText = "YAY! 🥳"
      countdownParagraph.style.marginTop = '40vh'
    }
    
  }

// Update the count down every 1 second
setInterval(updateTime, 1000)