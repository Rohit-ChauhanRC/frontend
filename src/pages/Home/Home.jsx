import React from "react";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/shared/card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {

  const signINLink = {
    color: '#0077ff',
    fontWeight: 'bold',
    textDecoration: "none",
    marginLeft:'20px',
  }

  const navigate = useNavigate();

  function startRegister() {
    navigate('/register');
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title={"Welcome to Codershouse!"} icon={"/images/hand.png"} >

      <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quas
          optio eos odit praesentium, ea vero magnam ducimus et culpa.
        </p>
        <div>
          <Button onClick={startRegister} text="Get your username" />
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link style={signINLink} to="/login">Sign in</Link>
        </div>

      </Card>

    </div>
  );
};

export default Home;
