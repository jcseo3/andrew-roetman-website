import Link from 'next/link';
import classnames from 'classnames';
import BacktoHomeButton from '../../components/BacktoHomeButton';
import CV from '../../components/docs/CV';
import styles from './clinical-psychology.module.scss';

const ClinicalPsychology = () => {
    return (
        <div className={classnames(styles.globalPageWrapper, styles.outerWrapper)}>
          <div className={styles.wrapper}>
            <div className={styles.container}>
            <img className={styles.portrait} src="images/hudson-valley-andrew1.png" alt="a portrait of Andrew Roetman" />
            <p className={styles.introduction}>
            Hi! I'm Andrew and I am a prospective clinical psychology Ph.D. student passionate about working with multicultural populations and understanding ethnic differences in resistance and effectiveness of CBT, DBT and psychodynamic therapy. In order to provide care founded in a place of racial and disability justice, I’m interested in how feedback between research and the clinical setting can serve patients from underserved communities at the individual level, supported by culturally competent policy at the institutional level.
            </p>
            <div className={styles.cvLink}>
              Download my CV <Link href=""><a href="Andrew Roetman-CV_11-2020.pdf" target = "_blank">here</a></Link>
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
    )
}

export default ClinicalPsychology;