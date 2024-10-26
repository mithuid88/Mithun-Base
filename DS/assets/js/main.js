// Menu Mobile Nav 
/**
 * Mobile nav toggle
 * 
 * 
 */

$(document).ready(function () {
    $('.close-icon').click(function () {
        $(this).closest('.form-banner').hide();

    });
});
const mobileNavShow = document.querySelector('.mobile-nav-show');
const mobileNavHide = document.querySelector('.mobile-nav-hide');

document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function (event) {
        event.preventDefault();
        mobileNavToogle();
    })
});

function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
}

/**
 * Hide mobile nav on same-page/hash links
 */
document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
            mobileNavToogle();
        }
    });

});

/**
 * Toggle mobile nav dropdowns
 */
const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

navDropdowns.forEach(el => {
    el.addEventListener('click', function (event) {
        if (document.querySelector('.mobile-nav-active')) {
            event.preventDefault();
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('dropdown-active');

            let dropDownIndicator = this.querySelector('.dropdown-indicator');
            dropDownIndicator.classList.toggle('bi-chevron-up');
            dropDownIndicator.classList.toggle('bi-chevron-down');
        }
    })
});
//  Menu Mobile Nav

//menu active class add
// $(document).ready(function () {
//     $('ul li a').click(function () {
//         $('li a').removeClass("active");
//         $(this).addClass("active");
//     });
// });

// secondary nav 



// if ($(window).width() <= 1279) {
//     $('.gds-secondary-navigation.variation-1 .gds-secondary-nav > ul > li > a').on('click', function (e) {
//         e.preventDefault();
//         $(this).closest('li').toggleClass('open');
//     });
// }

// tags close feature 

// $('.gds-tags.img-suffix button img').click(function () {
//     $(this).closest(".gds-tags").hide();

// });

// tooltip for tags 
// var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//     return new bootstrap.Tooltip(tooltipTriggerEl)
// })



//   isi


