package com.example.restaurant_server.models;

import javax.persistence.*;

@Entity
@Table(name="dining_tables")

public class DiningTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name="id")
    private long id;

    @Column(name="table_num")
    int tableNum;

    @Column(name="table_capacity")
    int tableCapacity;

    public DiningTable(int tableNum, int tableCapacity) {
        this.tableNum = tableNum;
        this.tableCapacity = tableCapacity;
    }

    public DiningTable() {
    }

    public long getId() {
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