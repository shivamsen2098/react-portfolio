
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Layout from './Layout';
import ExcelDataAnalysis from './pages/ExcelDataAnalysis';
import WebDevelopmentProject from './pages/WebProject';
import BasicWebProjects from './pages/BasicWebProjects';
import ResponsiveWebProjects from './pages/ResponsiveWebProjects';
import TextAnimator from './pages/TextAnimator';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },       // Home page
      { path: 'about', element: <About /> }, // About page
      { path: 'projects', element: <Projects /> },
      { path: 'contact', element: <Contact /> },
      { path: 'services', element: <Services /> },
      { path: 'excel-data-analysis', element: <ExcelDataAnalysis /> },
      { path: 'basic-web-projects', element: <BasicWebProjects /> },
      { path: 'responsive-web-projects', element: <ResponsiveWebProjects /> },
      { path: 'text-animator', element: <TextAnimator /> },
    ],
  },
]);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
