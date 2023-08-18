import { NextPage } from 'next'
import { getOrders } from '@/api/orders';
import { orderHeaders } from './order-headers';
import Title from '@/components/Title/Title';
import Table from '@/components/Table/Table';

const Orders: NextPage = async () => {
  const orders = await getOrders();

  return (
    <>
      <Title title='Orders' />
      <Table 
        columns={orderHeaders} 
        rows={orders} 
        pageSize={10} 
        className={'container--main'}
      />
    </>
  )
}

export default Orders;
