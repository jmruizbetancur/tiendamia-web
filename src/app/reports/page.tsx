import { NextPage } from 'next'
import Title from '@/components/Title/Title';
import { reports } from './reports';
import ReportItem from '@/components/ReportItem/ReportItem';
import styles from './reports.module.scss';

const Orders: NextPage = () => {
  return (
    <>
      <Title title='Reports' />
      <div className={`container--main ${styles['report-list']}`}>
        {reports.map((report, idx) => <ReportItem key={idx} name={report.name} internalPath={report.internalPath} />)}
      </div>
    </>
  )
}

export default Orders;
