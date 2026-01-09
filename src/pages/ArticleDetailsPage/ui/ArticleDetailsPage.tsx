import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppText } from 'shared/ui';
import { TextTheme } from 'shared/ui/AppText/AppText';

const ArticleDetailsPage: React.FC = () => {
  const { t } = useTranslation('articles');
  const { id } = useParams<{ id: string }>();

  if (!id) return (
    <AppText theme={TextTheme.ERROR}>{t('article-not-found')}</AppText>
  );

  return (
    <div>
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);