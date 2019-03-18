
let body = document.querySelector('body');
    
    document.querySelector('#red').onclick = function() {
        body.style.backgroundColor = "red";
    }
    
    document.querySelector('#green').onclick = function() {
        body.style.backgroundColor="pink";
    }
    
    document.querySelector('#blue').onclick = function() {
        body.style.backgroundColor="blue";
    }
    
    document.querySelector('#badass').onclick = function() {
        body.style.backgroundColor="#bada55";
    }
    
    document.querySelector('#pink').onclick = function() {
        body.style.backgroundColor = "green";
    }
    
    
    document.querySelector('#cs50').onclick = function() {
        body.style.backgroundImage="url(images/cs50.png)";
    }

    document.querySelector('#shark').onclick = function() {
        body.style.backgroundImage ="url(images/shark.jpg)";
        
    }

    document.querySelector('#tank').onclick = function() {
        body.style.backgroundImage = "url(images/tank.jpg)";
    }

    document.querySelector('#cat').onclick = function() {
        body.style.backgroundImage = "url(images/cats.jpg)";
    }
    
    document.querySelector('#reset').onclick = function() {
        body.style.backgroundColor = "aqua";
        body.style.backgroundImage = "none";
    }



   
