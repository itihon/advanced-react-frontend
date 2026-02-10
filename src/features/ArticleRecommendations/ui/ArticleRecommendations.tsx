import { ArticleList, ArticlePreviewStyle } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import React from 'react';
import useGetArticleRecommendationsQuery from '../api/articleRecommendationsApi';

interface ArticleRecommendationsProps {
  
}

const ArticleRecommendations: React.FC<ArticleRecommendationsProps> = ({  }) => {

  const { t } = useTranslation('articles');
  const { isLoading, data } = useGetArticleRecommendationsQuery(4);
  
  return (
    <>
      <h2>{t('recommendations')}</h2>
      <ArticleList isLoading={isLoading} items={data} previewStyle={ArticlePreviewStyle.ROW} />
    </>
  );
};

export default ArticleRecommendations;