import { ArticlePreviewStyle } from 'entities/Article';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AppButton, AppText } from 'shared/ui';
import ArticleList from 'widgets/ArticleList';
import classes from './ArticlesPage.module.scss';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import articlesPageReducer, { getArticles, initArticlesPage, setPreviewStyle } from '../model/slice/articlesPageSlice';
import { useSelector, useDispatch } from 'react-redux';
import getArticlesPageError from '../model/selectors/getArticlesPageError';
import getArticlesPageIsLoaing from '../model/selectors/getArticlesPageIsLoading';
import getArticlesPagePreviewStyle from '../model/selectors/getArticlesPagePreviewStyle';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';
import { TextTheme } from 'shared/ui/AppText/AppText';
import fetchArticleList from '../model/services/fetchArticleList/fetchArticleList';

const reducers: ReducerList = {
  articlesPage: articlesPageReducer, 
};

const ArticlesPage: React.FC = () => {
  const { t } = useTranslation('articles-page');

  const dispatch = useDispatch<AppDispatch>();

  const articles = useSelector(getArticles.selectAll);
  const error = useSelector(getArticlesPageError);
  const isLoading = useSelector(getArticlesPageIsLoaing);
  const previewStyle = useSelector(getArticlesPagePreviewStyle);

  const onPreviewStyleClick = () => {
    dispatch(setPreviewStyle(
      previewStyle === ArticlePreviewStyle.LIST_ITEMS 
        ? ArticlePreviewStyle.TILES 
        : ArticlePreviewStyle.LIST_ITEMS
    ));
  };

  useEffect(() => {
    dispatch(initArticlesPage());

    // @ts-expect-error damn redux
    dispatch(fetchArticleList());
  }, [dispatch, previewStyle]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      {
        error
          ? <AppText theme={TextTheme.ERROR}>{error}</AppText>
          : <div className={classes.ArticlesPage}>
              {t('content')}
              <AppButton size='size-m' onClick={onPreviewStyleClick}>{ previewStyle === ArticlePreviewStyle.LIST_ITEMS ? '🪟' : '≡' }</AppButton>
              <ArticleList isLoading={isLoading} previewStyle={previewStyle} items={articles}/>
            </div>
      }
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;