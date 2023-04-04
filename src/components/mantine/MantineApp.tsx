import { useState, useEffect } from "react";
import { Space, ComponentProvider } from "@weaverwhale/tw-components";
import Header from "@/components/Header";
import MantineHero from "@/components/mantine/MantineHero";
import MantineCarousel from "@/components/mantine/MantineCarousel";

export default function MantineApp() {
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
    <ComponentProvider
      theme={{
        // Override any other properties from default theme
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
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <MantineHero />
      <div className="max-width">
        <MantineCarousel />
        <Space h="md" />
      </div>
    </ComponentProvider>
  );
}
