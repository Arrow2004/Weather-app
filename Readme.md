# Weather-app

## Table of Contents

* Intro
* Getting Started
* Conclusion
## Intro
The starter project I am created HTML and CSS files. 
The project has the following structure
```javascript
images
  - pogoda.jpg
  - weather.jpeg
styles.css    
index.html
app.js
README.md
```
Then I wrote the starter html code.
I used the openweathermap api for this project! It is very nice free api!!!
## Getting Started
Then I used css for design!!!
Eventually I sent a request to the api using JavaScript and received the data. Then based on this data, I sent the data to html with a JavaScript DOM!!!
I finally fixed some flaws.
Sending a request to the API I did as follows.
```javascript
    const getWeather = async (baseURL, city, key)=>{
    const res = await fetch(baseURL+city+key)
    try {
      const data = await res.json(); // get data. data type is object
      return data;
    }  catch(error) {
      console.log("error", error);
    }
  }
```
## Conclusion
This project version is 1.0 and I would like to add some daily weather information in future versions. And I want to work on design.
See [Project](http://t99323py.beget.tech/weatherapp/)
Thank you UDACITY!!!