package Sparkies.Module5.Mastery.Entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.OneToMany;

import org.springframework.data.annotation.Id;

@Entity
public class Inventor {
	
	@Id
	@GeneratedValue
	private Long id;
	private String name;
	private String country;
	private String university;
	private List<String> picture;
	@OneToMany
	private List<Inventor> collaborators;
	@OneToMany
	private List<Discipline> disciplines;
	@OneToMany
	private List<Experiment> experiments;
	
	protected Inventor() {}
	
	public Inventor(String name) {
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getCountry() {
		return country;
	}

	public String getUniversity() {
		return university;
	}

	public List<String> getPicture() {
		return picture;
	}

	public List<Inventor> getCollaborators() {
		return collaborators;
	}

	public List<Discipline> getDisciplines() {
		return disciplines;
	}

	public List<Experiment> getExperiments() {
		return experiments;
	}
	

}
