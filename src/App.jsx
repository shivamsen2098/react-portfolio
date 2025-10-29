// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Skills from "./components/Skills";
// import Services from "./components/Services";
// import Testimonials from "./components/Testimonial";
// import Testimonial from "./components/Testimonial";
// import FAQ from "./components/FAQ";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//       <Skills />
//       <Projects />
//       <Services />
//       <Testimonial />
//       <FAQ />
//       <Contact />
//       <Footer />
//     </>
//   );
// }

// export default App;


// App.js - Main component for the portfolio landing page
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Layout from './Layout';

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
