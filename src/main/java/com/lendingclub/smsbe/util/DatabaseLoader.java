/*
 * Copyright 2020 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.lendingclub.smsbe.util;

import com.lendingclub.smsbe.domain.SbtId;
import com.lendingclub.smsbe.repository.SbtidRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * @author 
 */
// tag::code[]
@Component // <1>
public class DatabaseLoader implements CommandLineRunner { // <2>

	private final SbtidRepository repository;

	@Autowired // <3>
	public DatabaseLoader(SbtidRepository repository) {
		this.repository = repository;
	}

	@Override
	public void run(String...strings) throws Exception { // <4>
		System.out.println(">>>>>>inserting data");
		{
			this.repository.save(new SbtId("1", "Payment Reminder"));
			this.repository.save(new SbtId("2", "Delinquency Notice"));
			this.repository.save(new SbtId("3", "Opt-in Confirmation Message"));
			this.repository.save(new SbtId("4", "Scheduled Payment Reminder"));
			this.repository.save(new SbtId("5", "Payment Reminders With No Payment Link"));
			this.repository.save(new SbtId("6", "DQ Limited Content – Option 1"));
			this.repository.save(new SbtId("7", "DQ Limited Content – Option 2"));
			this.repository.save(new SbtId("8", "DPD 111"));
			this.repository.save(new SbtId("9", "DPD 13"));
			this.repository.save(new SbtId("10", "DPD 21"));
			this.repository.save(new SbtId("11", "DPD 28"));
			this.repository.save(new SbtId("12", "DPD 36"));
			this.repository.save(new SbtId("13", "DPD 43"));
			this.repository.save(new SbtId("55", "DPD 13 - With PNM Debit Payment Link (Mini-Miranda)"));
			this.repository.save(new SbtId("56", "Payment Reminders With PNM Debit Payment Link"));
			
		}

		System.out.println(">>>>>>insertion done");
	}
}
// end::code[]