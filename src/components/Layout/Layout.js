import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useContext,
  useRef,
} from "react";

import styled, { ThemeProvider } from "styled-components";
import AOS from "aos";

import Header from "../Header";
import Footer from "../Footer";

import GlobalContext from "../../context/GlobalContext";

import GlobalStyle from "../../utils/globalStyle";

import "./bootstrap-custom.scss";
import "../../../node_modules/aos/dist/aos.css";


import { get, merge } from "lodash";

// the full theme object
import { theme as baseTheme } from "../../utils";
import CustomHelmet from "./CustomHelmet";

// options for different color modes
const modes = { light: "light", dark: "dark" };

// merge the color mode with the base theme
// to create a new theme object
const getTheme = (mode) =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  });

const Layout = ({ children, pageContext }) => {
  const gContext = useContext(GlobalContext);

  useLayoutEffect(() => {
    AOS.init();
  }, []);

  // Navbar style based on scroll
  const eleRef = useRef();

  useEffect(() => {
    window.addEventListener(
      "popstate",
      function(event) {
        // The popstate event is fired each time when the current history entry changes.
        gContext.closeAbout();
        gContext.closeContact();
        gContext.closeOffcanvas();
      },
      false
    );
    window.addEventListener(
      "pushState",
      function(event) {
        // The pushstate event is fired each time when the current history entry changes.
        gContext.closeAbout();
        gContext.closeContact();
        gContext.closeOffcanvas();
      },
      false
    );
  }, [gContext]);

  if (pageContext.layout === "bare") {
    return (
      <ThemeProvider
        theme={
          gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light)
        }
      >
        <GlobalStyle />
        <CustomHelmet/>
        <div className="site-wrapper overflow-hidden" ref={eleRef}>
          {children}
        </div>
      </ThemeProvider>
    );
  }

  return (
    <>
      <ThemeProvider
        theme={
          gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light)
        }
      >
        <GlobalStyle />
        <CustomHelmet/>
        <div className="site-wrapper overflow-hidden" ref={eleRef}>
          <Header isDark={gContext.headerDark} />
          {children}

          <Footer isDark={gContext.footerDark} />
        </div>

      </ThemeProvider>
    </>
  );
};

export default Layout;
