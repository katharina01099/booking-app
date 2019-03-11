package com.example.restaurant_server.components;

import com.example.restaurant_server.RestaurantServerApplication;
import com.example.restaurant_server.models.Booking;
import com.example.restaurant_server.models.Customer;
import com.example.restaurant_server.models.DiningTable;
import com.example.restaurant_server.repositories.BookingRepository;
import com.example.restaurant_server.repositories.CustomerRepository;
import com.example.restaurant_server.repositories.DiningTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    DiningTableRepository dinningTableRepository;

    @Autowired
    BookingRepository bookingRepository;

    public DataLoader(){

    }

        public void run(ApplicationArguments args){
        Customer customer1 = new Customer("Alex", "0877997979");
        customerRepository.save(customer1);

        Customer customer2 = new Customer("Colin", "0797997979");
        customerRepository.save(customer2);

        Customer customer3 = new Customer("Dell", "07676769797");
        customerRepository.save(customer3);

        Customer customer4 = new Customer("John", "07676723797");
        customerRepository.save(customer4);

        Customer customer5 = new Customer("John", "07676723797");
        customerRepository.save(customer5);



        DiningTable diningTable1 = new DiningTable(1, 2);
        dinningTableRepository.save(diningTable1);

        DiningTable diningTable2 = new DiningTable(2, 4);
        dinningTableRepository.save(diningTable2);

            DiningTable diningTable3 = new DiningTable(3, 6);
            dinningTableRepository.save(diningTable3);

            DiningTable diningTable4 = new DiningTable(4, 4);
            dinningTableRepository.save(diningTable4);

            DiningTable diningTable5 = new DiningTable(5, 2);
            dinningTableRepository.save(diningTable5);

            DiningTable diningTable6 = new DiningTable(6, 2);
            dinningTableRepository.save(diningTable6);

            DiningTable diningTable7 = new DiningTable(7, 4);
            dinningTableRepository.save(diningTable7);

            DiningTable diningTable8 = new DiningTable(8, 8);
            dinningTableRepository.save(diningTable8);

            DiningTable diningTable9 = new DiningTable(9, 4);
            dinningTableRepository.save(diningTable9);

            DiningTable diningTable10 = new DiningTable(10, 4);
            dinningTableRepository.save(diningTable10);

           Booking booking1 = new Booking("11-03-2019", "12:00", 2, customer1, diningTable1);
           bookingRepository.save(booking1);


            Booking booking2 = new Booking("13-03-2019", "12:00", 2, customer2, diningTable2);
            bookingRepository.save(booking2);

            Booking booking3 = new Booking("16-03-2019", "12:00", 2, customer1, diningTable3);
            bookingRepository.save(booking3);




        }
    }



