import { FC } from 'react';

import { classNames } from 'shared/lib/classnames/classNames';

import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    const reloadPage = () => {
        /* eslint-disable-next-line no-restricted-globals */
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button theme={ButtonTheme.GREEN} onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
