import { get } from "@/utils/http-service"
import { Routes } from "./routes"

interface OrderProduct {
  quantity: number,
    product: {
      id: number,
      title: string,
      url: string,
      price: number
    }
}

export interface Order {
  id: number;
  createDate: string;
  status: string;
  client: string;
  shippingAddress: string;
  shippingPromise: string;
  orderProducts?: OrderProduct[]
}

export const getOrders = async (queryFilters?: string): Promise<Order[]> => {
  return get(`${Routes.Orders}${queryFilters ?? ''}`);
}

export const getOrderDetails = (id: number): Promise<Order> => {
  return get(`${Routes.Orders}/${id}`);
}
