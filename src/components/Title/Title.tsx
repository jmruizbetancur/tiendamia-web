import styles from './title.module.scss';

type Props = {
  title: string,
}

const Title = ({ title }: Props) => {
  return (
    <div className={styles.title}>
      <h1>{title}</h1>
    </div>
  );
}

export default Title;
