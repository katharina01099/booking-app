package com.example.restaurant_server;

import com.example.restaurant_server.models.Booking;
import com.example.restaurant_server.models.Customer;
import com.example.restaurant_server.models.DiningTable;
import com.example.restaurant_server.repositories.BookingRepository;
import com.example.restaurant_server.repositories.CustomerRepository;
import com.example.restaurant_server.repositories.DiningTableRepository;
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

	@Autowired
	DiningTableRepository diningTableRepository;

	@Autowired
	BookingRepository bookingRepository;

	@Test
	public void contextLoads() {
	}

	@Test
	public void canAddCustomerToDb(){
		Customer customer = new Customer("John", "0908788668");
		customerRepository.save(customer);

		DiningTable diningTable = new DiningTable(1,4);
		diningTableRepository.save(diningTable);

		Booking booking = new Booking("04/34/23", "10:00", 4, customer, diningTable);
		bookingRepository.save(booking);





	}

}
