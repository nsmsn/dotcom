---
title: Hello, I'm Nick Simson
---

<h1 id="greeting" class="home-heading">Hello.</h1>
      <script language="JavaScript">
        var myDate = new Date();
        var greeting;
        if (myDate.getHours() >= 5 && myDate.getHours() < 12) {
          greeting = "Good morning.";
        } else if (myDate.getHours() >= 12 && myDate.getHours() <= 17) {
          greeting = "Good afternoon.";
        } else if (myDate.getHours() > 17 && myDate.getHours() <= 22) {
          greeting = "Good evening.";
        } else {
          greeting = "Hello.";
        }
        // Display the greeting in an element with id "greeting"
        var greetingElement = document.getElementById("greeting");
        if (greetingElement) {
          greetingElement.textContent = greeting;
        }
      </script>

<p class="text-xl">Welcome to my little corner of the world wide web.</p>

I write shorter [notes](/notes/) and longer [posts](/posts/) on a variety of [topics](/tags/).

Read more [about me](/about.html), or see what I'm up to [now](/now.html).
