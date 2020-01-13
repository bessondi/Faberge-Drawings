import React, { Suspense, lazy } from 'react';
import Preloader from './components/preloader/preloader';
// import AppRouter from './components/AppRouter';

const AppRouter = lazy(() => import('./components/AppRouter'));


function App() {
    return (
        <Suspense fallback={ <Preloader/> }>
            <AppRouter />
        </Suspense>
    );
}

export default App;