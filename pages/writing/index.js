import classnames from 'classnames';
import ExpanableListings from '../../components/ExpandableListings';
import BacktoHomeButton from '../../components/BacktoHomeButton';
import GoodMorning from '../../components/docs/GoodMorning';
import LatinoEssay from '../../components/docs/LatinoEssay';

import styles from '../../styles/writing.module.scss';

const writings = [
  /*{
    displayName: 'title 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    tags: ['academic', 'peer-reviewed']
  },*/
  {
    displayName: 'La Alquimia de un Reflejo',
    content: <LatinoEssay />,
    tags: ['award-winning']
  },
  {
    displayName: 'Good Morning!',
    content: <GoodMorning />,
    tags: ['poem']
  }
];


const Writing = () => {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={classnames(styles.globalTitle, styles.title)}>Writings</div>
          <div className={styles.content}>
            <ExpanableListings list={writings} />
          </div>
          <BacktoHomeButton />
        </div>
      </div>
    )
}

export default Writing;