package com.lendingclub.smsbe;


import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Import;

import com.lendingclub.smsbe.controller.RequestLoggingFilterConfig;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
//@Import({RequestLoggingFilterConfig.class})
public class SbtSmsFebeApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(SbtSmsFebeApplication.class, args);
	}

}
