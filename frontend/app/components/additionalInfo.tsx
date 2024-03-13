import { Pokemon } from '../__generated__/graphql';
import styles from './additionalInfo.module.scss';
import { Card } from './card';
import { Dimension } from './dimension';
import React from 'react';

type AdditionalInfoProps = {
  hp: number;
  cp: number;
  weight?: string;
  height?: string;
  evolutions?: Pick<Pokemon, 'id' | 'name' | 'image' | 'isFavorite'>[];
};

export const AdditionalInfo: React.FC<AdditionalInfoProps> = ({
  hp,
  cp,
  weight,
  height,
  evolutions,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.baseAttributes}>
        <h3>CP: {cp}</h3>
        <div className={styles.cpBar}></div>
        <h3>HP: {hp}</h3>
        <div className={styles.hpBar}></div>
      </div>
      {weight && height && (
        <div className={styles.dimensions}>
          <Dimension label="Weight" value={weight} />
          <Dimension label="Height" value={height} />
        </div>
      )}

      {!!evolutions?.length && (
        <>
          <h2 className={styles.evolutionsHeadline}>Evolutions</h2>
          <div className={styles.evolutionsContainer}>
            {evolutions.map((item) => (
              <div className={styles.evolutionCardWrapper} key={item.name}>
                <Card {...item} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
