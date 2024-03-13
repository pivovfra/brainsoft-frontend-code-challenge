'use client';
import Link from 'next/link';
import styles from './card.module.scss';
import { LikeButton } from './likeButton';
import React from 'react';

export type ItemProps = {
  id: string;
  name: string;
  image: string;
  types?: string[];
  isFavorite: boolean;
};

export const Card: React.FC<ItemProps> = ({
  id,
  name,
  image,
  types,
  isFavorite,
}) => {
  return (
    <Link href={`/${name}`}>
      <div className={styles.cardContainer}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={image} alt={`${name} image`} />
        </div>
        <div className={styles.bottomPartContainer}>
          <div className={styles.infoWrapper}>
            <h3>{name}</h3>
            {types && <p>{types.toString()}</p>}
          </div>
          <LikeButton id={id} isFavorite={isFavorite} />
        </div>
      </div>
    </Link>
  );
};
