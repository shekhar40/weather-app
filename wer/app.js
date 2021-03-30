window.addEventListener('load', () => {
    let long;
    let lat;
    let loc = document.getElementById("location");
    let tempIcon = document.getElementById("temp-icon");
    let tempValue = document.getElementById("temp-value");
    let climate = document.getElementById("climate");
    let iconFile;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=5b21cb24b7725fae9ca20f0567aa59fe`;



            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const { name } = data;
                    const { feels_like } = data.main;
                    const { id, main } = data.weather[0];

                    loc.textContent = name;
                    climate.textContent = main;
                    tempValue.textContent = Math.round(feels_like - 273);
                    if (id < 250) {
                        tempIcon.src = ' .http://openweathermap.org/img/wn/11d@2x.png'
                    }
                    else if (id < 350) {
                        tempIcon.src = ' http://openweathermap.org/img/wn/09d@2x.png'
                    }
                    else if (id < 550) {
                        tempIcon.src = ' http://openweathermap.org/img/wn/10d@2x.png'
                    }
                    else if (id < 650) {
                        tempIcon.src = ' http://openweathermap.org/img/wn/13d@2x.png'
                    }
                    else if (id < 750) {
                        tempIcon.src = ' http://openweathermap.org/img/wn/50d@2x.png'
                    }
                    else if (id === 800) {
                        tempIcon.src = ' http://openweathermap.org/img/wn/01d@2x.png'}
                    else if (id < 850) {
                        tempIcon.src = ' http://openweathermap.org/img/wn/01d@2x.png'
                    }


                });

        });
    }

});