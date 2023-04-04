import React, { useState } from "react";

export default function Header() {
  const currentColorScheme =
    window.localStorage.getItem("lightDark") === "true";
  const [darkMode, setDarkMode] = useState(currentColorScheme);

  const colorSchemeQueryList = window.matchMedia(
    "(prefers-color-scheme: dark)"
  );
  colorSchemeQueryList.addEventListener("change", (e) =>
    setDarkMode(e.matches || false)
  );

  return (
    <header>
      <div className="header-inner">
        <div>
          <a href="/">
            <img
              src="/tw-logo.svg"
              alt="Triple Whale"
              width="150"
              height="21"
            />
          </a>
        </div>
        <nav>
          <a href="/">Home</a>
          <div id="dark-light-toggle">
            {darkMode ? (
              <i
                id="dark"
                aria-label="Dark Mode"
                onClick={() => setDarkMode(false)}
              >
                🌚
              </i>
            ) : (
              <i
                id="light"
                aria-label="Light Mode"
                onClick={() => setDarkMode(true)}
              >
                🌝
              </i>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
