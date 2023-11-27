import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';

export const BugButton: FC = () => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);
    const toThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={toThrow}
            theme={ButtonTheme.RED}
        >
            {t('Выкинуть ошибку')}
        </Button>
    );
};
