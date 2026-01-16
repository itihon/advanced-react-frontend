import { ArticleCard, ArticlePreview, ArticlePreviewStyle } from 'entities/Article';
import React from 'react';
import classes from './ArticleList.module.scss';
import classNames from 'classnames';

interface ArticleListProps {
  items: ArticlePreview[];
  previewStyle?: ArticlePreviewStyle;
}

const ArticleList: React.FC<ArticleListProps> = ({ items, previewStyle = ArticlePreviewStyle.LIST_ITEMS }) => {
  return (
    <div className={classNames(classes.ArticleList, classes[previewStyle])}>
      {
        items
          .map((item, idx) => <ArticleCard {...item} previewStyle={previewStyle} key={idx} />)
      }
    </div>
  );
};

export default ArticleList;