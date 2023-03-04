import Team from "./Sections/Team/Team";
import Services from "./Sections/Services/Services";
import Header from "./Sections/Header/Header";
import Feature from "./Sections/Features/Features";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
function AnimationRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path={"/"} element={<Header />} />
        <Route path={"/Team"} element={<Team />} />
        <Route path={"/Services"} element={<Services />} />
        <Route path={"/Features"} element={<Feature />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimationRoutes;
