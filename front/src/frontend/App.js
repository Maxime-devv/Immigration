import Acceuil from './acceuil/Acceuil';
import './App.css';
import MainNavigation from './navbar/MainNavigation';
import Footer from './footer/Footer';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LangageProvider } from './Context/LangageContext';
import Contact from './contact/Contact';
import Permanent from './permanent/Permanent';
import Temporaire from './temporaire/Temporaire';
import Parrainage from './parrainage/Parrainage';
import Visa from './Visa/Visa';
import Aide from './aide/Aide';
import Citoyennete from './citoyennete/Citoyennete';
import Profile from './profile/Profile';
import Daa from './Daa/Daa';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainNavigation />,
      children: [
        { path: "/", element: <Acceuil /> },
        { path: "/contact", element: <Contact/>},
        { path: "/permanent-status", element: <Permanent/>},
        { path: "/temporary-status", element: <Temporaire/>},
        { path: "/parrainage-famille", element: <Parrainage/>},
        { path: "/visa", element: <Visa/>},
        { path: "/aides", element: <Aide/>},
        { path: "/citoyenneteCanadienne", element: <Citoyennete/>},
        { path: "/about", element: <Profile/>},
        { path: "/demandeur-asile", element: <Daa/>},
      ],
    },
  ]);

  return (
    <LangageProvider>
      
      <RouterProvider router={router} />
      <Footer />
    </LangageProvider>
  );
}

export default App;
