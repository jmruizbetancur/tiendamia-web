import styles from './order-detail.module.scss';

type Props = {
  label: string,
  value: string | number,
}

const OrderDetail = ({ label, value }: Props) => {
  return (
    <li className={styles.detail}><span>{label}: </span>{value ?? ''}</li>
  )
}

export default OrderDetail;
