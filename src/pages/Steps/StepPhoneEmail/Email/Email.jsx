import React, { useState } from "react";
import Card from "../../../../components/shared/card/Card";
import Button from "../../../../components/shared/Button/Button";
import TextInput from "../../../../components/shared/TextInput/TextInput";
import styles from "../StepPhoneEmail.module.css";

const Email = ({ onNext }) => {
  const [email, setEmail] = useState();

  return (
    <Card title={"Enter your email id"} icon={"/images/email-emoji.png"}>
      <TextInput value={email} onChange={(e) => setEmail(e.target.value)} />
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

export default Email;
