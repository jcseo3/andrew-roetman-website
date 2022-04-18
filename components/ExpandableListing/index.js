import { useState } from "react";
import classnames from "classnames";
import styles from "./ExpandableListing.module.scss";

const ExpandableListing = ({ item }) => {
  const [showContent, setShowContent] = useState(false);
  const handleClick = () => {
    setShowContent(!showContent);
  };
  return (
    <li className={styles.wrapper}>
      <h2 onClick={() => handleClick()} className={styles.title}>
        {item.displayName}
        <span
          className={classnames(styles.arrow, showContent && styles.rotate)}
        ></span>
        <span className={styles.tags}>
          {item.tags &&
            item.tags.map((tag) => <span className={styles.tag}>{tag}</span>)}
        </span>
      </h2>
      <h3 className={styles.date}>{item.publishDate}</h3>
      <p
        className={classnames(
          styles.content,
          showContent && styles.showContent
        )}
      >
        {item.content}
      </p>
    </li>
  );
};

export default ExpandableListing;
