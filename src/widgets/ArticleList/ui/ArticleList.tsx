import React, { memo, useCallback, forwardRef } from 'react';
import { GridComponents, ItemContent, Virtuoso, VirtuosoGrid } from 'react-virtuoso'
import { ArticleCard, ArticleCardSkeleton, ArticlePreview, ArticlePreviewStyle } from 'entities/Article';
import classes from './ArticleList.module.scss';
import classNames from 'classnames';

interface ArticleListProps {
  items?: ArticlePreview[];
  previewStyle?: ArticlePreviewStyle;
  isLoading?: boolean;
  virtualized?: boolean;
  onEndReached?: () => void;
}

const gridComponents: GridComponents = {
  List: forwardRef(function List({ style, children, ...props }, ref) {
    return <div
      ref={ref}
      {...props}
      className={classes['virtualized-grid']}
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  }),
};

const ArticleList: React.FC<ArticleListProps> = ({ 
  items = [], 
  previewStyle = ArticlePreviewStyle.LIST_ITEMS, 
  isLoading, 
  onEndReached = () => {}, 
  virtualized 
}) => {

  const rowRenderer = useCallback<ItemContent<ArticlePreview, unknown>>((index, articlePreview) => {
    return (
      <>
        {
          isLoading
            ? <ArticleCardSkeleton className={classes.items} previewStyle={previewStyle} />
            : <ArticleCard className={classes.items} key={index} {...articlePreview} previewStyle={previewStyle} />
        }
      </>
    );
  }, [isLoading, previewStyle]);

  if (!virtualized) {
    return (
      <div className={classNames(classes.ArticleList, classes[previewStyle], 'scrollable')}>
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
  }

  return (
    previewStyle === ArticlePreviewStyle.LIST_ITEMS

    ? <Virtuoso 
        className={classNames(classes.ArticleList, { [classes.virtualized]: virtualized }, 'scrollable')}
        endReached={onEndReached}
        data={items}
        totalCount={items.length} 
        itemContent={rowRenderer} />

    : <VirtuosoGrid
        className={classNames(classes.ArticleList, { [classes.virtualized]: virtualized }, 'scrollable')}
        endReached={onEndReached}
        data={items}
        totalCount={items.length}
        components={gridComponents}
        itemContent={rowRenderer} />
  );
};

export default memo(ArticleList);