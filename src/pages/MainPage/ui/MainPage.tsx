import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

const MainPage: React.FC = () => {
  const { t } = useTranslation('main-page');

  return (
    <Page>
      <h2>{t('header')}</h2>
      <div>{t('content')}</div>
    </Page>
  );
};

export default MainPage;