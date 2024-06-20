//approach 1 function
 function updatedNewYorkTime (){
     let newYorkElement = document.querySelector("#new_york")
     let newYorkDateElement = newYorkElement.querySelector(".date")
     let newYorkTimeElement = newYorkElement.querySelector(".time")
     let newYorkTime = moment().tz("America/Los_Angeles");

     newYorkDateElement.innerHTML = newYorkTime.format("dddd Do MMMM")
     newYorkTimeElement.innerHTML = newYorkTime.format("h:mm:ss [<small>] A [</small>]")

 }

 updatedNewYorkTime();

function updatedCostaRicaTime() {
  let costaRicaElement = document.querySelector("#costa_rica")
  let costaRicaDateElement = costaRicaElement.querySelector(".date")
  let costaRicaTimeElement = costaRicaElement.querySelector(".time")
  let costaRicaTime = moment().tz("America/Costa_Rica");

  costaRicaDateElement.innerHTML = costaRicaTime.format("dddd Do MMMM")
  costaRicaTimeElement.innerHTML = costaRicaTime.format("h:mm:ss [<small>] A [</small>]")

}

updatedCostaRicaTime();

// approach 2

 setInterval(function () {
     let sydneyElement = document.querySelector("#sydney");
     let sydneyDateElement = sydneyElement.querySelector(".date");
     let sydneyTimeElement = sydneyElement.querySelector(".time");
     let sydneyTime = moment().tz("Australia/Sydney");

     sydneyDateElement.innerHTML = sydneyTime.format("dddd Do MMMM")
     sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss [<small>] A [</small>]")
 }, 1000)


setInterval(function () {
  let shanghaiElement = document.querySelector("#shanghai");
  let shanghaiDateElement = shanghaiElement.querySelector(".date");
  let shanghaiTimeElement = shanghaiElement.querySelector(".time");
  let shanghaiTime = moment().tz("Asia/Shanghai");

  shanghaiDateElement.innerHTML = shanghaiTime.format("dddd Do MMMM")
  shanghaiTimeElement.innerHTML = shanghaiTime.format("h:mm:ss [<small>] A [</small>]")
}, 1000)


function updateCity(event){
  let cityTimeZone = event.target.value;
    if (cityTimeZone === "current")  {
        cityTimeZone = moment.tz.guess();
 }
  let cityName = cityTimeZone.replace("_"," ").split("/")[1];
  //console.log(cityTimeZone)
  let cityTime = moment().tz(cityTimeZone);
  //console.log(cityTime.format("dddd Do MMMM"))
let citiesElement = document.querySelector("#cities")
  citiesElement.innerHTML = `
            <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd Do MMMM, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
        </div>
        <a href="index.html">All Cities</a>
  `;
}

let selectedCities = document.querySelector("#city")
selectedCities.addEventListener("change", updateCity)

