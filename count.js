"use strict";

/* Execute the function to run and display the countdown clock */
runClock();
setInterval("runClock()", 1000);

/* Function to create and run the countdown clock */
function runClock(){
   /* Store the current date and time */
   var currentDay = new Date();
   var dateStr = currentDay.toLocaleDateString();
   var timeStr = currentDay.toLocaleTimeString();


   /* Calculate the days until November 23rd, 2024 */
   var weddingDate = new Date('2024-11-23T15:30:00');
   var timeDiff = weddingDate - currentDay;

   const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
   const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

   /* Display the time left */
   document.getElementById("days").textContent = Math.floor(days);
   document.getElementById("hrs").textContent = Math.floor(hours);
   document.getElementById("mins").textContent = Math.floor(minutes);
   document.getElementById("secs").textContent = Math.floor(seconds);

   /* Singular noun check */
   if(days === 1) { var dayText = "Day"; } else { var dayText = "Days";}
   if(hours === 1) { var hourText = "Hour"; } else { var hourText = "Hours";}
   if(minutes === 1) { var minuteText = "Minute"; } else { var minuteText = "Minutes";}
   if(seconds === 1) { var secondText = "Second"; } else { var secondText = "Seconds";}

   document.getElementById("days-tag").textContent = dayText;
   document.getElementById("hrs-tag").textContent = hourText; 
   document.getElementById("mins-tag").textContent = minuteText;
   document.getElementById("secs-tag").textContent = secondText;
}

/* Random image logic */

const num_of_images = 223;

// Function to update the background image
function updateBackgroundImage() {
   var randomImageNumber = Math.floor(Math.random() * num_of_images);
   // document.getElementById('randomBackgroundImage').style.backgroundImage = 'url(images/' + randomImageNumber + '.jpg)';
   document.body.style.backgroundImage = 'url(images/' + randomImageNumber + '.jpg)';
   // document.getElementById('randomBackgroundImage').textContent = 'url(images/' + randomImageNumber + '.jpg)';
}

// Initial background image update when the page loads
updateBackgroundImage();
