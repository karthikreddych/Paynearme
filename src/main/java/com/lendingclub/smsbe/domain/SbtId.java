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
//import lombok.*;

/**
 * @author Greg Turnquist
 */
// tag::code[]
@Entity //(1)
@Table(name="sbt_id")
//@Data
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
	
//	@Override
//	public boolean equals(Object o) {
//		if (this == o) return true;
//		if (o == null || getClass() != o.getClass()) return false;
//		Sbt_id sbt_id = (Sbt_id) o;
//		return Objects.equals(id, sbt_id.id) &&
//			Objects.equals(template_id, sbt_id.template_id) &&
//			Objects.equals(sms_id, sbt_id.sms_id);
//	}
//
//	@Override
//	public int hashCode() {
//
//		return Objects.hash(id, template_id, sms_id);
//	}
//
//	public Long getId() {
//		return id;
//	}
//
//	public void setId(Long id) {
//		this.id = id;
//	}
//
//	public String gettemplate_id() {
//		return template_id;
//	}
//
//	public void settemplate_ide(String template_id) {
//		this.template_id = template_id;
//	}
//
//	public String getsms_id() {
//		return sms_id;
//	}
//
//	public void setsms_id(String sms_id) {
//		this.sms_id = sms_id;
//	}
//
//	@Override
//	public String toString() {
//		return "sbt_id{" +
//			"id=" + id +
//			", template_id='" + template_id + '\'' +
//			", sms_id='" + sms_id + '\'' +
//
//			'}';
//	}
//
//	public String getTemplate_id() {
//		return template_id;
//	}
//
//	public void setTemplate_id(String template_id) {
//		this.template_id = template_id;
//	}
//
//	public String getSms_id() {
//		return sms_id;
//	}
//
//	public void setSms_id(String sms_id) {
//		this.sms_id = sms_id;
//	}


	public String getTemplateId() {
		return templateId;
	}

	public void setTemplateId(String templateId) {
		this.templateId = templateId;
	}

	public String getSmsId() {
		return smsId;
	}

	public void setSmsId(String smsId) {
		this.smsId = smsId;
	}
}
	
	
