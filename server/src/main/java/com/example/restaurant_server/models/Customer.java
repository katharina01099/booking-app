package com.example.restaurant_server.models;

public class Customer {

    private long id;
    private String name;
    private int phoneNumber;
    private int numVisit;


    public Customer(String name, int phoneNumber) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.numVisit = 0;
    }

    public Customer() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public int getNumVisit() {
        return numVisit;
    }

    public void setNumVisit(int numVisit) {
        this.numVisit = numVisit;
    }
}
