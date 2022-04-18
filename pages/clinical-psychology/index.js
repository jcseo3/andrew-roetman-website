import Link from "next/link";
import classnames from "classnames";
import BacktoHomeButton from "../../components/BacktoHomeButton";
import CV from "../../components/docs/CV";
import styles from "./clinical-psychology.module.scss";

const ClinicalPsychology = () => {
  return (
    <div className={classnames(styles.globalPageWrapper, styles.outerWrapper)}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <img
            className={styles.portrait}
            src="images/hudson-valley-andrew1.png"
            alt="a portrait of Andrew Roetman"
          />
          <p className={styles.introduction}>
            Hi! I'm Andrew, and I am an incoming clinical psychology Ph.D.
            student at Adelphi University Derner School of Psychology.
          </p>
          <div className={styles.cvLink}>
            Download my CV{" "}
            <Link href="">
              <a href="Andrew Roetman-CV_11-2020.pdf" target="_blank">
                here
              </a>
            </Link>
          </div>
          <div className={styles.backButtonWrapper}>
            <BacktoHomeButton />
          </div>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <CV />
      </div>
    </div>
  );
};

export default ClinicalPsychology;
