---
title: Now
description: Current status, activity, weather, books, and music.
---

# Now

<div class="container-small">
<script async src="https://status.lol/nsmsn.js?time&link" ></script>
</div>

&nbsp;

Currently:

- working with an awesome digital experience team.
- raising a preschooler with [Eleanor](https://eleanoraldrich.com).
- contemplating some winter side projects. ⛄️

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
            } else if (description.includes('wind')) {
                icon = '🪁';
            } else if (description.includes('rain') || description.includes('shower')) {
                icon = '🌧️';
            } else if (description.includes('dust')) {
                icon = '░░';
            }
      document.getElementById('weather').innerHTML = `${icon} <strong>Weather in ${city}:</strong> ${temp}°F, ${description}`;
    })
    .catch(error => console.error('Error fetching weather data:', error));
</script>
<div id="weather"></div>
<small>(<a href="https://openweathermap.org/city/5454711">Forecast by OpenWeather</a>)</small>

<p class="padding-top">The <a href="https://en.wikipedia.org/wiki/Albuquerque%2C_New_Mexico)">Duke City</a> has been home since 2023. I am slowly making more friends&nbsp;here!</p> 


&nbsp;

## 📚 Reading

<div id="literal-widget" handle="nsmsn" status="IS_READING" layout="list"></div>
<script async src="https://literal.club/js/widget.js"></script>

I use [Literal](https://literal.club/nsmsn/is-reading) and [The StoryGraph](https://app.thestorygraph.com/profile/nsmsn) to keep track of my reading.

&nbsp;

## 🎧 Listening

<figure>
<a href="https://libre.fm/user/nsmsn"><img src="https://libre.fm/user/nsmsn/now" width="320" height="60" alt="Nick's latest tracks on Libre.fm" loading="lazy"></a>
<figcaption>
<script async src="https://recentfm.rknight.me/now.js?u=nsmsn&e=🎵"></script>
</figcaption>
</figure>

[My last.fm account](https://www.last.fm/user/nsmsn) keeps track of music I listen to throughout the day. [Stats are fun](https://lastfmstats.com/user/nsmsn/dataset). I'm also scrobbling to [Libre.fm](https://libre.fm/user/nsmsn) as much as I can.

&nbsp;

<small>
This page uses a few third-party widgets and APIs to display my current status, weather, books, and music.<br />
<em>Last manually updated Nov. 21, 2025.</em>
</small>

&nbsp;

<small>
Inspired by Derek Sivers’ <a href="https://nownownow.com/about">nownownow.com</a>. This page has its own <a href="https://nownownow.com/p/Mu02">profile</a>, too.
</small>

&nbsp;