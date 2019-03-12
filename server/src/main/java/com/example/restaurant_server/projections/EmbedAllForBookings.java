package com.example.restaurant_server.projections;


import com.example.restaurant_server.models.Booking;
import com.example.restaurant_server.models.Customer;
import com.example.restaurant_server.models.DiningTable;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "embedAllForBookings", types = Booking.class)
public interface EmbedAllForBookings {

    public Long getId();
    public String getTime();
    public String getDate();
    public int getNumPeople();
    public Customer getCustomer();
    public DiningTable getDiningTable();
}
