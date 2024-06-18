//approach 1 function
function updatedTime (){
    let losAngelesElement = document.querySelector("#los-angeles")
    let losAngelesDateElement = losAngelesElement.querySelector(".date")
    let losAngelesTimeElement = losAngelesElement.querySelector(".time")
    let losAngelesTime = moment().tz("America/Los_Angeles");


    losAngelesDateElement.innerHTML = losAngelesTime.format("dddd Do MMMM")
    losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>] A [</small>]")

}
    
setInterval(updatedTime, 1000)

// approach 2

setInterval(function (){

    let sydneyElement = document.querySelector("#sydney")
    let sydneyDateElement = sydneyElement.querySelector(".date")
    let sydneyTimeElement = sydneyElement.querySelector(".time")
    let sydneyTime = moment().tz("Australia/Sydney")


    sydneyDateElement.innerHTML = sydneyTime.format("dddd Do MMMM")
    sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss [<small>] A [</small>]")
}, 1000)