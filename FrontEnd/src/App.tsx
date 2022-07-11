// import Footer from '../src/shared/Footer';
import Header from '../src/shared/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/sidebar';
import { UserProvider } from './context/UserProvider';

import { ConfigurationProvider } from './context/ConfigurationProvider';
// @ts-ignore
import routes from '../src/config/route.config';
import { isLogin } from '../src/config/storage';

import { ArchivosProvider } from './context/ArchivosProvider';
import { AlertasProvider } from './context/AlertasProvider';
import { BlockProvider } from './context/BlockProvider';


function App() {
  return (
    <AlertasProvider>
      <UserProvider>
        <ConfigurationProvider>
          <ArchivosProvider>
            <BlockProvider>

              <BrowserRouter>
                {isLogin ? null :
                  <Header />}

                <Routes>
                  {routes.map(ruta => (
                    <Route
                      key={ruta.path}
                      path={ruta.path}
                      element={<ruta.componente />}
                    />
                  ))}
                </Routes>

                {/* <Footer /> */}
                {isLogin ? null :
                  <Sidebar />}
              </BrowserRouter>
            </BlockProvider>
          </ArchivosProvider>
        </ConfigurationProvider>
      </UserProvider>
    </AlertasProvider>
  );
}

export default App;
