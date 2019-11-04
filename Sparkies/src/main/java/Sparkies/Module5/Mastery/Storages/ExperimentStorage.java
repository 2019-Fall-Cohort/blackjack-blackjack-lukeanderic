package Sparkies.Module5.Mastery.Storages;

import org.springframework.beans.factory.annotation.Autowired;

import Sparkies.Module5.Mastery.Entities.Experiment;

public class ExperimentStorage {

	@Autowired
	private ExperimentRepository experimentRepo;
	
	public Iterable<Experiment> getAllExperiments() {
		return experimentRepo.findAll();
	}

}
