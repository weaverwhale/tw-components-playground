import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import {
  Header,
  Footer,
  ErrorBoundary,
  TWProvider,
  FourOhFour,
} from "@weaverwhale/tw-components";

import Home from "@/pages/Home";

import "./App.css";

function App() {
  const currentColorScheme =
    window.localStorage.getItem("lightDark") === "true";
  const [darkMode, setDarkMode] = useState(currentColorScheme || false);

  const colorSchemeQueryList = window.matchMedia(
    "(prefers-color-scheme: dark)"
  );
  colorSchemeQueryList.addEventListener("change", (e) =>
    setDarkMode(e.matches || false)
  );

  return (
    <TWProvider darkMode={darkMode} setDarkMode={setDarkMode}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <ErrorBoundary>
        <Routes>
          <Route path="/404" element={<FourOhFour />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </TWProvider>
  );
}

export default App;
