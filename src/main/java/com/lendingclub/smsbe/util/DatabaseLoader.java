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
		for(int i = 1; i <= 10; i++){
			this.repository.save(new SbtId("T00"+i, "S00"+i));
		}

		System.out.println(">>>>>>insertion done");
	}
}
// end::code[]