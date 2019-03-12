package com.example.restaurant_server.repositories;

import com.example.restaurant_server.models.Booking;
import com.example.restaurant_server.projections.EmbedAllForBookings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin
@Repository
@RepositoryRestResource(excerptProjection = EmbedAllForBookings.class)
public interface BookingRepository extends JpaRepository<Booking, Long> {

   List<Booking> findBookingsByDate(String date);

}
