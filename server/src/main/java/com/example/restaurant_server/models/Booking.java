package com.example.restaurant_server.models;

import javax.persistence.*;

@Entity 
@Table(name="bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name="Id")
    private Long id;

    @Column(name="date")
    private String date;

    @Column(name="time")
    private String time;

    @Column(name="num_people")
    private int numPeople;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "dining_table_id", nullable = false)
    private DiningTable diningTable;

    public Booking(String date, String time, int numPeople, Customer customer, DiningTable diningTable) {
        this.date = date;
        this.time = time;
        this.numPeople = numPeople;
        this.customer = customer;
        this.diningTable = diningTable;
    }

    public Booking() {
    }

    public Long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public int getNumPeople() {
        return numPeople;
    }

    public void setNumPeople(int numPeople) {
        this.numPeople = numPeople;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public DiningTable getDiningTable() {
        return diningTable;
    }

    public void setDiningTable(DiningTable diningTable) {
        this.diningTable = diningTable;
    }
}
