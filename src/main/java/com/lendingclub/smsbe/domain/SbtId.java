/*
 * Copyright 2015 the original author or authors.
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
package com.lendingclub.smsbe.domain;

import java.util.Objects;

import javax.persistence.*;
import lombok.Data;

/**
 * @author Greg Turnquist
 */
// tag::code[]
@Entity //(1)
@Table(name="sbt_id")
@Data
public class SbtId {

	private @Id @GeneratedValue Long id; //(2)

	@Column(name = "template_id")
	private String templateId;
	@Column(name = "sms_id")
	private String smsId;
	
	public SbtId() {}

	public SbtId(String templateId, String smsId) {
		this.templateId = templateId;
		this.smsId = smsId;
	}
	
}
	
	
