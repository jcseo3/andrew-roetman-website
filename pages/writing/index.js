import classnames from 'classnames';
import ExpanableListings from '../../components/ExpandableListings';
import BacktoHomeButton from '../../components/BacktoHomeButton';
import GoodMorning from '../../components/docs/GoodMorning';
import LatinoEssay from '../../components/docs/LatinoEssay';

import styles from './writing.module.scss';

const writings = [
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
          <div className={styles.content}>
            <ExpanableListings list={writings} />
          </div>
          <BacktoHomeButton />
        </div>
      </div>
    )
}

export default Writing;

//<div className={styles.title}>Writings</div>