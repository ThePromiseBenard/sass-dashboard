'use client';

import Link from 'next/link';
import styles from './MenuItem.module.scss';
import { usePathname } from 'next/navigation';

interface ItemProps {
  url: string;
  title: string;
  icon: React.ReactNode;
}

const MenuItem = ({ url, title, icon }: ItemProps) => {
  const pathName = usePathname();
  const isActive = pathName === url;
  return (
    <Link href={url as string}>
      <span className={isActive ? styles.active : styles.main}>
        {icon}
        <p className={styles.text}> {title}</p>
      </span>
    </Link>
  );
};
export default MenuItem;
