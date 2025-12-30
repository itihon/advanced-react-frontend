import React, { memo } from 'react';
import AppButton from '../AppButton/AppButton';
import styles from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

type LangSwitcherProps = React.ButtonHTMLAttributes<React.PropsWithChildren>;

const langIcons: Record<string, string> = {
  'en': '🇺🇲',
  'ru': '🇷🇺',
};

const LangSwitcher: React.FC<LangSwitcherProps> = ({className}) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const switchLang = () => {
    i18n.changeLanguage(currentLanguage === 'en' ? 'ru' : 'en');
  };

  return (
    <AppButton 
      onClick={switchLang} 
      className={classNames(styles.LangSwitcher, className)}>
        {langIcons[currentLanguage]}
    </AppButton>
  );
};

export default memo(LangSwitcher);