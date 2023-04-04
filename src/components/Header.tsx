import React, { useState } from "react";
import { Text } from "@weaverwhale/tw-components";

export default function Header({ darkMode, setDarkMode }) {
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
          <div id="dark-light-toggle" className={`${darkMode && "dark"}`}>
            {darkMode ? (
              <i
                id="dark"
                aria-label="Dark Mode"
                onClick={() => setDarkMode(false)}
              >
                <Text c="white">🌚 Dark Mode</Text>
              </i>
            ) : (
              <i
                id="light"
                aria-label="Light Mode"
                onClick={() => setDarkMode(true)}
              >
                <Text c="white">🌝 Light Mode</Text>
              </i>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
