import React, {Suspense, lazy} from 'react';
import Preloader from './components/preloader/preloader';


const AppRouter = lazy(() => import('./components/AppRouter'));

function App() {
  return (
    <Suspense fallback={<Preloader/>}>
      <AppRouter/>
    </Suspense>
  );
}

export default App;