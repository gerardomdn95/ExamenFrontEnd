(function () {
    'use strict'

    var landing = {
        templateUrl: "app/landing_component/landing_component.html"
    }

    angular
        .module('front')
        .component('landing', landing);
})();