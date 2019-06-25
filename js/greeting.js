var whoToGreet = document.getElementById("who-to-greet"),
    greetingArea = document.getElementById("greeting-area"),
    greetingButton = document.getElementById("greetings-button"),
    helloButton = document.getElementById("hello-button"),
    howdyButton = document.getElementById("howdy-button"),
    backAtYaButton = document.getElementById("back-at-ya-button");
    
    var greet = function greet (button){
        var text = whoToGreet.value;

        greetingArea.innerHTML = button.value + " " + text;

    };
    greetingButton.addEventListener("click", function(){
        // var text = whoToGreet.value;
        // greetingArea.innerHTML = greetingButton.value + " " + text;

        greet(greetingButton);
    });

    helloButton.addEventListener("click", function(){
        greet(helloButton);

    });

    howdyButton.addEventListener("click", function(){
        greet(howdyButton);

    });

    backAtYaButton.addEventListener("click", function(){
        greet(backAtYaButton);

    });

