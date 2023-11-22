import './styles/index.scss';

import { classNames } from 'shared/lib/classnames/classNames';
import { useTheme } from './providers/ThemeProvider';

import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';

const App = () => {
   const { theme } = useTheme();

   return (
      <div className={classNames('app', {}, [theme])}>
         <Suspense fallback="">
            <Navbar />
            <div className={classNames('content-page')}>
               <Sidebar />
               <div className={classNames('page-wrapper')}>
                  <AppRouter />
               </div>
            </div>
         </Suspense>
      </div>
   );
};

export default App;