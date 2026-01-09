import React, { memo } from 'react';
import classes from './AppText.module.scss';
import classNames from 'classnames';

export enum TextTheme {
  NORMAL = 'normal',
  ERROR = 'error',
}

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

interface AppTextProps {
  children?: string | number;
  theme?: TextTheme;
  align?: TextAlign;
}

const AppText: React.FC<AppTextProps> = ({ children, theme = TextTheme.NORMAL, align = TextAlign.LEFT }) => {
  return (
    <div className={classNames(classes.AppText, classes[theme], classes[align])}>
      { children }
    </div>
  );
};

export default memo(AppText);