import React from "react";
import Card from "../../../../components/shared/card/Card";
import Button from "../../../../components/shared/Button/Button";
import TextInput from "../../../../components/shared/TextInput/TextInput";
import { useState } from "react";
import styles from "../StepPhoneEmail.module.css";

const Phone = ({ onNext }) => {
  const [phoneNumber, setPhoneNumber] = useState();

  return (
    <Card title={"Enter your number"} icon={"/images/tele.png"}>
      <TextInput
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <div>
        <div className={styles.actionButtonWrap}>
          <Button text="Next" onClick={onNext} />
        </div>
        <p className={styles.bottomParagraph}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
          perferendis?
        </p>
      </div>
    </Card>
  );
};

export default Phone;
