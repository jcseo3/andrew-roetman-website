import Link from 'next/link';
import BacktoHomeButton from '../../components/BacktoHomeButton';
import CV from '../../components/docs/CV';
import styles from '../../styles/clinical-psychology.module.scss';

const ClinicalPsychology = () => {
    return (
        <div className={styles.globalPageWrapper}>
          <div className={styles.container}>
            <img className={styles.portrait} src="images/hudson-valley-andrew1.png" alt="a portrait of Andrew Roetman" />
            <p className={styles.introduction}>
              Hi! I'm Andrew and I am a prospective clinical psychology Ph.D. student passionate about ... My areas of interest particularly are in ...
            </p>
            <div className={styles.cvLink}>
              Download my CV <Link href=""><a>here</a></Link>
            </div>
            <BacktoHomeButton />
          </div>
          <div className={styles.globalRightColumn}>
            <CV />
          </div>
        </div>
    )
}

export default ClinicalPsychology;