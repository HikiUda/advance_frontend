import { FC } from 'react';
import { classNames } from 'shared/lib/classnames/classNames';
import cls from './LangSwitcher.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
   className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
   const { className } = props;
   const { t, i18n } = useTranslation();

   const toggle = () => {
      i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
   };
   return (
      <Button onClick={toggle} className={classNames(cls.LangSwitcher, {}, [className])}>
         {t('Язык')}
      </Button>
   );
};
