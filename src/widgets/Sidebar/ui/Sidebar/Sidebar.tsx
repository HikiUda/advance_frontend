import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classnames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LengSwitcher';

interface SidebarProps {
   className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
   const { className } = props;

   const [collapsed, setCollapsed] = useState(false);

   const onToggle = () => {
      setCollapsed((prev) => !prev);
   };

   return (
      <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
         <button onClick={onToggle}>toggle</button>
         <div className={classNames(cls.switchers)}>
            <ThemeSwitcher />
            <LangSwitcher />
         </div>
      </div>
   );
};
