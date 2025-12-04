import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageBox } from 'shared/ui';

const PageError: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MessageBox 
      title={t('error.title')} 
      message={t('error.message')} 
      icon='⛔' 
      onClose={() => location.reload()}/>
  );
};

export default PageError;

