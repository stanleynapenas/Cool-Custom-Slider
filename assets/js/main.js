$( document ).ready(function(){

    // Al click della freccia next
    $('.next').click(nxtSlide);
    $('.prev').click(prevSlide);


    function nxtSlide() {
        
        var slctImg = $(".slider-wrapper .slider-content img.active");
        var crcl = $(".slider-wrapper .nav-slider div.circle-nav.active");
        
        slctImg.removeClass("active"); // togli la classe che lo rende visivbile/attivo
        crcl.removeClass("active");
    
        // Se siamo all'ultima immagine, ritorna alla prima immagine
        if (slctImg.hasClass("last")) {
            $(".slider-wrapper .slider-content img.first").addClass("active")
        } else { // Altrimenti vai alla prossima immagine e rendilo attivo/visibile
            slctImg.next("img").addClass("active");
        }

        if (crcl.hasClass("last")) {            
            $(".slider-wrapper .nav-slider div.circle-nav.first").addClass("active")
        } else {
            crcl.next(".circle-nav").addClass("active")
        }



    }

    function prevSlide() {
        
        var slctImg = $(".slider-wrapper .slider-content img.active");
        var crcl = $(".slider-wrapper .nav-slider div.circle-nav.active");
        
        slctImg.removeClass("active"); // togli la classe che lo rende visivbile/attivo
        crcl.removeClass("active");
    
        // Se siamo alla prima immagine, ritorna all'ultima immagine
        if (slctImg.hasClass("first")) {
            $(".slider-wrapper .slider-content img.last").addClass("active")
        } else { // Altrimenti vai alla immagine precedente e rendilo attivo/visibile
            slctImg.prev("img").addClass("active");
        }


        if (crcl.hasClass("first")) {            
            $(".slider-wrapper .nav-slider div.circle-nav.last").addClass("active")
        } else {
            crcl.prev(".circle-nav").addClass("active")
        }



    }



});