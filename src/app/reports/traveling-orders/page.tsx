'use client'
import { useState } from 'react';
import { Order, getOrders } from '@/api/orders';
import { orderHeaders } from '@/app/orders/order-headers';
import Title from '@/components/Title/Title';
import Table from '@/components/Table/Table';
import SearchIcon from '@mui/icons-material/Search';
import { Button, TextField } from '@mui/material';

const TravelingReport = () => {
  const [ startDate, setStartDate ] = useState('')
  const [ endDate, setEndDate ] = useState('')
  const [ orders, setOrders ] = useState([] as Order[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!startDate || !endDate) {
      return;
    }

    const dbOrders = await getOrders(`?status=Traveling&dateRange=${startDate},${endDate}`);
    setOrders(dbOrders);
  };
  
  return (
    <>
      <Title title={`Report - Traveling Orders`} />
      <div className={'container--main'}>
        <form onSubmit={handleSubmit} className='form'>
          <TextField
            className='form__input'
            fullWidth
            id='start-date'
            InputLabelProps={{ shrink: true }}
            label="Start Date"
            margin="normal"
            onChange={(e) => setStartDate(e.target.value)}
            required
            type="date"
            value={startDate}
          />
          <TextField
            className='form__input'
            fullWidth
            id='end-date'
            InputLabelProps={{ shrink: true }}
            label="End Date"
            margin="normal"
            onChange={(e) => setEndDate(e.target.value)}
            required
            type="date"
            value={endDate}
          />
          <Button 
            startIcon={<SearchIcon />} 
            variant='contained' 
            type='submit' 
            className='form__submit-button'
          >
            Search
          </Button>
        </form>
        <Table 
          columns={orderHeaders} 
          rows={orders} 
          pageSize={10}
          className='grow-1'
        />
      </div>
    </>
  )
}

export default TravelingReport;
