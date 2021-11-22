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
package LendingClub.sbtsmsfebe;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * @author Greg Turnquist
 */
// tag::code[]

@Entity //(1)
public class Sbt_id {

	private @Id @GeneratedValue Long id; //(2)
	private String template_id;
	private String sms_id;
	
	//private Sbt_id() {}

	public Sbt_id(String template_id, String sms_id) {
		this.template_id = template_id;
		this.sms_id = sms_id;
			}
	
	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Sbt_id sbt_id = (Sbt_id) o;
		return Objects.equals(id, sbt_id.id) &&
			Objects.equals(template_id, sbt_id.template_id) &&
			Objects.equals(sms_id, sbt_id.sms_id);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id, template_id, sms_id);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String gettemplate_id() {
		return template_id;
	}

	public void settemplate_ide(String template_id) {
		this.template_id = template_id;
	}

	public String getsms_id() {
		return sms_id;
	}

	public void setsms_id(String sms_id) {
		this.sms_id = sms_id;
	}
	
	@Override
	public String toString() {
		return "sbt_id{" +
			"id=" + id +
			", template_id='" + template_id + '\'' +
			", sms_id='" + sms_id + '\'' +
		
			'}';
	}

	public String getTemplate_id() {
		return template_id;
	}

	public void setTemplate_id(String template_id) {
		this.template_id = template_id;
	}

	public String getSms_id() {
		return sms_id;
	}

	public void setSms_id(String sms_id) {
		this.sms_id = sms_id;
	}
	
}	
	
	
