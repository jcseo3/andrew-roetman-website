import { useState } from 'react';
import classnames from 'classnames';
import styles from '../styles/ExpandableListing.module.scss';

const ExpandableListing = ({ item }) => {
    const [showContent, setShowContent] = useState(false);
    const handleClick = () => {
        setShowContent(!showContent);
    }
    return (
        <div className={styles.wrapper}>
          <h1 onClick={() => handleClick()} className={styles.title}>
          {item.displayName}
              <span className={classnames(styles.arrow, showContent && styles.rotate)}>
              </span>
              <span className={styles.tags}>
              {item.tags && item.tags.map(tag => (<span className={styles.tag}>{tag}</span>))}
              </span>
          </h1>
          <p className={classnames(styles.content, showContent && styles.showContent)}>
          {item.content}
        </p>
        </div>
    )
}

export default ExpandableListing;