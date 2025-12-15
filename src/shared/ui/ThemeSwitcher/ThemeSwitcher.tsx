import React from 'react';
import { useTheme, Themes } from "app/providers/ThemeProvider";
import LightModeIcon from 'shared/assets/light-mode.module.svg';
import DarkModeIcon from 'shared/assets/dark-mode.module.svg';
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
            ? <DarkModeIcon stroke='#fff' fill='#fff' className={styles.ThemeSwitcherIcon} /> 
            : <LightModeIcon stroke='#000' fill='#000' className={styles.ThemeSwitcherIcon} />
        }
    </AppButton>
  );
};

export default ThemeSwitcher;