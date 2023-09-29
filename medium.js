     window.addEventListener('scroll', function () {
        let nav = document.querySelector('nav'); 
        let button = document.getElementsByName('nav'); 
        let rect = nav.getBoundingClientRect(); 
        let scrollato = rect.bottom <= 0;
    
        if (scrollato) {
            nav.style.backgroundColor = 'white'; 
            button.style.backgroundColor = 'green'; 
        } else {
            nav.style.backgroundColor = '#ffc017'; 
            button.style.backgroundColor = 'black';
        }
    });

    // ho guardato tantissimo il codice su internet pero 
    // non mi funziona e non capisco il perchè