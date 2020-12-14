import React from 'react';

import styles from './GoodMorning.module.scss';

const GoodMorning = () => (
    <div>
        <p className={styles.instructions}>
            <i>play Waking up in the Park - j’san, while reading the poem</i>
        </p>
        <div className={styles.textWrapper}>
            <div className={styles.imageWrapper}>
                <img src="/images/goodmorning_image.jpg" />
            </div>
            <div>
                <p>Ageless, generous eyes listen to laughter of children and grandparents</p>
                <p>Genderless, heartstrings resonate in gentle whispers dancing free of masks</p>
                <p>Colorless, wisdom and family welcome home like cool rain on hot skin</p>
                <p>Godless, many footfalls to the sun shrine only to see yourself, breathe, beautiful</p>
            </div>
        </div>
    </div>
)

export default GoodMorning;