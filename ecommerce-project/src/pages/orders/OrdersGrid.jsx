import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { OrderHeader } from "./OrderHeader";
import { OrderDetailsGrid } from "./OrderDetailsGrid";

export function OrdersGrid() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrdersData = async () => {
      let response = await axios.get(
        '/api/orders?expand=products'
      );
      setOrders(response.data);
    }

    fetchOrdersData()

  }, []);

  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div key={order.id} className="order-container">

            <OrderHeader 
              order={order}
            />

            <OrderDetailsGrid 
              order={order}
            />
          </div>
        );
      })}
    </div>
  );
} 