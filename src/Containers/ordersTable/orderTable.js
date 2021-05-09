import React , {useEffect, useState} from 'react'
import './orderTable.css';
import { useDispatch, useSelector } from "react-redux";





export default function OrdersTable(props) {


const userOrders = useSelector((state) => state.userOrders);
  let {orders} = userOrders;
if(!orders){
  orders = []
}
  return (
    <table className='orders-table'>
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
        {orders.map((order)=>(
          <tr key={order._id}>
            <td className='td-order_id'><p className='aa'>{order._id}</p></td>
            <td><p>{order.portraitName}</p></td>
            <td>{order.portraitSize} </td>
            <td> {order.price} $</td>
            <td><p className={order.paymentResult.status ==='paid'? 'status-paid': 'status-unpaid'}>{order.paymentResult.status}</p></td>
            <td>In Progress</td>
            <td>Yes</td>
        </tr>
        ))}
      </tbody>
    </table>
  );
}









/*

import React , {useEffect} from 'react'

import { DataGrid } from '@material-ui/data-grid';



const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'order_name', headerName: 'Order Name', width: 130 },
  { field: 'status', headerName: 'Status', width: 130 },
  { field: 'size', headerName: 'Size', type: 'number', width: 90},
  { field: 'size', headerName: 'Size', type: 'number', width: 90},
 
];



export default function OrdersTable(props) {
  const rows = [];
 
  if(!props.orders){
    console.log('loading')
  }else{
    props.orders.map((order)=>{
      rows.push({
        id: order._id,
        order_name:order.portraitName,
        status: order.artWorkStatus,
        size: order.portraitSize})
    })
  }
  
 
  return (
    <div style={{ height: 500, width: '100%'}}>
      <DataGrid color='red' rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}
*/