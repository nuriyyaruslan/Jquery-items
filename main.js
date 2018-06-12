$(document).ready(function () {

	/*stop click event*/
    $(function(){
        $('a[href$="#"]').on('click',function(e){
            e.preventDefault();
        });
    })
	////////////////////////////////////////////////////////////////////
	
	
    /*when click any item of div. this div is not closing*/
    $(document).on('click','.close_icon',function () {
        $(this).parents('div.cart_details').hide();
        $('.dropdown').event.stopPropagation();
    })
	////////////////////////////////////////////////////////////////////
	
	

    /*hide grid*/
	/*when click one link then add active class and remove from others*/
    $(document).on('click','.grid_list li a',function () {
        $('.grid_list li a.active').removeClass('active');
        $(this).addClass('active');
    })

	////////////////////////////////////////////////////////////////////


    /*order accordion*/
    $('#accordion_order').find('.accordion_order_toggle').click(function(){
        $(this).parent().next('.accordion_order_content').slideToggle('fast');
        //Hide the other panels
        $(".accordion_order_content").not($(this).parent().next()).slideUp('fast');
    });
	
    $(document).on('click','.accordion_order_toggle',function () {
        $('.received_order').show();
    })
	/*accordion*/

	/*when focus input then show label*/
    $(document).on('focus','.reg_form_main .form-group input',function () {
       $(this).prev('.reg_label').css('opacity','1');
    })
	/*when focus input then show label*/
	////////////////////////////////////////////////////////////////////
	
	
    /*hover effect for button*/
	/*when hover button change img src*/
    $('.call_client img').attr('src','img/general/phone-call.png');
    $(document).on('mouseover','.call_client',function () {
        $('.call_client img').attr('src','img/general/phone-call-1.png')
    })
    $(document).on('mouseleave','.call_client',function () {
        $('.call_client img').attr('src','img/general/phone-call.png');
    })
	/*when hover button change img src*/
	

	////////////////////////////////////////////////////////////////////
    

    /*owl carousel example*/
    $('.home-carousel').owlCarousel({
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout: 3000,
        // animateOut: 'slideOutDown',
        animateOut: 'fadeOut',
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        },
        smartSpeed:520
    })
	/*owl carousel example*/

	////////////////////////////////////////////////////////////////////


    /*change content of owl-dot*/
	/*change dot content*/
    $('.home-carousel .owl-dots .owl-dot').each(function(){
        $(this).children('span').text($(this).index()+1);
    });
	/*change dot content*/
	
	////////////////////////////////////////////////////////////////////
	
	/*start wow.js*/

    wow = new WOW(
        {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            mobile:       false,       // default
            live:         true        // default
        }
    )
    wow.init();
	/*start wow.js*/
	////////////////////////////////////////////////////////////////////
	
	
    //Click event to scroll to

    $(window).scroll(function(){
        if ($(this).scrollTop() > 264) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
	//Click event to scroll to
	////////////////////////////////////////////////////////////////////

	
    // menu navigation starts
    $(".go_list li a").click(function () {
        var scroll_number = $(this).attr("scroll");
        var scroll_position = $("section[scroll=" + scroll_number + "]").offset().top-60;

        $('html, body').animate({ scrollTop: scroll_position }, "slow")
        return false;
    })
    // menu navigation ends
	
	

    // change menu item color when scroll starts
    var menu_legth = $(".go_list li a").length;
    console.log(menu_legth)
    $(window).scroll(function () {
        scroll = $(window).scrollTop();
        for (var i = 0; i < menu_legth; i++) {
            var scroll_position = $("section[scroll=" + i + "]").offset().top-60
            if (scroll >= scroll_position - 60) {
                $('.go_list li a.active').removeClass('active');
                $(".go_list li a[scroll=" + i + "]").addClass("active");
            }
        }
    });
    // change menu item color when scroll ends
	////////////////////////////////////////////////////////////////////


	////////////////////////////////////////////////////////////////////
    /*price slider*/
    $( function() {
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 700,
            values: [ 100, 700 ],
            slide: function( event, ui ) {
                $( "#amount" ).val( "₼" + ui.values[ 0 ] + " - ₼" + ui.values[ 1 ] );
            }
        });
        $( "#amount" ).val( "₼" + $( "#slider-range" ).slider( "values", 0 ) +
            " - ₼" + $( "#slider-range" ).slider( "values", 1 ) );
    } );
	////////////////////////////////////////////////////////////////////

	
	////////////////////////////////////////////////////////////////////

    /*fixed element until one footer*/
    var untilElement=$('#send_email').offset().top-$('.whish_list_cover').height()/2;
    $(window).scroll(function () {
        scroll=$(window).scrollTop();
        if(scroll>=untilElement){
            $('.wishlist_fixed_btn').css('position','static');
        }else{
            $('.wishlist_fixed_btn').css('position','fixed');
        }
    })
	/*fixed element until one footer*/
	////////////////////////////////////////////////////////////////////

})



