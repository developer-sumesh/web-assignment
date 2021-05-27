const inputCity = document.querySelector('input');
const date = document.getElementById('date');
const temperature = document.getElementById('temp');
const cityWithCoutry = document.getElementById('city');
const desc = document.getElementById('desc');
const minAndMax = document.getElementById('min-maxTemp');

// console.dir(desc);

// console.log(inputCity);
const weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month =["January","Feburary","March","April","May","june","july","August","September","October","November","December"];
// console.log(weekday[1]);


const getWheather =  async (searchCity) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=<apiid>&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    if(data.cod === "404"){
        throw "Invalid City";
    }
    return data;

    
    
    // console.log(currentdate);

    // console.log(data);
    // console.log(data.name,data.sys.country,data.main.temp,data.weather[0].description,data.main.temp_min,data.main.temp_max);
}

inputCity.addEventListener('keydown',(e)=>{
    // console.dir(e.target.value);
    if(e.key === 'Enter'){
        const searchCity = e.target.value;
        e.target.value="";
        // console.log(searchCity);
        getWheather(searchCity)
            .then((data) => {
                let dateAndTime =new Date(data.dt*1000-(data.timezone*1000));
                let currentdate = weekday[dateAndTime.getDay()] + ' '+dateAndTime.getDate()+' '+month[dateAndTime.getMonth()]+' '+dateAndTime.getFullYear();
                let currentTemperature = data.main.temp + '&#8451;';
                let city = data.name+', '+data.sys.country;
                let description = data.weather[0].description;
                let minAndMaxTemp = data.main.temp_min + '&#8451;/' + data.main.temp_max + '&#8451;';
                cityWithCoutry.innerHTML = city;
                date.innerHTML = currentdate;
                temperature.innerHTML = currentTemperature;
                desc.innerHTML = description;
                minAndMax.innerHTML = minAndMaxTemp;
                console.log(data);   
            })
            .catch( err => {
                console.log(err);
                cityWithCoutry.innerHTML =err;
            });
    }
});


// getWheather('katn')
//     .then((result) => {
//      console.log("result");   
//     })
//     .catch( err => {
//         console.log("err");
//     });


