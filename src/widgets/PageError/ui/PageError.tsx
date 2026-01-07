import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageBox } from 'shared/ui';

const PageError: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MessageBox 
      title={t('error.title')} 
      icon='⛔' 
      onClose={() => location.reload()}>
      {t('error.message')} 
    </MessageBox>
  );
};

export default PageError;

