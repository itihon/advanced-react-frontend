import { ArticleCard, ArticleCardSkeleton, ArticlePreview, ArticlePreviewStyle } from 'entities/Article';
import React from 'react';
import classes from './ArticleList.module.scss';
import classNames from 'classnames';

interface ArticleListProps {
  items?: ArticlePreview[];
  previewStyle?: ArticlePreviewStyle;
  isLoading?: boolean;
}

const ArticleList: React.FC<ArticleListProps> = ({ items = [], previewStyle = ArticlePreviewStyle.LIST_ITEMS, isLoading }) => {
  return (
    <div className={classNames(classes.ArticleList, classes[previewStyle])}>
      {
        items
          .map((item, idx) => <ArticleCard {...item} previewStyle={previewStyle} key={idx} />)
      }
      {
        isLoading
          && Array
            .from({ length: 9 })
            .map((_, idx) => <ArticleCardSkeleton key={idx} previewStyle={previewStyle} />)
      }
    </div>
  );
};

export default ArticleList;