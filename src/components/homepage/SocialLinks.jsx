import clsx from "clsx";
import React from "react";

// 内联样式
const styles = {
  socialContainer: {
    padding: "2rem 0 4rem",
  },
  socialLinksOdd: {
    paddingRight: "calc(var(--ifm-spacing-horizontal) / 2)",
  },
  socialLinksEven: {
    paddingLeft: "calc(var(--ifm-spacing-horizontal) / 2)",
  },
  col: {
    "--ifm-col-width": "50%",
    marginTop: "var(--ifm-spacing-vertical)",
  },
  btn: {
    width: "100%",
    borderColor: "var(--ifm-color-emphasis-200)",
    padding: "1rem 0",
  },
  btnActive: {
    color: "var(--ifm-font-color-base-inverse)",
    fill: "var(--ifm-font-color-base-inverse)",
  },
  btnIcon: {
    display: "block",
    width: "1.5rem",
    padding: "0.5rem 0",
    margin: "0 auto",
    fill: "var(--ifm-button-color)",
  },
  btnText: {
    color: "var(--ifm-font-color-base)",
  },
};

export const SocialLinks = ({ data }) => {
  const socialLinksComponents = data.map(({ name, url, svg }) => (
    <div className={clsx("col")} style={styles.col} key={name}>
      <a
        href={url}
        target="_blank"
        className={clsx("button button--outline button--primary")}
        style={styles.btn}
      >
        <span style={styles.btnIcon}>{svg}</span>
        <span style={styles.btnText}>{name}</span>
      </a>
    </div>
  ));

  return (
    <div style={styles.socialContainer}>
      <h2>Social TechStack</h2>
      <div className={clsx("row")}>
        {socialLinksComponents}
      </div>
    </div>
  );
};
