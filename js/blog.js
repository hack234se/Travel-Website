"use strict";

$(document).ready(function() {

    $("#button1").click(function() {
        $("#d1").slideToggle();
    });

    $("#button2").click(function() {
        $("#d2").slideToggle();
    });

    $("#my-accordion").accordion({
        // Allow self close.(data-close-able)
        closeAble: false,

        // Close other sections.(data-close-other)
        closeOther: true,

        // Animation Speed.(data-slide-speed)
        slideSpeed: 150,

        // The section open on first init. A number from 1 to X or false.(data-active-index)
        activeIndex: 1,

        // Callback when a section is open
        openSection: function(section) {},

        // Callback before a section is open
        beforeOpenSection: function(section) {},
    });

});