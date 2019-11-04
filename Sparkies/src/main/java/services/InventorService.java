package services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import repositories.InventorRepository;

@Service
public class InventorService {
	@Autowired
	InventorRepository inventorRepo;
	

	public static Object fetchAllInventors() {
		return null;
	}

}
