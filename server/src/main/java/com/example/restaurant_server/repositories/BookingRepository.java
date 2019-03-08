package com.example.restaurant_server.repositories;

import com.example.restaurant_server.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
}
