particlesJS("particles-js",{"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":5,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":2,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

document.addEventListener("DOMContentLoaded", function() {
    const quotes = [
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler",
        "First, solve the problem. Then, write the code. - John Johnson",
        "Code is like humor. When you have to explain it, it’s bad. - Cory House",
        "Programming isn't about what you know; it's about what you can figure out. - Chris Pine",
        "The best error message is the one that never shows up. - Thomas Fuchs",
        "It's not at all important to get it right the first time. It's vitally important to get it right the last time. - Andrew Hunt and David Thomas",
        "The best thing about a boolean is even if you are wrong, you are only off by a bit. - Anonymous",
        "A language that doesn't affect the way you think about programming is not worth knowing. - Alan Perlis",
        "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. - John Woods",
        "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away. - Antoine de Saint-Exupery",
        "The most disastrous thing that you can ever learn is your first programming language. - Alan Kay",
        "Walking on water and developing software from a specification are easy if both are frozen. - Edward V. Berard"
    ];
      
    var descriptionElement = document.getElementById("description");
    var currentIndex = -1;
    var isHovering = false;
    
    descriptionElement.textContent = quotes[Math.floor(Math.random() * quotes.length)]; // initial landing

    function changeDescription() {
        var nextIndex;
        do {
            nextIndex = Math.floor(Math.random() * quotes.length);
        } while (nextIndex === currentIndex);

        currentIndex = nextIndex;
        descriptionElement.classList.add('fade-out');

        setTimeout(() => {
            if (!isHovering) {
                descriptionElement.textContent = quotes[currentIndex];
                setTimeout(() => {
                    descriptionElement.classList.remove('fade-out');
                }, 50);
            }
        }, 500);
    }

    var intervalId = setInterval(changeDescription, 5000);

    descriptionElement.addEventListener("mouseenter", function() {
        isHovering = true;
        clearInterval(intervalId);
    });

    descriptionElement.addEventListener("mouseleave", function() {
        isHovering = false;
        intervalId = setInterval(changeDescription, 5000);
    });
});
