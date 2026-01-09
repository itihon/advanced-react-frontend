import React, { useEffect, memo } from 'react';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import articleDetailsReducer from '../../model/slice/articleDetailsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';
import fetchArticleById from '../../model/services/fetchArticleById/fetchArticleById';
import getArticleDetails from '../../model/selectors/getArticleDetails';
import { AppText, Skeleton } from 'shared/ui';
import { ArticleBlockType } from 'entities/Article/model/types/article';
import ArticleCodeBlockComponent from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import ArticleImageBlockComponent from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import classes from './ArticleDetails.module.scss';
import { TextTheme } from 'shared/ui/AppText/AppText';

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer,
};

interface ArticleDetailsProps {
  id: string; 
}

const ArticleDetails: React.FC<ArticleDetailsProps> = ({ id }) => {
  const { t } = useTranslation('articles');
  const dispatch = useDispatch<AppDispatch>();
  const articleDetails = useSelector(getArticleDetails);

  useEffect(() => {
    if (!articleDetails) {
      // @ts-expect-error damn redux
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id, articleDetails]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      {
        (articleDetails?.isLoading) && <>
          <Skeleton className={classes['skeleton-title']} width='80%' height='64px' borderRadius='8px' /> 
          <Skeleton className={classes['skeleton-image']} width='50vw' height='50vh' borderRadius='16px' /> 
          <Skeleton className={classes['skeleton-title']} width='60%' height='48px' borderRadius='8px' /> 
          {
            Array.from({ length: 8 }).map((_, idx) => <Skeleton key={idx} className={classes['skeleton-row']} width='100%' height='16px' borderRadius='4px' />)
          }
        </>
      }
      {
        articleDetails?.error && <>
          <AppText theme={TextTheme.ERROR}>{t('error-fetching-article')}</AppText>
        </>
      }
      {
        (!articleDetails?.isLoading && !articleDetails?.error) && <>
          <div className={classes.ArticleDetails}>
            <div className={classes.date}>
              <AppText>{`🗓️ ${articleDetails?.data?.createdAt}`}</AppText>
              <AppText>{`👁️ ${articleDetails?.data?.views}`}</AppText>
            </div>
            <h1>{articleDetails?.data?.title}</h1>
            <img className={classes.img} src={articleDetails?.data?.img} />
            <h2>{articleDetails?.data?.subtitle}</h2>
            {
              articleDetails?.data?.blocks?.map(block => {
                switch (block.type) {
                  case ArticleBlockType.CODE:
                    return <ArticleCodeBlockComponent code={block.code} /> 
                
                  case ArticleBlockType.IMAGE:
                    return <ArticleImageBlockComponent src={block.src} title={block.title} /> 

                  case ArticleBlockType.TEXT:
                    return <ArticleTextBlockComponent 
                      title={block.title}
                      paragraphs={block.paragraphs} /> 
                }
              })
            }
          </div> 
        </>
      }
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetails);