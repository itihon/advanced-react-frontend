import React from 'react';
import { ArticlePreviewStyle } from '../../model/types/article';
import classNames from 'classnames';
import classes from './ArticleCard.module.scss';
import { Skeleton } from 'shared/ui';
import ownClasses from './ArticleCardSkeleton.module.scss';

interface ArticleCardSkeletonProps {
  previewStyle: ArticlePreviewStyle;
}

const ArticleCardSkeleton: React.FC<ArticleCardSkeletonProps> = ({ previewStyle }) => {
  const isList = previewStyle === ArticlePreviewStyle.LIST_ITEMS;

  return (
    <div className={classNames(classes.ArticleCard, classes[previewStyle], ownClasses.ArticleCardSkeleton)} style={{ height: 'unset' }}>
      <Skeleton className={classes.img} />
      <Skeleton width='100%' height='64px' zIndex={1} position='relative' className={classes.title} />
      {
        isList && Array
          .from({ length: 3 })
          .map((_, idx) => <Skeleton key={idx} width='100%' height='18px' borderRadius='4px' className={classes.excerpt} />)
      }
      {
        Array
          .from({ length: 3 })
          .map((_, idx) => <Skeleton className={classes.tag} width='48px' height='16px' display='inline-block' key={idx} />)
      }
      {
        isList && <Skeleton width='76px' height='32px' className={classes.more} display='block' />
      }
    </div> 

  );
};

export default ArticleCardSkeleton;