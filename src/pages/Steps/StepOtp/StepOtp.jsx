import React, { useState } from "react";
import Card from "../../../components/shared/card/Card";
import TextInput from "../../../components/shared/TextInput/TextInput";
import Button from "../../../components/shared/Button/Button";
import styles from "./StepOtp.module.css";

const StepOtp = ({ onNext }) => {
  const [otp, setOTP] = useState("");

  return (
    <>
      <div className={styles.cardWrapper}>
        <Card
          title={"Enter the code we just texted you"}
          icon={"/images/lock.png"}
        >
          <TextInput value={otp} onChange={(e) => setOTP(e.target.value)} />
          <div>
            <div className={styles.actionButtonWrap}>
              <Button text="Next" />
            </div>
            <p className={styles.bottomParagraph}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
              perferendis?
            </p>
          </div>
        </Card>
      </div>
    </>
  );
};

export default StepOtp;
