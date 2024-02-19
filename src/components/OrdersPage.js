import React, { useState } from "react";

const OrdersPage = () => {
  // Function to generate random order details
  const generateRandomOrders = () => {
    // Generate random data for each order detail
    const orders = [];
    for (let i = 0; i < 10; i++) {
      // Generating 10 random orders for example
      const order = {
        channel: `Channel ${Math.floor(Math.random() * 1000)}`,
        orderNumber: `Order ${Math.floor(Math.random() * 1000000)}`,
        orderDate: new Date().toLocaleDateString(),
        city: `City ${Math.floor(Math.random() * 100)}`,
        customerName: `Customer ${Math.floor(Math.random() * 1000)}`,
        orderValue: `$${(Math.random() * 1000).toFixed(2)}`,
        status: Math.random() > 0.5 ? "Pending" : "Completed",
        operation: "View",
      };
      orders.push(order);
    }
    return orders;
  };

  // Generating random orders
  const orders = generateRandomOrders();

  return (
    <div className="orders-page-container">
      <h1>Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Channel</th>
            <th>Order No</th>
            <th>Order Date</th>
            <th>City</th>
            <th>Customer Name</th>
            <th>Order Value</th>
            <th>Status</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.channel}</td>
              <td>{order.orderNumber}</td>
              <td>{order.orderDate}</td>
              <td>{order.city}</td>
              <td>{order.customerName}</td>
              <td>{order.orderValue}</td>
              <td>{order.status}</td>
              <td>{order.operation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
