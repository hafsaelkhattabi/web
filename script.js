// API Key 
const apiKey = '32e614c3d4bca9a71dd373dce1c1d439';

// function to fetch weather data


// Event listener for the btn to show the weater data
document.getElementById('btn').addEventListener('click', function() {

    const city = document.getElementById('city').value;
    console.log(city)
    if (city) {
        // show the weather with the getdata function
        getdata(city);
    } else {
        // to enter the correct city name for get the weather
        console.log('Please enter a city name');
    }
});
function getdata(city) {
   
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;
    
    // Fetch weather data
    fetch(url)
        // the response as a json form
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // the data pass with success 200 OK
            if (data.cod === 200) {
                // the path of the data , temperature and description
                const location = data.name;
                const temperature = data.main.temp;  
                const description = data.weather[0].description;  

                // Update the UI 
                // we use the getelementbyid to update the content after click the button
                document.getElementById('location').textContent = `Location: ${location}`;
               // document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
                document.getElementById('description').textContent = `Condition: ${description}`;
                // also update the style for show the weather with different style
                document.getElementById('result').style.display = 'block';
            } else {
                // undefined city
                console.log("City not found!");
            }
        })
        .catch(err => console.error("Error fetching data:", err)); // error handling when the data didn't fetch correctly
}
            
   
