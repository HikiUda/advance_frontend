import { FC } from 'react';
import { classNames } from 'shared/lib/classnames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { Theme, useTheme } from 'app/providers/ThemeProvider';

import DarkTheme from 'shared/assets/icons/theme-dark 1.svg';
import LightTheme from 'shared/assets/icons/theme-light 1.svg';
import { Button } from '../../shared/ui/Button/Button';

interface ThemeSwitcherProps {
   className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
   const { className } = props;
   const { theme, toggleTheme } = useTheme();
   return (
      <Button onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
         {theme === Theme.LIGHT ? <LightTheme /> : <DarkTheme />}
      </Button>
   );
};
