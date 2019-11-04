package tests;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.contains;
import static org.mockito.Mockito.when;

import java.util.Collections;

import org.junit.Test;

import Sparkies.Module5.Mastery.Contollers.InventorController;
import Sparkies.Module5.Mastery.Entities.Inventor;
import services.InventorService;


public class InventorTest {
	
	InventorController underTest;
	
	@Test
	public void fetchAllReturnsListOfInventors() throws Exception {
		Inventor testInventor = new Inventor("testInventor");
		when(InventorService.fetchAllInventors()).thenReturn(Collections.singletonList(testInventor));
		Iterable<Inventor> retrievedInventors = underTest.fetchAll();
		assertThat(retrievedInventors, contains(testInventor));
	}
}
