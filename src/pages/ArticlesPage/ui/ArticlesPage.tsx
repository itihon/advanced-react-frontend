import { ArticlePreviewStyle, ArticleType } from 'entities/Article';
import React, { useEffect, memo, useCallback, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { AppButton, AppSelect, AppText } from 'shared/ui';
import { Page } from 'widgets/Page';
import ArticleList from 'widgets/ArticleList';
import classes from './ArticlesPage.module.scss';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import articlesPageReducer, { getArticles, initArticlesPage, setCurrentPage, setFilteringType, setPreviewStyle, setSearchQuery, setSortingType } from '../model/slice/articlesPageSlice';
import { useSelector, useDispatch } from 'react-redux';
import getArticlesPageError from '../model/selectors/getArticlesPageError';
import getArticlesPageIsLoaing from '../model/selectors/getArticlesPageIsLoading';
import getArticlesPagePreviewStyle from '../model/selectors/getArticlesPagePreviewStyle';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';
import { TextTheme } from 'shared/ui/AppText/AppText';
import fetchArticleList from '../model/services/fetchArticleList/fetchArticleList';
import getArticlesPageCurrentPage from '../model/selectors/getArticlesPageCurrentPage';
import getArticlesPageHasMore from '../model/selectors/getArticlesPageHasMore';
import Search from 'widgets/Search';
import { ArticleSortType } from '../model/types/ArticlesPageSchema';
import getArticlesPageFilter from '../model/selectors/getArticlesPageFilter';
import getArticlesPageSort from '../model/selectors/getArticlesPageSort';
import getArticlesPageSearch from '../model/selectors/getArticlesPageSearch';

const reducers: ReducerList = {
  articlesPage: articlesPageReducer, 
};

const ArticlesPage: React.FC = () => {
  const { t } = useTranslation('articles');
  const dispatch = useDispatch<AppDispatch>();
  const articles = useSelector(getArticles.selectAll);
  const error = useSelector(getArticlesPageError);
  const isLoading = useSelector(getArticlesPageIsLoaing);
  const previewStyle = useSelector(getArticlesPagePreviewStyle);
  const currentPage = useSelector(getArticlesPageCurrentPage) || 1;
  const hasMore = useSelector(getArticlesPageHasMore);
  const filter = useSelector(getArticlesPageFilter);
  const sort = useSelector(getArticlesPageSort);
  const search = useSelector(getArticlesPageSearch);

  const onSortTypeSelect = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortingType(e.target.value as ArticleSortType));
  }, [dispatch]);

  const onFilterTypeSelect = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const value = (e.target as HTMLButtonElement).value as ArticleType;
    dispatch(setFilteringType(value === filter ? '' : value));
  }, [dispatch, filter]);

  const onSearchQueryChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery((e.target as HTMLInputElement).value));
  }, [dispatch]);

  const onPreviewStyleClick = useCallback(() => {
    dispatch(setPreviewStyle(
      previewStyle === ArticlePreviewStyle.LIST_ITEMS 
        ? ArticlePreviewStyle.TILES 
        : ArticlePreviewStyle.LIST_ITEMS
    ));
  }, [dispatch, previewStyle]);

  const onLoadNextPart = useCallback(() => {
    if (hasMore && !isLoading) {
      dispatch(setCurrentPage(currentPage + 1));

      // @ts-expect-error damn redux
      dispatch(fetchArticleList());
    }
  }, [currentPage, dispatch, hasMore, isLoading]);

  useEffect(() => {
    dispatch(initArticlesPage());

    // @ts-expect-error damn redux
    dispatch(fetchArticleList());
  }, [dispatch, previewStyle, filter, sort, search]);

  const sortOptions = Object
    .values({ ...ArticleSortType })
    .reduce((acc, value) => ({ ...acc, [value]: t(value)}), {});

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPart} scrollRestore={true} scrollRestoreDelay={1000}>
        {
          error
            ? <AppText theme={TextTheme.ERROR}>{error}</AppText>
            : <div className={classes.ArticlesPage}>
                <div className={classes.panel}>
                  <AppSelect selectedOption={sort} label={t('sort-by')} options={sortOptions} align='row' onChange={onSortTypeSelect} />
                  <div className={classes.tags}>
                    {
                      Object
                        .values(ArticleType)
                        .map((articleType, idx) => <AppButton pushed={articleType === filter} value={articleType} size='size-l' key={idx} onClick={onFilterTypeSelect}>{articleType}</AppButton>)
                    }
                  </div>
                  <Search placeholder={t('search')} value={search} onChange={onSearchQueryChange} />
                  <AppButton size='size-l' onClick={onPreviewStyleClick}>{ previewStyle === ArticlePreviewStyle.LIST_ITEMS ? '🪟' : '≡' }</AppButton>
                </div>
                <ArticleList isLoading={isLoading} previewStyle={previewStyle} items={articles}/>
              </div>
        }
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);