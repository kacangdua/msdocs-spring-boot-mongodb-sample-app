/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for
 * license information.
 */

// 'use strict';
// var app = angular.module('todoApp', ['ngRoute']);

// app.config(['$routeProvider', function ($routeProvider) {
//     $routeProvider
//         .when('/', {
//             templateUrl: 'Views/Insurance.html'
//         })
//         .when('/home', {
//             templateUrl: 'Views/home.html'
//         })
//         .when('/services', {
//             templateUrl: 'Views/services.html'
//         })
//         .when('/testimonials', {
//             templateUrl: 'Views/testimonials.html'
//         })
//         .when('/contact', {
//             templateUrl: 'Views/contact.html'
//         })
//         .otherwise({ redirectTo: '/' });
// }]);
// rt("Selamat datang di Asuransi Terpercaya!");
// // }); 

'use strict';
angular.module('todoApp', ['ngRoute'])
    .config(['$routeProvider',  function ($routeProvider) {
        $routeProvider.when('/', {
            // controller: 'todoListCtrl',
            templateUrl: 'Views/Insurance.html',
        }).otherwise({redirectTo: '/'});
    }]);


