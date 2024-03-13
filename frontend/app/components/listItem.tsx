'use client';
import Link from 'next/link';
import { ItemProps } from './card';
import { LikeButton } from './likeButton';
import styles from './listItem.module.scss';
import React from 'react';

export const ListItem: React.FC<ItemProps> = ({
  id,
  name,
  image,
  types,
  isFavorite,
}) => {
  return (
    <Link href={`/${name}`}>
      <div className={styles.listItemContainer}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={image} alt={`${name} image`} />
        </div>
        <div className={styles.infoWrapper}>
          <h3>{name}</h3>
          {!!types?.length && <p>{types.toString()}</p>}
        </div>
        <LikeButton id={id} isFavorite={isFavorite} />
      </div>
    </Link>
  );
};
