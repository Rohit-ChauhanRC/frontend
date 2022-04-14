import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Card from "../../components/shared/card/Card";

const Home = () => {
  return (
    <div className={styles.cardWrapper}>
      <Card title={"Welcome to Codershouse!"} icon={"/images/hand.png"} />
      {/* <div className={styles.card}>
        <div className={styles.headingWrapper}>
          <img src="/images/hand.png" alt="logo" />
          <h1 className={styles.heading}>Welcome to Codershouse!</h1>
        </div>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quas
          optio eos odit praesentium, ea vero magnam ducimus et culpa.
        </p>
        <div>
          <button>
            <span>Get your username</span>
            <img src="/images/arrow.png" alt="arrow" />
          </button>
        </div>
        <div>
          <span>Have an invite text?</span>
          <Link to="/login">Sign in</Link>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
