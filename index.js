//approach 1 function
 function updatedLATime (){
     let losAngelesElement = document.querySelector("#los-angeles")
     let losAngelesDateElement = losAngelesElement.querySelector(".date")
     let losAngelesTimeElement = losAngelesElement.querySelector(".time")
     let losAngelesTime = moment().tz("America/Los_Angeles");

     losAngelesDateElement.innerHTML = losAngelesTime.format("dddd Do MMMM")
     losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>] A [</small>]")

 }

 updatedLATime();

// approach 2

 setInterval(function () {
     let sydneyElement = document.querySelector("#sydney");
     let sydneyDateElement = sydneyElement.querySelector(".date");
     let sydneyTimeElement = sydneyElement.querySelector(".time");
     let sydneyTime = moment().tz("Australia/Sydney");

     sydneyDateElement.innerHTML = sydneyTime.format("dddd Do MMMM")
     sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss [<small>] A [</small>]")
 }, 1000)



function updateCity(event){
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_","").split("/")[1];
  //console.log(cityTimeZone)
  let cityTime = moment().tz(cityTimeZone);
  //console.log(cityTime.format("dddd Do MMMM"))
let citiesElement = document.querySelector("#cities")
  citiesElement.innerHTML = `
            <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM dddd Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
        </div>
  `;
}

let selectedCities = document.querySelector("#city")
selectedCities.addEventListener("change", updateCity)


