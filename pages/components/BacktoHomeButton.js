import Link from 'next/Link';
import styles from '../../styles/BacktoHomeButton.module.scss';

const BacktoHomeButton = () => (
     <div className={styles.wrapper}>
          <div className={styles.spacer}></div>
          <div className={styles.backtoHome}>
               <Link href="/">
               <a>Back to home</a>
          </Link>
          </div>
     </div>
);

export default BacktoHomeButton;