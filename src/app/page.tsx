import styles from './page.module.scss';
import Boxes from '@/components/Boxes/Boxes';
import Charts from '@/components/Charts/Charts';

export default function Home() {
  return (
    <main className={styles.container}>
      <Boxes />
      <Charts />
    </main>
  );
}
