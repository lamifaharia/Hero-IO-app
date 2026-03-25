import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HeroBanner from "./Components/HeroBanner";
import TrustedBy from "./Components/TrustedBy";
import TrendingApps from "./Components/TrendingApps";
import AppDetails from "./Components/AppDetails"
import Apps from "./Components/Apps"


const MainLayout = () => (
  <div className="min-h-screen flex flex-col font-sans">
    <Header />
    <div className="flex-grow">
      <Outlet /> 
    </div>
    <Footer />
  </div>
);

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: (
            <>
              <HeroBanner />
              <TrustedBy />
              <TrendingApps/>
              <div className="py-10 text-center text-gray-400 font-medium italic">
                Trending Apps section is coming soon...
              </div>
            </>
          ),
        },
        {
        path: "/apps", 
        element: <Apps />, // 👈 Eikhane 12-ta dekhabe
      },
        {
          path: "/app/:id", // :id mane dynamic path
          element: <AppDetails />,
        },
        {
          path: "/apps",
          element: <div className="p-20 text-center text-3xl font-bold">📱 All Applications Page</div>,
        },
        {
          path: "/installation",
          element: <div className="p-20 text-center text-3xl font-bold">🔧 Installation Guide Page</div>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;