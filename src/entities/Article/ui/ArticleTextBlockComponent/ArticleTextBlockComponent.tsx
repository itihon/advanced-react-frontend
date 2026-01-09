import { ArticleBlockBase, ArticleTextBlock } from '../../model/types/article';
import React, { memo } from 'react';
import classes from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps extends Omit<ArticleTextBlock, keyof ArticleBlockBase> {
  
}

const ArticleTextBlockComponent: React.FC<ArticleTextBlockComponentProps> = ({ paragraphs, title }) => {
  return (
    <div className={classes.ArticleTextBlockComponent}>
      <h3>{title}</h3> 
      {
        paragraphs.map((paragraph, idx) => <p className={classes.paragraph} key={idx}>{paragraph}</p>)
      }
    </div>
  );
};

export default memo(ArticleTextBlockComponent);