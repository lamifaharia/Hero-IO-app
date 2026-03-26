import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HeroBanner from "./Components/HeroBanner";
import TrustedBy from "./Components/TrustedBy";
import TrendingApps from "./Components/TrendingApps";
import AppDetails from "./Components/AppDetails"
import Apps from "./Components/Apps"
import { useState } from "react";
import Installation from "./Components/Installation";
import ErrorPage from "./Components/ErrorPage";


const MainLayout = () => {

  const [installedApps, setInstalledApps] = useState([]);

    const handleInstall = (app) => {
        const isExist = installedApps.find(item => item.id === app.id);
        if (!isExist) {
            setInstalledApps([...installedApps, app]);
            alert(`${app.name} is now installed!`);
        } else {
            alert("App is already in your installation list.");
        }
    };

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <div className="flex-grow">

                <Outlet context={[installedApps, handleInstall]} />
            </div>
            <Footer />
        </div>
    );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
      {
        path: "/",
        element: (
          <>
            <HeroBanner />
            <TrustedBy />
            <TrendingApps />
          </>
        ),
      },
      {
        path: "/apps", 
        element: <Apps />, 
      },
      {
        path: "/app/:id",
        element: <AppDetails />, 
      },
      {
        path: "/installation",
        element: <Installation />, 
      },
    ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;