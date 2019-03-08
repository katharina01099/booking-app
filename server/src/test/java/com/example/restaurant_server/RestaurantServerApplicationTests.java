package com.example.restaurant_server;

import com.example.restaurant_server.models.Customer;
import com.example.restaurant_server.repositories.CustomerRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class RestaurantServerApplicationTests {

	@Autowired
	CustomerRepository customerRepository;

	@Test
	public void contextLoads() {
	}

	@Test
	public void canAddCustomerToDb(){
		Customer customer = new Customer("John", "0908788668");
		customerRepository.save(customer);
	}

}
