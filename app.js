var  temp = document.querySelector('.temperature');
var iconW = document.querySelector('#iconW');
var cityName = document.querySelector('#cityName');
var wParam = document.querySelector('#wParam');
var max_min = document.querySelector('#max-min');
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
let apiKey = '&APPID=368aee06ac4c842fd77a361d89acd02b';
  document.getElementById('generate').addEventListener('click', performAction);
function performAction(e){
    const cityName =  document.getElementById('stateName').value;
    getWeather(baseURL,cityName, apiKey)
  }
const getWeather = async (baseURL, city, key)=>{
    const res = await fetch(baseURL+city+key)
    try {
      const data = await res.json();
      temp.innerHTML = Math.ceil(data.main.temp-273)+'&#8451';
      max_min.innerHTML = `${Math.ceil(data.main.temp_min-273)}&#8451/${Math.ceil(data.main.temp_max-273)}&#8451`;
      cityName.innerHTML = `${city} (${data.sys.country})`;
      iconW.setAttribute('src','http://openweathermap.org/img/w/'+data.weather[0].icon+'.png');
      wParam.innerHTML = data.weather[0].main;
      return data;
    }  catch(error) {
      console.log("error", error);
    }
  }
  getWeather(baseURL,'Tashkent',apiKey)