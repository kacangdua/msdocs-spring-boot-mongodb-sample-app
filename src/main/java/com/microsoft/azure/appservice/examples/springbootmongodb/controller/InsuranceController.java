// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
package com.microsoft.azure.appservice.examples.springbootmongodb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class InsuranceController {

    @GetMapping("/")
    public String index() {
        System.out.println("Endpoint / dipanggil");
        return "Views/Insurance"; // Jika menggunakan Thymeleaf
    }

    @GetMapping("/home")
    public String home() {
        return "Views/home";
    }

    @GetMapping("/services")
    public String services() {
        return "Views/services";
    }

    @GetMapping("/testimonials")
    public String testimonials() {
        return "Views/testimonials";
    }

    @GetMapping("/contact")
    public String contact() {
        return "Views/contact";
    }
}

