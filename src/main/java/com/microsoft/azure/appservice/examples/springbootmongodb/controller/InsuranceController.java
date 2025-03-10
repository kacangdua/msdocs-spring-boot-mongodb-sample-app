// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
package com.microsoft.azure.appservice.examples.springbootmongodb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class InsuranceController {
    
    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("title", "Asuransi Terpercaya");
        return "View/Insurance"; // Mengarah ke src/main/resources/templates/View/Insurance.html
    }

    @GetMapping("/home")
    public String homeSection(Model model) {
        model.addAttribute("message", "Perlindungan Terbaik untuk Anda dan Keluarga");
        return "View/home";
    }

    @GetMapping("/services")
    public String servicesSection(Model model) {
        return "View/services";
    }

    @GetMapping("/testimonials")
    public String testimonialsSection(Model model) {
        return "View/testimonials";
    }

    @GetMapping("/contact")
    public String contactSection(Model model) {
        return "View/contact";
    }
}

