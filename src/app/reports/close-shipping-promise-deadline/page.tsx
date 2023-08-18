import { getOrders } from '@/api/orders';
import { orderHeaders } from '@/app/orders/order-headers';
import Title from '@/components/Title/Title';
import Table from '@/components/Table/Table';

const ShippingPromiseReport = async () => {
  const orders = await getOrders('?status=Approve&fulfillPromise=2');
  
  return (
    <>
      <Title title={`Report - Close Shipping Promise Deadline`} />
      <Table 
        columns={orderHeaders} 
        rows={orders} 
        pageSize={10}
        className={'container--main'}
      />
    </>
  )
}

export default ShippingPromiseReport;
