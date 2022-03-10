import Head from "next/head";
import { Alert, Form, FormGroup, Button, Card } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState(0);
  const [address, setAddress] = useState("");
  const [otp, setOtp] = useState("0");
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const onSend = () => {
    const generatedErrors = {};
    if (!address.length) generatedErrors.address = "Address is required";
    else if (!address.includes("0x"))
      generatedErrors.address = "Address format is not correct.";

    if (amount <= 0) generatedErrors.amount = "Amount must be greator than 0";

    if (otp < 0 || `${otp}`.length !== 6)
      generatedErrors.otp = "Otp Authentication code must be 6 numbers";

    if (!Object.keys(generatedErrors).length) {
      setSuccess(true);
    }
    setErrors({ ...generatedErrors });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Card className="p-3" style={{ width: "500px" }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ETH Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="ETH Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              {errors.address && (
                <Form.Text className="text-danger">{errors.address}</Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Amount to Send</Form.Label>
              <Form.Control
                type="text"
                placeholder="Amount to Send"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              {errors.amount && (
                <Form.Text className="text-danger">{errors.amount}</Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>OTP Authentication</Form.Label>
              <Form.Control
                type="number"
                placeholder="OTP code"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              {errors.otp && (
                <Form.Text className="text-danger">{errors.otp}</Form.Text>
              )}
            </Form.Group>
            {success && <Alert variant="success">Transaction Success!</Alert>}

            <Form.Group className="mb-3">
              <Button
                variant="primary"
                className="btn btn-default w-100"
                onClick={onSend}
              >
                {" "}
                Send Tokens{" "}
              </Button>
            </Form.Group>
          </Form>
        </Card>
      </main>
    </div>
  );
}
