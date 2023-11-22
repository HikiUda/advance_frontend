import { FC } from 'react';
import { classNames } from 'shared/lib/classnames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
   className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
   const { className } = props;
   return (
      <div className={classNames(cls.Navbar, {}, [className])}>
         <div className={classNames(cls.links)}>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
               Main
            </AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
               About
            </AppLink>
         </div>
      </div>
   );
};
