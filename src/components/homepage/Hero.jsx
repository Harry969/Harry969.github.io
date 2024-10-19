import React from "react";
import clsx from "clsx";
import BrowserOnly from '@docusaurus/BrowserOnly';

const styles = {
  heroBanner: {
    padding: "10rem 0 11rem",
    textAlign: "left",
    position: "relative",
    overflow: "hidden",
    background: "#000",
    color: "#fff",
    marginBottom: "4rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
  heroBannerSmall: {
    padding: "4rem 2rem",
  },
  title: {
    fontSize: "4rem",
    textShadow: "3px 0px 30px rgba(0, 0, 0, 0.2)",
  },
  titleSmall: {
    fontSize: "2rem",
  },
  subtitle: {
    margin: 0,
  },
  subtitleSmall: {
    fontSize: "1.2rem",
  },
  highlighted: {
    background: "linear-gradient(to left, #0054ad 0%, #b8fb3c 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
};

export const Hero = () => {
  return (
    <BrowserOnly>
      {() => {
        const isSmallScreen = window.innerWidth <= 600;

        return (
          <header
            className={clsx("hero hero--primary")}
            style={isSmallScreen ? styles.heroBannerSmall : styles.heroBanner}
          >
            <div className="container">
              <h1
                className={clsx("hero__title")}
                style={isSmallScreen ? styles.titleSmall : styles.title}
              >
                Hi. I'm <span style={styles.highlighted}>Tong Que</span>,
                <br />
                Full-stack Cloud Developer.
              </h1>
              <p
                className={clsx("hero__subtitle")}
                style={isSmallScreen ? styles.subtitleSmall : styles.subtitle}
              >
                对个人成长和技术趋势感兴趣的软件工程师。
                <br /> 云原生和开源爱好者。
              </p>
            </div>
          </header>
        );
      }}
    </BrowserOnly>
  );
};
