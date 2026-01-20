import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui';

const AboutPage: React.FC = () => {
  const { t } = useTranslation('about-page');

  return (
    <Page>
      <div>{t('content')}</div>
    </Page>
  );
};

export default AboutPage;