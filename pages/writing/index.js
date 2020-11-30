import classnames from 'classnames';
import ExpanableListings from '../../components/ExpandableListings';
import BacktoHomeButton from '../../components/BacktoHomeButton';

import styles from '../../styles/writing.module.scss';

const writings = [
  {
    displayName: 'title 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    tags: ['academic', 'peer-reviewed']
  },
  {
    displayName: 'title 2',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    tags: ['award-winning']
  }
];


const Writing = () => {
    return (
        <div className={classnames(styles.globalPageWrapper, styles.wrapper)}>
          <div className={classnames(styles.globalTitle, styles.title)}>Writings</div>
          <div className={styles.content}>
            <ExpanableListings list={writings} />
          </div>
          <BacktoHomeButton />
        </div>
    )
}

export default Writing;