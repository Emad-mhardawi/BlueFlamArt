import React from "react";
import "./orderTable.css";
import { useSelector } from "react-redux";

export default function OrdersTable(props) {
  const userOrders = useSelector((state) => state.userOrders);
  let { orders } = userOrders;
  if (!orders) {
    orders = [];
  }
  return (
    <table className="orders-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Order</th>
          <th>Size</th>
          <th>Price</th>
          <th>Payment</th>
          <th>Status</th>
          <th>Full Body</th>
        </tr>
      </thead>

      <tbody>
        {orders.map((order) => (
          <tr key={order._id}>
            <td className="td-order_id">
              <p className="aa">{order._id}</p>
            </td>
            <td>
              <p>{order.portraitName}</p>
            </td>
            <td>{order.portraitSize} </td>
            <td> {order.price} $</td>
            <td>
              <p
                className={
                  order.paymentResult.status === "paid"
                    ? "status-paid"
                    : "status-unpaid"
                }
              >
                {order.paymentResult.status}
              </p>
            </td>
            <td>In Progress</td>
            <td>Yes</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
