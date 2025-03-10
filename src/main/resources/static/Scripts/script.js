/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for
 * license information.
 */

'use strict';
var app = angular.module('todoApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'https://crispy-waffle-vgjgg554xg6fwvpp-8080.app.github.dev/Views/Insurance.html'
        })
        .when('/home', {
            templateUrl: 'https://crispy-waffle-vgjgg554xg6fwvpp-8080.app.github.dev/Views/home.html'
        })
        .when('/services', {
            templateUrl: 'https://crispy-waffle-vgjgg554xg6fwvpp-8080.app.github.dev/Views/services.html'
        })
        .when('/testimonials', {
            templateUrl: 'https://crispy-waffle-vgjgg554xg6fwvpp-8080.app.github.dev/Views/testimonials.html'
        })
        .when('/contact', {
            templateUrl: 'https://crispy-waffle-vgjgg554xg6fwvpp-8080.app.github.dev/Views/contact.html'
        })
        .otherwise({ redirectTo: '/' });
}]);




