// Hamburger menu selections
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("ul");
const navLink = document.querySelectorAll("#nav-link");

//Hover Effect
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = '#0652dd';
    });

    box.addEventListener('mouseout', () => {
        box.style.backgroundColor = 'initial';
    });
});

// scroll-to-top selection
const scrollUp = document.querySelector("#scroll-up");

// Hamburger menu functionality
hamburger.addEventListener("click", openMenu);

// Theme switcher selection
const checkbox = document.querySelector("#checkbox");

function openMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close menu on nav menu clicks
navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Theme switcher functionality
checkbox.addEventListener("change", () => {
  // Toggle website theme
  document.body.classList.toggle("dark");
});

// JavaScript code to handle form submission and video display
$(document).ready(function() {
  // Replace with your actual form response feed URL
  const formResponseFeedUrl = 'https://drive.google.com/drive/folders/18eXMsYC5m1geFl939aYX5rKjPOqi_DJAFDN9R8t5Cu1XFWbv0gNnUQ7YnpqZma7ESb_4WcW5?usp=sharing'; 

  $.getJSON(formResponseFeedUrl, function(data) {
      // Extract the latest video URL from the response data
      const latestVideoUrl = data.feed.entry[0]['gsx$videourl']['$t']; 

      // Create a video element
      const video = $('<video controls>');
      video.attr('src', latestVideoUrl);

      // Append the video to the container
      $('#video-container').append(video);
  });
});