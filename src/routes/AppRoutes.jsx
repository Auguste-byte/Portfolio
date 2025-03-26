import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Curiculum from "../pages/curiculum/Curiculum";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact";

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 1.0 },
};

const PageWrapper = ({ children }) => (
  <motion.div {...pageTransition}>
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/curiculum" element={<PageWrapper><Curiculum /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const AppRoutes = () => (
  <Router>
    <MainLayout>
      <AnimatedRoutes />
    </MainLayout>
  </Router>
);

export default AppRoutes;
