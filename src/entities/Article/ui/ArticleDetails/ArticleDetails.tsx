import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppText, Skeleton } from 'shared/ui';
import ArticleView from '../ArticleView/ArticleView';
import classes from './ArticleDetails.module.scss';
import { TextTheme } from 'shared/ui/AppText/AppText';
import Article from '../../model/types/article';

interface ArticleDetailsProps {
  data?: Article;
  isLoading?: boolean;
  error?: string;
}

const ArticleDetails: React.FC<ArticleDetailsProps> = ({ data, isLoading, error }) => {
  const { t } = useTranslation('articles');

  return (
    <>
      {
        (isLoading) && <>
          <div className={classes.ArticleDetails}>
            <Skeleton className={classes['skeleton-title']} width='80%' height='64px' borderRadius='8px' /> 
            <Skeleton className={classes['skeleton-image']} width='50vw' height='50vh' borderRadius='16px' /> 
            <Skeleton className={classes['skeleton-title']} width='60%' height='48px' borderRadius='8px' /> 
            {
              Array.from({ length: 8 }).map((_, idx) => <Skeleton key={idx} className={classes['skeleton-row']} width='100%' height='16px' borderRadius='4px' />)
            }
          </div>
        </>
      }
      {
        error && <>
          <AppText theme={TextTheme.ERROR}>{t('error-fetching-article')}</AppText>
        </>
      }
      {
        (!isLoading && !error) && <>
          <div className={classes.ArticleDetails}>
            <div className={classes.date}>
              <AppText>{`🗓️ ${data?.createdAt}`}</AppText>
              <AppText>{`👁️ ${data?.views}`}</AppText>
            </div>
            <ArticleView data={data} />
          </div> 
        </>
      }
    </>
  );
};

export default memo(ArticleDetails);