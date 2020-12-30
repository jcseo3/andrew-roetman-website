import styles from './life-coaching.module.scss';
import classnames from 'classnames';
import BacktoHomeButton from '../../components/BacktoHomeButton';
import ToggleTruncation from '../../components/ToggleTruncation';
import {useState} from 'react';

const navOptions = [
  {
    displayName: 'services',
    description: (
    <>
      <img className={styles.image} src="images/teapot.jpg" alt="a bright lightbulb lies lit up on a fluffy carpet" />
      <div className={styles.textWrapper}>
        <p className={styles.introContent}>
          <ToggleTruncation charLimit={400}>
            Zen Buddhist philosophy informs the structure of my approach to coaching. I’ve worked with several clients to create sustainable strategies for achieving both short and long term life goals. Before developing actionable goals, I listen deeply and without judgement. When appropriate, I offer insights grounded in honesty, vulnerability and mindfulness that facilitate my clients to develop the tools they need to better process many kinds of life’s stressors. Over a series of sessions tailored to the needs of my clients, my objective is to disentangle any cognitive dissonance that otherwise inhibits self acceptance and self love to promote proactive, concrete lifestyle choices. If you’re interested in some of these ideas and want to learn more about the services I offer, please contact me to schedule a free, 30-minute introductory and informational session.
          </ToggleTruncation>
        </p>
      </div>
    </>),
  },
  {
    displayName: 'contact',
    description: (<><img className={styles.image} src="images/tea-cup.jpg" alt="a bright lightbulb lies lit up on a fluffy carpet" />
    <div className={styles.textWrapper}>
      <div className={styles.introContent}>
      <p>Contact me with questions or
    schedule your first complimentary 30-minute session <a className={styles.button} href="mailto:roetmann@gmail.com">
    here
  </a></p>
      </div>
    </div></>),
  },
];

const LifeCoaching = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = i => {
    if (currentIndex !== i) {
      setCurrentIndex(i);
    }
  }
  return (
    <div className={classnames(styles.globalPageWrapper, styles.container)}>
      <div className={(styles.leftColumn)}>
      <div className={styles.globalEyebrow}>Life Coach</div>
        <div className={classnames(styles.globalTitle, styles.title)}>
            Andrew Roetman
        </div>
      </div>
      <div className={styles.menuBar}>
        {navOptions.map((option, i) =>
        <div className={styles.contentWrapper}>
          <div onClick={() => handleClick(i)} className={classnames(styles.menuItem, currentIndex === i && styles.currentTab)}>
            {option.displayName}
          </div>
          <div className={classnames(styles.content, i === currentIndex && styles.showContent)}>
           {navOptions[i].description}
          </div>
        </div>
        )}
      </div>
      <div className={styles.backButtonWrapper}>
        <BacktoHomeButton />
      </div>
    </div>
  )
}

export default LifeCoaching;

//className={classnames(styles.description, currentIndex === i && styles.showDescription)}

/**
 * <ul className={styles.nav}>
      {navOptions.map((option, i) =>
      <>
        <li onClick={() => handleClick(i)}>
          {option.displayName}
        </li>
        <div className={classnames(styles.description, currentIndex === i && styles.showDescription)}>
        {option.description}
        </div>
        </>
       )}
       </ul>
 */

/**
 * <div className={styles.globalLeftColumn}>
        <div className={styles.globalEyebrow}>Life Coach</div>
          <div className={styles.globalTitle}>
              Andrew Roetman
          </div>
       <BacktoHomeButton />
      </div>
      <div className={styles.globalImageWrapper}>
          <img src="images/lightbulb-unsplash.jpg" alt="a bright lightbulb lies lit up on a fluffy carpet" />
          <div className={styles.textWrapper}>
            <div className={styles.introContent}>
              Hello! Welcome to my crib.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <a className={styles.button} href="mailto:roetmann@gmail.com">
              Schedule your first complimentary 30-minute session
            </a>
          </div>
      </div>
 */