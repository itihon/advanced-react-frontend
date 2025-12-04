import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: React.FC = () => {
  const { t } = useTranslation('main-page');

  return (
    <>
      <h2>{t('header')}</h2>
      <div>{t('content')}</div>
    </>
  );
};

export default MainPage;