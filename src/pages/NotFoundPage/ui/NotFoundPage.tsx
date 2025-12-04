import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './NotFoundPage.module.scss';

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation('not-found-page');

  return (
    <div className={classes.NotFoundPage}>{t('content')}</div>
  );
};

export default NotFoundPage;