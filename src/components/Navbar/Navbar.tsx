import styles from './Navbar.module.scss';
import { CiSearch, CiBellOn } from 'react-icons/ci';
import { RiMenu3Line } from 'react-icons/ri';
import Image from 'next/image';
import profilePicture from '/public/profile picture.png';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <p className={styles.logo}>logo</p>
      <div className={styles.rightSide}>
        <p className={styles.pageTitle}>dashboard</p>
        <div className={styles.informationBar}>
          <div className={styles.search}>
            <span>
              <CiSearch />
            </span>
            <input type="search" placeholder="search..." />
          </div>
          <div className={styles.profileBar}>
            <div className={styles.bellContainer}>
              <CiBellOn className={styles.bell} />
              <span></span>
            </div>
            <div className={styles.avatarContainer}>
              <Image src={profilePicture} alt="" />
              <div>
                <p>adesokan femzy</p>
                <span>admin</span>
              </div>
            </div>
          </div>
          <span className={styles.menuIcon}>
            <RiMenu3Line />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
