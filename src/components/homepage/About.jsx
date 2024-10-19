import React from "react";
import clsx from "clsx";

// 内联样式
const styles = {
  avatarContainer: {
    marginLeft: "2rem",
  },
  avatarContainerSmall: {
    margin: "2rem 0 0",
  },
  avatar: {
    display: "block",
    maxWidth: "310px",
    maxHeight: "310px",
    margin: "0 auto",
  },
  avatarImg: {
    borderRadius: "999px",
    maxHeight: "310px",
  },
};

export const AboutMe = ({  descriptionComponent }) => {
    return (
      <div className="margin-top--lg">
        <h2>About me</h2>
        <div className="row">
          <div className="col col--6">{descriptionComponent}</div>
          <div className={clsx("col col--5", styles.avatarContainer)}>
            <div className={styles.avatar}>

            </div>
          </div>
        </div>
      </div>
    );
  };
