import React, { memo, useCallback, forwardRef, useRef, useEffect } from 'react';
import { GridComponents, GridStateSnapshot, ItemContent, StateSnapshot, Virtuoso, VirtuosoGrid, VirtuosoHandle } from 'react-virtuoso'
import { ArticleCard, ArticleCardSkeleton, ArticlePreview, ArticlePreviewStyle } from 'entities/Article';
import classes from './ArticleList.module.scss';
import classNames from 'classnames';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import articleListReducer, { setGridState, setListState } from '../model/slice/articleListSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';
import getListState from '../model/selectors/getListState';
import getGridState from '../model/selectors/getGridState';

const reducers: ReducerList = {
  articleList: articleListReducer
};

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

  const dispatch = useDispatch<AppDispatch>();
  const listState = useSelector(getListState);
  const gridState = useSelector(getGridState);
  const virtuosoRef = useRef<VirtuosoHandle>(null);

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

  const saveListState = useCallback((state: StateSnapshot) => {
    dispatch(setListState(state));
  }, [dispatch]);

  const saveGridState = useCallback((state: GridStateSnapshot) => {
    dispatch(setGridState(state));
  }, [dispatch]);

  useEffect(() => {
    const virtuoso = virtuosoRef.current;

    return () => {
      if (virtuoso) {
        virtuoso.getState(saveListState);
      }
    };
  }, [saveListState]);

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
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      {
        previewStyle === ArticlePreviewStyle.LIST_ITEMS

        ? <Virtuoso 
            ref={virtuosoRef}
            restoreStateFrom={listState}
            className={classNames(classes.ArticleList, { [classes.virtualized]: virtualized }, 'scrollable')}
            endReached={onEndReached}
            data={items}
            totalCount={items.length} 
            itemContent={rowRenderer} />

        : <VirtuosoGrid
            stateChanged={saveGridState}
            restoreStateFrom={gridState}
            className={classNames(classes.ArticleList, { [classes.virtualized]: virtualized }, 'scrollable')}
            endReached={onEndReached}
            data={items}
            totalCount={items.length}
            components={gridComponents}
            itemContent={rowRenderer} />
      }
    </DynamicModuleLoader>
  );
};

export default memo(ArticleList);