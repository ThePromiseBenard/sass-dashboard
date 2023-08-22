import styles from './Boxes.module.scss';
import { HiArrowUpRight, HiArrowDownRight } from 'react-icons/hi2';

const data = [
  { type: 'total orders', amount: '185,700', percentage: '4.8' },
  { type: 'total orders', amount: '185,700', percentage: '4.8', down: true },
  { type: 'total orders', amount: '185,700', percentage: '4.8' },
];

const Boxes = () => {
  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <div className={styles.box} key={index}>
          <p className={styles.type}>{item.type}</p>
          <div className={styles.inner}>
            <div className={styles.wrapper}>
              <p className={styles.amount}>₦{item.amount}</p>
              <div className={styles.pecentageWrapper}>
                <span className={item.down ? styles.down : styles.up}>
                  {item.down ? <HiArrowDownRight /> : <HiArrowUpRight />}
                  <p>{item.percentage} %</p>
                </span>
                <p>from yesterday</p>
              </div>
            </div>
            <div>image</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Boxes;
