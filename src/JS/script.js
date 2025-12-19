$(document).ready(function(){

    $('#mobile-btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile-btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItens = $('.nav_item');

    $(window).on('scroll', function(){
        const header = $('header');
        const scrollPosition = $(window).scrollTop();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0){
            header.css('box-shadow', 'none')
        }else{
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        let closestIndex = 0;
        let closestDistance = Math.abs(sections.eq(0).offset().top - scrollPosition);

        sections.each(function(i){
            const section = $(this);
            const sectionTop = section.offset().top;
            const distance = Math.abs(sectionTop - scrollPosition - 150);

            if (distance < closestDistance){
                closestDistance = distance;
                closestIndex = i;
            }
        })

        activeSectionIndex = closestIndex;

        navItens.removeClass('active')
        $(navItens[activeSectionIndex]).addClass('active');

    });

    ScrollReveal().reveal('#cta',{
        origin: 'left',
        duration: 2500,
        distance: '20%',
        reset: true,
        delay: 100,
        easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        opacity: 0
    });

    ScrollReveal().reveal('.dish',{
        origin: 'left',
        duration: 2500,
        distance: '20%',
        reset: true,
        delay: 200,
        easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        opacity: 0
    });

    ScrollReveal().reveal('#testimonial_chef',{
        origin: 'left',
        duration: 1500,
        distance: '20%',
        reset: true,
        delay: 100,
        easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        opacity: 0
    })

    ScrollReveal().reveal('.feedback',{
        origin: 'left',
        duration: 1500,
        distance: '20%',
        reset: true,
        delay: 200,
        easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        opacity: 0
    })

});


