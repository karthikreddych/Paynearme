
package com.lendingclub.smsbe.controller;

import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
  
 */
// tag::code[]
@RestController // <1>
public class HomeController {

	@GetMapping("/api/dadjokes")
    public String dadJokes() {
        return "Justice is a dish best served cold, if it were served warm it would be just water.";
	}

}
// end::code[]  
