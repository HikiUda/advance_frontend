import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';

const AppRouter = () => (
    <Suspense fallback={<div>{'Loading...' /* eslint-disable-line */}</div>}>
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route key={path} path={path} element={element} />
            ))}
        </Routes>
    </Suspense>
);

export default AppRouter;
