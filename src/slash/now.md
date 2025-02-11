---
title: Now
---

# Now

<div class="container-small">
<script src="https://status.lol/nsmsn.js?"></script>
</div>

&nbsp;

I am currently:

- working as a UI designer with an awesome digital experience team.
- raising a preschooler with [Eleanor](https://eleanoraldrich.com).
- challenging myself to write and publish often.

&nbsp;

## 📍 ABQ NM USA
<script>
  const apiKey = '1b98106d1e9ae98f5a526a0f18b73062';
  const cityId = '5454711';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=imperial`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const temp = Math.round(data.main.temp); // Round temperature to nearest whole number
      const description = data.weather[0].description;
      const city = data.name;
      // Determine the icon
            let icon = '';
            if (description.includes('sun') || description.includes('clear')) {
                icon = '☀️';
            } else if (description.includes('cloud')) {
                icon = '☁️';
            } else if (description.includes('snow')) {
                icon = '❄️'; 
            } else if (description.includes('fog')) {
                icon = '🌫️';        
            } else if (description.includes('rain') || description.includes('shower')) {
                icon = '🌧️';
            }
      document.getElementById('weather').innerHTML = `${icon} <strong>Weather in ${city}:</strong> ${temp}°F, ${description}`;
    })
    .catch(error => console.error('Error fetching weather data:', error));
</script>
<div id="weather"></div>
<small>(<a href="https://openweathermap.org/city/5454711">Forecast by OpenWeather</a>)</small>

<p class="padding-top">Been living in the <a href="https://en.wikipedia.org/wiki/Albuquerque%2C_New_Mexico)">Duke City</a> since 2023.</p> 


&nbsp;

## 📚 Reading

<div id="literal-widget" handle="nsmsn" status="IS_READING" layout="list"></div>
<script src="https://literal.club/js/widget.js"></script>

I use [Literal](https://literal.club/nsmsn/is-reading) and [The StoryGraph](https://app.thestorygraph.com/profile/nsmsn) to keep track of my reading.

&nbsp;

## 🎧 Listening

<script src="https://recentfm.rknight.me/now.js?u=nsmsn&e=🎵"></script>

[My last.fm account](https://www.last.fm/user/nsmsn) keeps track of music I listen to throughout the day. [Stats are fun](https://lastfmstats.com/user/nsmsn/dataset). I'm also scrobbling to [Libre.fm](https://libre.fm/user/nsmsn) as much as I can.

&nbsp;

<small>
This page uses a few third-party widgets and APIs to display my current status, weather, books, and music.<br />
<em>Last manually updated January 24, 2025.</em>
</small>

&nbsp;

<small>
Inspired by Derek Sivers’ <a href="https://nownownow.com/about">nownownow.com</a>. This page has its own <a href="https://nownownow.com/p/Mu02">profile</a>, too.
</small>

&nbsp;