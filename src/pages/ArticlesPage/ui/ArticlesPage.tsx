import React from 'react';
import { useTranslation } from 'react-i18next';

const ArticlesPage: React.FC = () => {
  const { t } = useTranslation('articles-page');

  return (
    <div>{t('content')}</div>
  );
};

export default ArticlesPage;