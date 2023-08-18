import { getOrderDetails } from '@/api/orders';
import { orderProductHeaders } from '../order-product-headers';
import Title from '@/components/Title/Title';
import Table from '@/components/Table/Table';
import OrderDetail from '@/components/OrderDetail/OrderDetail';
import styles from './order.module.scss';

type Props = {
  params: {
    id: any;
  }
}

const Order = async ({ params }: Props) => {
  const order = await getOrderDetails(Number(params.id));
  const products = order.orderProducts ? order.orderProducts.map((orderProduct) => ({
    title: orderProduct.product.title,
    url: orderProduct.product.url,
    price: orderProduct.product.price,
    quantity: orderProduct.quantity,
    total: (orderProduct.product.price * orderProduct.quantity).toFixed(2)
  })): [];

  return (
    <>
      <Title title={`Order # ${params.id}`} />
      <div className={`container--main ${styles.order ?? ''}`}>
        <div className={styles.order__details}> 
          <ul>
            <OrderDetail label='Create Date' value={order.createDate} />
            <OrderDetail label='Status' value={order.status} />
            <OrderDetail label='Client' value={order.client} />
            <OrderDetail label='Shipping Address' value={order.shippingAddress} />
            <OrderDetail label='Shipping Promise' value={order.shippingPromise} />
            <OrderDetail label='Total' value={products.reduce((accum, product) => (accum + (product.quantity * product.price)), 0).toFixed(2)} />
          </ul>
        </div>
        <Table 
          columns={orderProductHeaders} 
          rows={products} 
          pageSize={5}
          className={styles.order__products}
        />
      </div>
    </>
  )
}

export default Order;
