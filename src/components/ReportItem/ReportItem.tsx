import Link from 'next/link';
import AssignmentIcon from '@mui/icons-material/Assignment';
import styles from './report-item.module.scss';

type Props = {
  name: string;
  internalPath: string;
}

const ReportItem = ({ name, internalPath }: Props) => {
  return (
    <div className={styles['report-item']}>
      <Link href={`/reports/${internalPath}`} >
        <div className={styles['report-item__icon']}>
          <AssignmentIcon  />
        </div>
        <p className={styles['report-item__title']}>{name}</p>
      </Link>
    </div>
  );
}

export default ReportItem;
