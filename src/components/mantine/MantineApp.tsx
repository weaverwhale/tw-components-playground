import { useState, useEffect } from "react";
import { Space, ComponentProvider } from "@weaverwhale/tw-components";
import MantineHeader from "@/components/mantine/MantineHeader";
import MantineCarousel from "@/components/mantine/MantineCarousel";

export default function MantineApp() {
  const [darkMode, setDarkMode] = useState(true);

  // Check for dark mode
  // a bit non-standard, but it works
  useEffect(() => {
    function checkDarkMode() {
      const ld = window.localStorage.getItem("lightDark") === "true";
      setDarkMode(ld);
    }

    document
      .getElementById("dark-light-toggle")
      .addEventListener("click", () => {
        checkDarkMode();
      });

    checkDarkMode();

    return () => {
      document
        .getElementById("dark-light-toggle")
        .removeEventListener("change", checkDarkMode);
    };
  }, []);

  return (
    <ComponentProvider
      theme={{
        // Override any other properties from default theme
        fontFamily: "Open Sans, sans serif",
        spacing: {
          xs: "1rem",
          sm: "1.2rem",
          md: "1.8rem",
          lg: "2.2rem",
          xl: "2.8rem",
        },
        colorScheme: darkMode ? "dark" : "light",
      }}
    >
      <MantineHeader />
      <div className="max-width">
        <MantineCarousel />
        <Space h="md" />
      </div>
    </ComponentProvider>
  );
}
