import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { routeConfig } from '../config/routeConfig';

const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route key={path} path={path} element={element} />
            ))}
        </Routes>
    </Suspense>
);

export default AppRouter;
