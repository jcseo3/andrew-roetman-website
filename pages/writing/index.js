import ExpanableListings from "../../components/ExpandableListings";
import BacktoHomeButton from "../../components/BacktoHomeButton";
import GoodMorning from "../../components/docs/GoodMorning";
import LatinoEssay from "../../components/docs/LatinoEssay";

import styles from "./writing.module.scss";

const writings = [
  {
    displayName: "La Alquimia de un Reflejo",
    publishDate: "2020-11-20",
    content: <LatinoEssay />,
    tags: ["award-winning"],
  },
  {
    displayName: "Good Morning!",
    publishDate: "2018-11-20",
    content: <GoodMorning />,
    tags: ["poem"],
  },
];

const Writing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1>Writings</h1>
          <ExpanableListings list={writings} />
        </div>
        <BacktoHomeButton />
      </div>
    </div>
  );
};

export default Writing;
