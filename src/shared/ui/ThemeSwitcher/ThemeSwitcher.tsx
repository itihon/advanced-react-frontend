import React from 'react';
import { useTheme, Themes } from "app/providers/ThemeProvider";
import LightModeIcon from 'shared/assets/light-mode.svg';
import DarkModeIcon from 'shared/assets/dark-mode.svg';
import AppButton from 'shared/ui/AppButton/AppButton';
import styles from './ThemeSwitcher.module.scss';
import classNames from 'classnames';

type ThemeSwitcherProps = React.ButtonHTMLAttributes<React.PropsWithChildren>;

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({className}) => {
  const {theme, switchTheme} = useTheme();

  return (
    <AppButton 
      className={classNames(styles.ThemeSwitcher, className)}
      onClick={switchTheme}>
        {
          theme === Themes.LIGHT 
            ? <DarkModeIcon className={styles.ThemeSwitcherIcon} /> 
            : <LightModeIcon className={styles.ThemeSwitcherIcon} />
        }
    </AppButton>
  );
};

export default ThemeSwitcher;