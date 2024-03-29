    //odpowiada ze wyswietlenie diva z szczegółami ofert, uzupełnia dane danego auta dzięki użyciu słownika, bluruje resztę strony oraz wyłącza działania linków
    $(".oferts").click(function(){
        $("#oferta_focus").css("display","block");
        $("#socials, #div_oferty, #header, #upper, #footer").css("filter","blur(2px)");
        for(let i = 0; i < 11; i++)
            document.querySelectorAll("#oferta_focus p")[i].innerHTML=cars[this.getAttribute('id')][i];
        $("#socials, #upper").css("pointer-events","none");      
    });

    //funkcja odpowiada za wyłączanie szczegołów ofert, odblurowanie tła oraz włącza dzialania linków
    $("#oferta_focus").click(function(){
        $(this).css("display","none");
        $("#socials, #div_oferty, #header, #upper, #footer").css("filter","blur(0px)");
        $("#socials, #upper").css("pointer-events","auto");
    });

    //włącza linki oraz odblurowuje
    $(".a_menu").click(function(){
        $("#socials, #div_oferty, #header, #upper, #footer").css("filter","blur(0px)");
        $("#socials, #upper").css("pointer-events","auto");
    });
    
    //słownik z danymi do każdego auta
    var cars = {
        "arteon" : ["Marka: Volkswagen", "Model: Arteon", "Silnik: benzynowy 2.0 TSI", "Konie mechaniczne: 240", "Skrzynia biegów: 7-biegowa DSG", "Ilość miejsc: 5", "Liczba drzwi: 5", "Napęd: przód", "Cena za 1 dzień: 350zł", "Cena za 3 dni: 920zł", "Cena za 7 dni : 1850zł"],

        "bmw" : ["Marka: BMW", "Model: M4", "Silnik: benzynowy CS DTM 3.0", "Konie mechaniczne: 510", "Skrzynia biegów: 7-biegowa DCT", "Ilość miejsc: 4", "Liczba drzwi: 2", "Napęd: tył", "Cena za 1 dzień: 450zł", "Cena za 3 dni: 1200zł", "Cena za 7 dni : 2350zł"],

        "bugatti" : ["Marka: Bugatti", "Model: Chiron", "Silnik: benzynowy W16 8.0", "Konie mechaniczne: 1500", "Skrzynia biegów: 7-biegowa DCT", "Ilość miejsc: 2", "Liczba drzwi: 2", "Napęd: 4x4", "Cena za 1 dzień: 1500zł", "Cena za 3 dni: 4000zł", "Cena za 7 dni : 7850zł"],

        "mclaren" : ["Marka: McLaren", "Model: F1", "Silnik: benzynowy BMW V12 6.1", "Konie mechaniczne: 627", "Skrzynia biegów: 6-biegowa manualna", "Ilość miejsc: 3", "Liczba drzwi: 2", "Napęd: tył", "Cena za 1 dzień: 1250zł", "Cena za 3 dni: 3375zł", "Cena za 7 dni : 6550zł"],

        "koen" : ["Marka: Koenigsegg", "Model: Gemera", "Silnik: benzynowy R3 2.0, 3x eletryczne", "Konie mechaniczne: łącznie 1700", "Skrzynia biegów: KDD (Koenigsegg Direct Drive)", "Ilość miejsc: 4", "Liczba drzwi: 2", "Napęd: 4x4", "Cena za 1 dzień: 1200zł", "Cena za 3 dni: 3200zł", "Cena za 7 dni : 6300zł"],

        "mustang" : ["Marka: Ford", "Model: Mustang GT", "Silnik: benzynowy V8 5.0", "Konie mechaniczne: 450", "Skrzynia biegów: 10-biegowa DCT", "Ilość miejsc: 4", "Liczba drzwi: 2", "Napęd: tył", "Cena za 1 dzień: 1100zł", "Cena za 3 dni: 3000zł", "Cena za 7 dni : 5750zł"],

        "r8" : ["Marka: Audi", "Model: R8", "Silnik: benzynowy V10 FSI 5.2", "Konie mechaniczne: 525", "Skrzynia biegów: 6-biegowa manualna", "Ilość miejsc: 2", "Liczba drzwi: 2", "Napęd: quattro", "Cena za 1 dzień: 800zł", "Cena za 3 dni: 2150zł", "Cena za 7 dni : 4200zł"],

        "rs7" : ["Marka: Audi", "Model: RS7", "Silnik: benzynowy V10 TFSI 4.0", "Konie mechaniczne: 600", "Skrzynia biegów: 8-biegowa DCT", "Ilość miejsc: 4", "Liczba drzwi: 4", "Napęd: quattro", "Cena za 1 dzień: 1000zł", "Cena za 3 dni: 2700zł", "Cena za 7 dni : 5250zł"],

        "sb" : ["Marka: Skoda", "Model: Superb", "Silnik: benzynowy R4 16V TSI 2.0", "Konie mechaniczne: 280", "Skrzynia biegów: 6-biegowa DCT", "Ilość miejsc: 5", "Liczba drzwi: 4", "Napęd: 4x4", "Cena za 1 dzień: 280zł", "Cena za 3 dni: 780zł", "Cena za 7 dni : 1650zł"],

        "as" : ["Marka: Arrinera", "Model: Hussarya", "Silnik: benzynowy V8 TFSI 6.2", "Konie mechaniczne: 650", "Skrzynia biegów: 6-biegowa LLS", "Ilość miejsc: 2", "Liczba drzwi: 2", "Napęd: tył", "Cena za 1 dzień: 1150zł", "Cena za 3 dni: 3000zł", "Cena za 7 dni : 6050zł"]

    };

    //ustala pozycje diva ze szczegółami oraz ustawia interwał, aby poruszało się razem z klientem, window.resize służy do tego, żeby każda zmiana wielkości strony bez odświeżania jej również działało
    $(window).resize(function(){
        if($(window).width() <= 600){
            setInterval(function(){$("#oferta_focus").css("margin-top",-($(window).height()/2-126+($(document).height()-$(window).height()*0.75)-$(document).scrollTop()));$("#oferta_focus").css("height",$(window).height()/2);},1);
        }
        else 
            setInterval(function(){$("#oferta_focus").css("margin-top",-($(window).height()/2-26+($(document).height()-$(window).height()*0.75)-$(document).scrollTop()));$("#oferta_focus").css("height",$(window).height()/2);},1);
    });

    if($(window).width() <= 600){
        setInterval(function(){$("#oferta_focus").css("margin-top",-($(window).height()/2-126+($(document).height()-$(window).height()*0.75)-$(document).scrollTop()));$("#oferta_focus").css("height",$(window).height()/2)},1);
    }
    else 
        setInterval(function(){$("#oferta_focus").css("margin-top",-($(window).height()/2-26+($(document).height()-$(window).height()*0.75)-$(document).scrollTop()));$("#oferta_focus").css("height",$(window).height()/2)},1);