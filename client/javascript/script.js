var myAppModule = angular.module('myApp', []);
        

$( document ).ready(function() {

    /***************** Waypoints ******************/
    $('.step1').waypoint(function() {
        $('.step1').addClass('animated fadeInLeft');
    }, {
        offset: '90%'
    });
    $('.step2').waypoint(function() {
        $('.step2').addClass('animated fadeInLeft');
    }, {
        offset: '90%'
    });
    $('.step3').waypoint(function() {
        $('.step3').addClass('animated fadeInRight');
    }, {
        offset: '90%'
    });
    $('.step4').waypoint(function() {
        $('.step4').addClass('animated fadeInRight');
    }, {
        offset: '90%'
    });
    
    $('.tweets').waypoint(function() {
        $('.step4').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });
    


    $.fn.countTo = function(options) {
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $(window).on('scroll', function() {
    var windowPosition = window.pageYOffset;
    var pagePosition = 1550;

    if (windowPosition > pagePosition) {
        $('.count').each(function () {

            $(this).prop('Counter', 0).animate({ Counter: $(this).text()}, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                    }
                })
            })
        }
    })

    /***************** Check Console for Page Scroll Distance ******************/
    // $(document).scroll(function() {
    // console.log($(document).scrollTop());
    // });

    /***************** Jump to ID on page ******************/
    // $('a[href^="#"]').on('click',function (e) {
    //     e.preventDefault();

    //     var target = this.hash;
    //     var $target = $(target);

    //     $('html, body').stop().animate({
    //         'scrollTop': $target.offset().top
    //     }, 900, 'swing', function () {
    //         window.location.hash = target;
    //     });
    // });

    /***************** Jumbotron Horizontal Line Animate ******************/
        var $window = $(window),
            $body = $('body'),
            $banner = $('.banner'),
            $header = $('#header');

            $body.addClass('is-loading');
            $window.on('load', function() {
                window.setTimeout(function() {
                    $body.removeClass('is-loading');
                }, 100);
            });

    /***************** Animate Nav Right Elements on Page Load ******************/
    $('.animateNav').addClass('animated fadeInDown');

    /***************** Animate + on Scroll ******************/
    $(window).on('scroll', function() {
        if (window.pageYOffset > 400) {
             $('.introFade').addClass('animated fadeInDown');
            }
        })

    /***************** Explore: Opacity ******************/
    $( ".exploreSprint, .exploreOlympic, .exploreHalf, .exploreIron" ).hover (
        function() { $( this ).fadeTo( 'fast', '.5'); },
        function() { $( this ).fadeTo( 'fast', '1'); }
    );

    /***************** FadeIn & FadeOut on Hover ******************/
    $('.gallery-item').hover (
        function() { $(this).find('.imgTitle').fadeIn(400); },
        function() { $(this).find('.imgTitle').fadeOut(200); }
    );

    /***************** Show / Hide Explore Distances ******************/
    $( 'a' ).on('click', function() { 
        var target = $(this).attr('rel');
        $( "#"+target ).show().siblings("div").hide();
        $( "#"+target ).addClass('animated fadeInUp').siblings("div").hide();

        // SPRINT SWIM TIMER
        $('.sprint1').countTo({
            from: 0,
            to: 750,
            speed: 3000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });

        // SPRINT BIKE TIMER
        $('.sprint2').countTo({
            from: 0,
            to: 12,
            speed: 3000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });

        // SPRINT RUN TIMER
        $('.sprint3').countTo({
            from: 0,
            to: 3.1,
            speed: 3000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });

        // OLYMPIC SWIM TIMER
        $('.olympic1').countTo({
            from: 0,
            to: 1500,
            speed: 3000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });

        // OLYMPIC BIKE TIMER
        $('.olympic2').countTo({
            from: 0,
            to: 25,
            speed: 3000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });

        // OLYMPIC RUN TIMER
        $('.olympic3').countTo({
            from: 0,
            to: 6.2,
            speed: 3000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });

        // HALF-IRON SWIM TIMER
        $('.half1').countTo({
            from: 0,
            to: 1930,
            speed: 3000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });

        // HALF-IRON BIKE TIMER
        $('.half2').countTo({
            from: 0,
            to: 56,
            speed: 3000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });

        // HALF-IRON RUN TIMER
        $('.half3').countTo({
            from: 0,
            to: 13.1,
            speed: 3000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });

         // IRONMAN SWIM TIMER
        $('.full1').countTo({
            from: 0,
            to: 3800,
            speed: 3000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });

        // IRONMAN BIKE TIMER
        $('.full2').countTo({
            from: 0,
            to: 112,
            speed: 3000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });

        // IRONMAN RUN TIMER
        $('.full3').countTo({
            from: 0,
            to: 26.2,
            speed: 3000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });
    });  

    $("#swim :checkbox").change(function() {
    var value = $(this).val(),
        $list = $(".mySwimItem");

        if (this.checked) {
            $list.append("<li data-value='" + value + "'>" + value + "</li>");
        }
        else {
            $list.find('li[data-value="' + value + '"]').slideUp("fast", function() {
                $(this).remove();
            });
        }
    });

    $("#bike :checkbox").change(function() {
    var value = $(this).val(),
        $list = $(".myBikeItem");

        if (this.checked) {
            $list.append("<li data-value='" + value + "'>" + value + "</li>");
        }
        else {
            $list.find('li[data-value="' + value + '"]').slideUp("fast", function() {
                $(this).remove();
            });
        }
    });

    $("#run :checkbox").change(function() {
    var value = $(this).val(),
        $list = $(".myRunItem");

        if (this.checked) {
            $list.append("<li data-value='" + value + "'>" + value + "</li>");
        }
        else {
            $list.find('li[data-value="' + value + '"]').slideUp("fast", function() {
                $(this).remove();
            });
        }
    });

    $("#extra :checkbox").change(function() {
    var value = $(this).val(),
        $list = $(".myExtraItem");

        if (this.checked) {
            $list.append("<li data-value='" + value + "'>" + value + "</li>");
        }
        else {
            $list.find('li[data-value="' + value + '"]').slideUp("fast", function() {
                $(this).remove();
            });
        }
    });

});