$(document).ready(function () {

    // new code for isi
    // $.fn.isInViewport = function () {
    //     var elementTop = $(this).offset().top;
    //     var elementBottom = elementTop + $(this).outerHeight();

    //     var viewportTop = $(window).scrollTop();
    //     var viewportBottom = viewportTop + $(window).height();

    //     return elementBottom > viewportTop && elementTop < viewportBottom;
    // };

    // $(window).on('resize scroll load', function () {
    //     if (!$('.gds-footer').isInViewport()) {
    //         $(".isi-panel").addClass("isi-inview");
    //     }
    // });

    // $('.isi-body').each(function () {
    //     var $this = $(this);
    //     var viewportTop = $(window).scrollTop();
    //     var viewportBottom = viewportTop + $(window).height();
    //     var elementTop = $this.offset().top;
    //     var elementBottom = elementTop + $this.outerHeight();
    //     if ((elementBottom > viewportTop) && (elementTop < viewportBottom)) {
    //         $(".isi-panel").addClass("isi-inview");
    //     }

    //     $(window).on('scroll', function () {
    //         var viewportTop = $(window).scrollTop();
    //         var viewportBottom = viewportTop + $(window).height();
    //         var elementTop = $this.offset().top;
    //         var elementBottom = elementTop + $this.outerHeight();

    //         if ((elementBottom > viewportTop) && (elementTop < viewportBottom)) {
    //             $(".isi-panel").addClass("isi-inview");
    //         } else {
    //             $(".isi-panel").removeClass("isi-inview");
    //         }
    //     });
    // });



    // new code for isi end 

    $('.close-icon-parent .close-icon').click(function () {
        setTimeout(function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    });


    $('.isi-panel').click(function () {
        var isiBodyElement = $('.isi-body')[0];
        setTimeout(function () {
            isiBodyElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    });


    $(window).scroll(function () {
        if ($('.isi-main ').length) {
            var stickyTop = $('.isi-main ').offset().top;
            var windowHeight = $(window).height();
            var windowScroll = $(window).scrollTop();

            if (stickyTop > (windowScroll + windowHeight - 150)) {
                $('.isi-panel').show();
            } else {
                $('.isi-panel').hide();
            }
        }
    });

    // var isExpanded = false;

    // $('.see-more').click(function () {
    //     if (!isExpanded) {
    //         var viewportHeight = $(window).height();
    //         var expandedHeight = viewportHeight * 0.7;
    //         $('.isi-panel').css('height', expandedHeight + 'px').addClass("panel-expanded");

    //     } else {
    //         $('.isi-panel').removeAttr('style').removeClass("panel-expanded");
    //     }

    //     isExpanded = !isExpanded;
    // });

    $('.isi-panel').click(function () {
        setTimeout(function () {
            var isiBodyElement = $('.isi-body')[0];
            isiBodyElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    });



    // toggle feature for blur (image placeholder)

    $('.bottom-txt').on('click', function () {
        $('.gds-img-overlay, .bottom-txt .remove-txt, .bottom-txt .add-txt').toggle();
        $('.gds-img-wrapper').toggleClass('no-blur');
    });


    // zoom feature (image placeholder)

    const initialZoom = 1;
    function openModal() {
        $('.gds-zoom-button').hide();
        $('.gds-overlay-content').show();
        $('.gds-overlay-modal').show();
        $('.gds-overlay-modal-img').css('transform', 'scale(' + initialZoom + ')');
        $('.zoom-out').addClass('disabled');
    }

    function updateZoomLevel(zoomLevel) {
        $('.gds-overlay-modal-img').css('transform', 'scale(' + zoomLevel + ')');

        if (zoomLevel <= initialZoom + 0.1) {
            $('.zoom-out').addClass('disabled');
        } else {
            $('.zoom-out').removeClass('disabled');
        }
    }

    $('.zoom-in').on('click', function () {
        const transformMatrix = $('.gds-overlay-modal-img').css('transform');
        if (transformMatrix && transformMatrix !== 'none') {
            const matrix = transformMatrix.match(/^matrix\((.+)\)$/);
            if (matrix) {
                const matrixValues = matrix[1].split(',').map(parseFloat);
                const scaleX = matrixValues[0];
                const newScaleX = scaleX * 1.1;
                updateZoomLevel(newScaleX);
            }
        }
    });

    $('.zoom-out').on('click', function () {
        const transformMatrix = $('.gds-overlay-modal-img').css('transform');
        if (transformMatrix && transformMatrix !== 'none') {
            const matrix = transformMatrix.match(/^matrix\((.+)\)$/);
            if (matrix) {
                const matrixValues = matrix[1].split(',').map(parseFloat);
                const scaleX = matrixValues[0];
                const newScaleX = scaleX * 0.9;
                updateZoomLevel(newScaleX);
            }
        }
    });

    $('.gds-normal-btn').on('click', function () {

        updateZoomLevel(initialZoom);
        $('.gds-overlay-modal').hide();
        $('.gds-zoom-button').show();
    });


    $('.gds-zoom-button').on('click', openModal);




    //media component (video)

    $('.gds-video-placeholder.webpage-player .gds-video-wrap ').click(function () {
        $(this).hide();
    });




    $('.gds-video-placeholder.overlay .gds-video-wrap').click(function () {
        $('#video-modal').modal('show');
    });

    $('.gds-transcript-header').click(function () {
        $(this).next('.gds-transcript-body').slideToggle();
    });


    // tabs component

    // $('.gds-tabs').each(function () {

    //     $(this).find('.gds-tabs-link ul li:first-child a').addClass('tab-active');
    //     $(this).find('.tabs-content-wrap:first-child').addClass('active');


    //     $(this).find('.gds-tabs-link ul li a').click(function () {
    //         var tab_id = $(this).attr('data-tab');


    //         $(this).closest('.gds-tabs').find('.gds-tabs-link ul li a').removeClass('tab-active');
    //         $(this).closest('.gds-tabs').find('.tabs-content-wrap').removeClass('active');


    //         $(this).addClass('tab-active');
    //         $("#" + tab_id).addClass('active');
    //     });
    // });
    $('.gds-tabs').each(function () {
        $(this).find('.gds-tabs-link ul li:first-child a').addClass('tab-active');
        $(this).find('.tabs-content-wrap:first-child').addClass('active');

        $(this).find('.gds-tabs-link ul li a').click(function (e) {
            e.preventDefault();
            var tab_id = $(this).attr('href');

            $(this).closest('.gds-tabs').find('.gds-tabs-link ul li a').removeClass('tab-active');
            $(this).closest('.gds-tabs').find('.tabs-content-wrap').removeClass('active');

            $(this).addClass('tab-active');
            $(tab_id).addClass('active');
        });

        var $navContainer = $(this).find('.gds-tabs-link ul');
        var $prevButton = $(this).find('.previous');
        var $nextButton = $(this).find('.next');
        var step = 200;

        function checkOverflow() {
            var containerWidth = $navContainer.width();
            var linksWidth = 0;
            $navContainer.find('li').each(function () {
                linksWidth += $(this).outerWidth(true);
            });

            if ($(this).closest('.gds-tabs').hasClass('tabs-even-space')) {
                $prevButton.hide();
                $nextButton.hide();
            } else {
                if (linksWidth > containerWidth) {
                    $nextButton.show();
                    if ($navContainer.scrollLeft() === 0) {
                        $prevButton.hide();
                    }
                } else {
                    $prevButton.hide();
                    $nextButton.hide();
                }
            }
        }

        checkOverflow.call(this);
        $(window).on('resize', checkOverflow.bind(this));

        function toggleButtons() {
            var containerWidth = $navContainer.width();
            var linksWidth = 0;
            $navContainer.find('li').each(function () {
                linksWidth += $(this).outerWidth(true);
            });

            if ($navContainer.scrollLeft() + containerWidth >= linksWidth) {
                $nextButton.hide();
            } else {
                $nextButton.show();
            }

            if ($navContainer.scrollLeft() === 0) {
                $prevButton.hide();
            } else {
                $prevButton.show();
            }
        }

        $nextButton.on('click', function () {
            var currentOffset = $navContainer.scrollLeft();
            var newOffset = currentOffset + step;
            $navContainer.animate({ scrollLeft: newOffset }, 'fast', toggleButtons);
        });

        $prevButton.on('click', function () {
            var currentOffset = $navContainer.scrollLeft();
            var newOffset = currentOffset - step;
            $navContainer.animate({ scrollLeft: newOffset }, 'fast', toggleButtons);
        });


        toggleButtons();

        $(this).find('.next-tab a').on('click', function (e) {
            e.preventDefault();
            var $currentTab = $(this).closest('.tabs-content-wrap').attr('id');
            var $activeTab = $(`[href="#${$currentTab}"]`, $(this).closest('.gds-tabs'));
            var $nextTab = $activeTab.closest('li').next('li').find('a');

            if ($nextTab.length) {
                $nextTab.trigger('click');
            }
        });
    });




    // teja search bar 

    let inputBox = $('.search-bar');
    let navbarNav = $('.nav.navbar-nav');
    let idsActions = $('.search-actions');

    $('.search').click(function () {
        inputBox.addClass('open');

        navbarNav.addClass('search-open');
        idsActions.addClass('w-100');
    });

    // mithun search bar 


    jQuery(document).ready(function () {
        jQuery('.search-block-form .search').click(function () {
            var searchInput = jQuery('.search-block-form .form-search');
            searchInput.toggleClass('search-active');
            if (searchInput.hasClass('search-active')) {
                searchInput.css('width', 'auto').focus();
            } else {
                searchInput.css('width', '0').blur();
            }
        });
    });


    // Range Input


    // Range Input
    function RangerSlide(ele) {
        ele.each(function () {
            var element = $(this);
            var values = element.val();
            var dataValue = element.attr("max");
            var fullValue = Math.round((values * 100) / dataValue);
            element.next().parent().find(".active-line").css("width", fullValue + "%");
            if (element.next().parent().find(".active-dot").length) {
                element.next().parent().find(".active-dot").css("left", fullValue + "%");
            }

            var vals = values / 1;
            var ulList = element.parent().parent().find("ul li");
            ulList.each(function (ids) {
                if (ids < vals || ids == vals) {
                    $(this).addClass("active-range");
                } else {
                    $(this).removeClass("active-range");
                }
            });


            $(".range-item ul li").removeClass("current-range");
            ulList.eq(values).addClass("current-range");
        });
    }

    $(".range-item form input").each(function () {
        RangerSlide($(this));
    });

    $(".range-item form input").on("input", function () {
        RangerSlide($(this));
    });

    // range input end


    // floating nav

    if ($('.floating-side-nav ').length) {
        $('.article-float-nav').closest('[class^="col-"]').addClass("sticky-nav-wrapper");
        $('.article-float-nav').closest('[class^="col-"]').children(':first-child').addClass('sticky-link-nav');
        function isTabletView() {
            return $(window).width() <= 991;
        }

        function toggleMenuDisplay() {
            if (isTabletView()) {
                $('.article-float-nav ul').slideUp();
            } else {
                $('.article-float-nav ul').slideDown();
            }
        }

        toggleMenuDisplay();

        $('.heading-sticky').click(function () {
            if (isTabletView()) {
                $(this).siblings('ul').slideToggle();
            }
        });

        $(window).resize(function () {
            toggleMenuDisplay();
        });

        function setActiveLink() {
            var sections = $('.sticky-content');
            var links = $('.article-float-nav ul li a');
            var scrollPos = $(window).scrollTop();

            sections.each(function () {
                var top = $(this).offset().top - 100;
                var bottom = top + $(this).outerHeight();
                var id = $(this).attr('id');

                if (scrollPos >= top && scrollPos < bottom) {
                    links.removeClass('sticky-active');
                    $('.article-float-nav ul li a[href="#' + id + '"]').addClass('sticky-active');
                }
            });
        }

        setActiveLink();

        $(window).scroll(function () {
            setActiveLink();
        });

        $('.article-float-nav ul li a').click(function (e) {
            e.preventDefault();
            var target = $(this).attr('href');
            var targetOffset = $(target).offset().top - 50;

            $('html, body').animate({
                scrollTop: targetOffset
            }, 600, function () {
                setActiveLink();
            });

            $(this).addClass('sticky-active').parent().siblings().find('a').removeClass('sticky-active');
        });
    }
    // jump links below

    $('.jump-links-parent').each(function () {
        var $navContainer = $(this).find('.jump-links ul');
        var $prevButton = $(this).find('.previous');
        var $nextButton = $(this).find('.next');
        var step = 200;
        $prevButton.hide();

        function checkOverflow() {
            var containerWidth = $navContainer.outerWidth();
            var linksWidth = 0;
            $navContainer.find('li').each(function () {
                linksWidth += $(this).outerWidth(true);
            });
            if (linksWidth > containerWidth) {
                $nextButton.show();
            } else {
                $nextButton.hide();
                $prevButton.hide();
            }
        }

        checkOverflow();
        $(window).on('resize', checkOverflow);

        $nextButton.on('click', function () {
            var currentOffset = $navContainer.scrollLeft();
            var newOffset = currentOffset + step;
            $navContainer.animate({ scrollLeft: newOffset }, 'fast', function () {
                if ($navContainer.scrollLeft() + $navContainer.innerWidth() >= $navContainer[0].scrollWidth) {
                    $nextButton.hide();
                }
            });
            $prevButton.show();
        });

        $prevButton.on('click', function () {
            var currentOffset = $navContainer.scrollLeft();
            var newOffset = currentOffset - step;
            $navContainer.animate({ scrollLeft: newOffset }, 'fast', function () {
                if ($navContainer.scrollLeft() === 0) {
                    $prevButton.hide();
                }
            });
            $nextButton.show();
        });
    });

    //to check element is in viewport 
    var $element = $('.jump-links-wrapper');

    function checkElementPosition() {
        var scrollTop = $(window).scrollTop();
        var elementOffsetTop = $element.offset().top;
        var elementHeight = $element.outerHeight();

        if (scrollTop >= elementOffsetTop && scrollTop < (elementOffsetTop + elementHeight)) {
            $(".jump-links").addClass("link-sticky");
        } else {
            $(".jump-links").removeClass("link-sticky");
        }
    }

    $(window).on('scroll', checkElementPosition);
    checkElementPosition();



    $('.jump-links-wrapper .jump-links-parent .jump-links ul a').on('click', function (event) {
        event.preventDefault();
        var targetId = $(this).attr('href');
        var targetElement = $(targetId);
        var jumpLinksHeight = $('.jump-links').outerHeight();

        var offsetTop = targetElement.offset().top - jumpLinksHeight;

        $('html, body').animate({
            scrollTop: offsetTop
        }, 200);

    });



});


$(document).ready(function () {
    function checkIsiInView() {
        $('.tabbed-body-content').each(function () {
            var $this = $(this);

            if (!$this.is(':visible')) {
                return;
            }

            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            var elementTop = $this.offset().top;
            var elementBottom = elementTop + $this.outerHeight();

            if ((elementBottom > viewportTop) && (elementTop < viewportBottom)) {
                $(".tabbed-panel-parent").addClass("tabbed-isi-inview");
            } else {
                $(".tabbed-panel-parent").removeClass("tabbed-isi-inview");

            }
        });
    }

    checkIsiInView();

    $(window).on('scroll', function () {
        checkIsiInView();
    });


    $(window).on('resize', function () {
        checkIsiInView();
    });

    $('.multitab-tab').on('click', function (event) {
        event.preventDefault();


        var clickedTabClass = $(this).hasClass('tab1-tab') ? 'tab1-tab' : 'tab2-tab';


        if (clickedTabClass === 'tab1-tab') {
            $('.tab1-content, .tab1-panel').css('display', 'block');
            $('.tab2-content, .tab2-panel').css('display', 'none');
        } else if (clickedTabClass === 'tab2-tab') {
            $('.tab2-content, .tab2-panel').css('display', 'block');
            $('.tab1-content, .tab1-panel').css('display', 'none');
        }

        $('.multitab-tab').removeClass('active');
        $('.multitab-tab').parent('li').removeClass('link-active');


        $(this).addClass('active');
        $(this).parent('li').addClass('link-active');


        $('.' + clickedTabClass).each(function () {
            $(this).addClass('active');
            $(this).parent('li').addClass('link-active');
        });
    });


    $('.tabbed-panel-content').click(function () {
        setTimeout(function () {
            if ($('.tab1-content').is(':visible')) {
                var isiBodyElement = $('#tab1-content')[0];
                isiBodyElement.scrollIntoView({ behavior: 'smooth' });
            } else if ($('.tab2-content').is(':visible')) {
                var isiBodyElement = $('#tab2-content')[0];
                isiBodyElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    });

});
