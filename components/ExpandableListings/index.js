import { useState } from 'react';
import styles from './ExpandableListings.module.scss';
import ExpandableListing from '../ExpandableListing';

const ExpandableListings = ({ list }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = i => {
        if (currentIndex !== i) {
        setCurrentIndex(i);
        }
    }
    return (
        <ul className={styles.container}>
        {list.map((item, i) =>
        <ExpandableListing item={item} />
        )}
      </ul>
    )
}

export default ExpandableListings;



/**
 * <>
          <h1 onClick={() => handleClick(i)} className={styles.title}>
            {item.displayName}
          </h1>
          <p className={classnames(styles.content, currentIndex === i && styles.showContent)}>
          {item.content}
      </p>
      </>
 */
/**
 * 
 * className={styles.content}
 * <div className={styles.menuBar}>
        {navOptions.map((option, i) =>
          <div onClick={() => handleClick(i)} className={classnames(styles.menuItem, currentIndex === i && styles.currentTab)}>
            {option.displayName}
          </div>
        )}
      </div>
       <div className={styles.content}>
          {navOptions[currentIndex].description}
      </div>
 */


 /**
  * <div onClick={() => handleClick(i)}>
                {title}
            </div>
            <div className={styles.content}>
                {navOptions[currentIndex].description}
            </div>
  */