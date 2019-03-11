package com.example.restaurant_server.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="dining_tables")

public class DiningTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name="id")
    private Long id;

    @Column(name="table_num")
    int tableNum;

    @Column(name="table_capacity")
    int tableCapacity;

    @JsonIgnore
    @OneToMany(mappedBy = "diningTable")
    private List<Booking> bookings;

    public DiningTable(int tableNum, int tableCapacity) {
        this.tableNum = tableNum;
        this.tableCapacity = tableCapacity;
        this.bookings = new ArrayList<>();
    }

    public DiningTable() {
    }

    public Long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getTableNum() {
        return tableNum;
    }

    public void setTableNum(int tableNum) {
        this.tableNum = tableNum;
    }

    public int getTableCapacity() {
        return tableCapacity;
    }

    public void setTableCapacity(int tableCapacity) {
        this.tableCapacity = tableCapacity;
    }
}
