//(function($){
    //'use-strict';


    /* ---------------------------------------------
     Initialize All Functions
     --------------------------------------------- */
    function initAll(){
        // Initializing Functions Triggered On Window Load
        $(window).on('load', function(){
            console.log('window loaded');
            initPreloaderFade();
        });

        // Initializing Functions Triggered On Window Resize
        $(window).on('resize', function(){
            //console.log('window resized');
            initHeroHeight();
            initPortfolioResize();
        });

        // Initializing Functions Triggered On Window Scroll
        $(window).on('scroll', function(){
            //console.log('window scrolled');
            initHeaderAnimation();
        });

        // Initializing All Functions
        initHeroHeight();
        initParallax();
        initSectionHighlight();
        initImageBackground();
        initAnimateScroll();
        initNavMenu();
        initMagnificPopup();
        initPortfolio();
        initMasonry();
        initProgressBar();
        initCarousel();
        initWowAnimation();
        initMiscellaneous();

        // The window load event does not always get fired on remote server
        // So we make sure that the preloader is not displayed when document is ready
        if (document.readyState === 'complete') {
            console.log('document is ready');
            initPreloaderFade();
        }

        // Force scroll to location hash
        //console.log('location hash: ' + location.hash);
        if (location.hash.match('^#')) {
            $(location.hash).animatescroll();
        }

        // Initialize tooltips
        $('.tooltipped').tooltip();
    }


    /* ---------------------------------------------
     Get Query Parameters
     --------------------------------------------- */
    function getQueryParameters(){
        var query_params = {};

        location.search.substr(1).split('&').forEach(function(item) {
            query_params[item.split('=')[0]] = item.split('=')[1];
        });

        return query_params;
    }


    /* ---------------------------------------------
     Preloader Fadeout
     --------------------------------------------- */
    function initPreloaderFade(){
        $('.image-bg').imagesLoaded({ background: true }, function(){
            $('.preloader').fadeOut();
        });
    }


    /* ---------------------------------------------
     Hero Height
     --------------------------------------------- */
    function initHeroHeight(){
        $('.hero-height').height($(window).height());
    }


    /* ---------------------------------------------
     Header Animation
     --------------------------------------------- */
    function initHeaderAnimation(){
        var scroll_top = $(document).scrollTop();
        if(scroll_top >= 100){
            $('.header').removeClass('header-hidden');
            $('.header').addClass('header-visible');
        }else{
            $('.header').removeClass('header-visible');
            $('.header').addClass('header-hidden');
        }
    }


    /* ---------------------------------------------
     Section Highlighting
     --------------------------------------------- */
    function initSectionHighlight(){
        $('section').each(function(){
            $(this).waypoint(function(direction){
                if(direction === 'down'){
                    var sec_id = $(this).attr('id');
                    var current_section_link = '.' + sec_id + '-nav';
                    $('.main-nav > ul > li > a').removeClass('active-nav');
                    $(current_section_link).addClass('active-nav');
                }
            } , {offset: '130px'});
            $(this).waypoint(function(direction){
                if(direction === 'up'){
                    var sec_id = $(this).attr('id');
                    var current_section_link = '.' + sec_id + '-nav';
                    $('.main-nav > ul > li > a').removeClass('active-nav');
                    $(current_section_link).addClass('active-nav');
                }
            } , {offset: function(){return -$(this).height() + 130;}});
        });
    }


    /* ---------------------------------------------
     Parallax Background
     --------------------------------------------- */
    function initParallax(){
        if(!device.tablet() && !device.mobile()){
            $('.parallax-section').each(function(){
                $('.parallax-section').parallaxScroll('50%', 0.3);
            });
            $('.parallax-layer').parallax();
        }
    }


    /* ---------------------------------------------
     Image Background
     --------------------------------------------- */
    function initImageBackground(){
        $('.image-bg').each(function(){
            if($(this).attr('data-image-bg')){
                $(this).css({
                    'background': 'url(' + $(this).data('image-bg') + ')',
                    'background-position': 'center top',
                    'background-repeat': 'no-repeat',
                    'background-size': 'cover'
                });
            }
        });
    }


    /* ---------------------------------------------
     Animate Scroll
     --------------------------------------------- */
    function initAnimateScroll(){
        $('.animatescroll-link').on('click', function(e){
            if ($(this).attr('href').match('^#')) {
                e.preventDefault();
            }
        });
    }


    /* ---------------------------------------------
     Navigation Menu
     --------------------------------------------- */
    function initNavMenu(){
        $('.menu-bar').on('click', function(){
            if($('.main-nav').hasClass('hidden')){
                $('.main-nav').removeClass('hidden');
                $('.main-nav').addClass('active');
            }
        });

        $('.menu-close').on('click', function(){
            if($('.main-nav').hasClass('active')){
                $('.main-nav').removeClass('active');
                $('.main-nav').addClass('hidden');
            }
        });
    }


    /* ---------------------------------------------
     Magnific Popup Plugin
     --------------------------------------------- */
    function initMagnificPopup(){
        $('.portrait-mfp').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        $('.portfolio-mfp').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        $('.video-mfp').magnificPopup({
            type: 'iframe',
            gallery: {
                enabled: true
            }
        });
    }


    /* ---------------------------------------------
     Masonry
     --------------------------------------------- */
    function initMasonry(){
        $('.masonry').imagesLoaded({ background: true }, function(){
            $('.masonry').masonry();
        });
    }


    /* ---------------------------------------------
     Portfolio
     --------------------------------------------- */
    function initPortfolio(){
        $('.portfolio-items').imagesLoaded({ background: true }, function(){
            $('.portfolio-items').show();
            $('.portfolio-items').isotope({
                filter:'*',
                layoutMode:'masonry',
                animationOptions:{
                    duration:750,
                    easing:'linear'
                }
            });
        });

        $('.filter').find('a').on('click', function(){
            $('.portfolio-items').isotope({
                filter  : $(this).attr('data-filter'),
                animationOptions: {
                    duration: 750,
                    queue: false
                }
            });
            return false;
        });

        $('.filter a').on('click', function(){
            if (!$(this).hasClass('active')){
                $('.filter a').removeClass('active');
                $(this).addClass('active');
            }
        });
    }


    /* ---------------------------------------------
     Portfolio Resize
     --------------------------------------------- */
    function initPortfolioResize(){
        $('.portfolio-items').isotope({
            filter  : $('.filter').find('a.active').attr('data-filter'),
            animationOptions: {
                duration: 750,
                queue: false
            }
        });
        return false;
    }


    /* ---------------------------------------------
     Progress Bar Animation
     --------------------------------------------- */
    function initProgressBar(){
        $('.progress-bar > span').each(function(){
            var $this = $(this);
            var width = $(this).data('percent');
            $this.css({
                'transition' : 'width 1.5s'
            });

            setTimeout(function() {
                $this.filter(':visible').waypoint(function(direction) {
                    if( direction === 'down' ) {
                        $this.css('width', width + '%');
                    }
                } , { offset: '100%' } );
            }, 500);
        });
    }


    /* ---------------------------------------------
     All Carousels
     --------------------------------------------- */
    function initCarousel(){
        $('.client-carousel').owlCarousel({
            pagination: false,
            navigation: false,
            autoPlay: true,
            slideSpeed : 500,
            items : 5,
            itemsDesktop : [991,3],
            itemsDesktopSmall : [768,3]
        });

        $('.reference-carousel').owlCarousel({
            pagination: true,
            navigation: false,
            autoPlay: true,
            slideSpeed : 500,
            items : 1
        });
    }


    /* ---------------------------------------------
     Wow Animation
     --------------------------------------------- */
    function initWowAnimation(){
        var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 150,
                mobile: false,
                live: true
            }
        );
        wow.init();
    }


    /* ---------------------------------------------
     Miscellaneous
     --------------------------------------------- */
    function initMiscellaneous(){
        $('.single-blog-navigation').children('a').addClass('btn-custom waves-effect');
        $('.pagination').children('.page-numbers').addClass('btn-circle waves-effect waves-light');
    }


//})(jQuery);
