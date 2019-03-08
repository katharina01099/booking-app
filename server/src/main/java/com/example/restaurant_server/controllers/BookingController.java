package com.example.restaurant_server.controllers;

import com.example.restaurant_server.models.Booking;
import com.example.restaurant_server.repositories.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController

@RequestMapping(value = "/bookings")

public class BookingController {
   @Autowired
    BookingRepository bookingRepository;

   @GetMapping(value = "/{date}/date")
    public List<Booking> getBookingsByDate(@PathVariable String date){
       return bookingRepository.findBookingsByDate(date);
   }
}
