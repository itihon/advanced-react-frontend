import { ArticleBlockBase, ArticleImageBlock } from '../../model/types/article';
import React, { memo } from 'react';
import classes from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps extends Omit<ArticleImageBlock, keyof ArticleBlockBase> {
  
}

const ArticleImageBlockComponent: React.FC<ArticleImageBlockComponentProps> = ({ src, title }) => {
  return (
    <div className={classes.ArticleImageBlockComponent}>
      <img className={classes.img} src={src} alt={title} />
      <h4>{title}</h4>
    </div>
  );
};

export default memo(ArticleImageBlockComponent);