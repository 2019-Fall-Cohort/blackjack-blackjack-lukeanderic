package Sparkies.Module5.Mastery.Contollers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Sparkies.Module5.Mastery.Entities.Experiment;
import Sparkies.Module5.Mastery.Storages.ExperimentStorage;

@RestController
@RequestMapping("/api/experiments")
public class ExperimentController {

	@Autowired
	private ExperimentStorage experimentStorage;
	
	@GetMapping("")
	public Iterable<Experiment> getExperiments(){
		return experimentStorage.getAllExperiments();
	}
	
}
