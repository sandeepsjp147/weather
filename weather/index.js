var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#descreption')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
//apik ="63a90ae96d390ec37d6c125f5a86e1a"
apik ="ac92d98d6e72b8fdefe38a0345334093"
function convertion(val)
{ 
   return (val - 273).toFixed(3) 
}
 
btn.addEventListener('click',function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
   // fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>
     {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var tempature = data['main']['temp']
        var wndspeed = data['wind']['speed']
        

        city.innerHTML= 'Weather of <span>${nameval}</span>'
        temp.innerHTML ='Tempature:<span>${ convertion(tempature)} C</span>'
        description.innerHTML = 'Sky Conditions: <span>${descrip}</span>'
        wind.innerHTML = 'Wind speed: <span>${windspeed} km/h </span>'  
      })
     .catch(err => alert('You entered Wrong city name'))
    })