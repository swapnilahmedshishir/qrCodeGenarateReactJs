import React, { useState } from "react";
import { Button } from "react-bootstrap";
import QRCode from 'qrcode';

const Genatate = () => {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(imageUrl);

  return (
    <div>
      <div className="genarate">
        <Button variant="success" onClick={() => generateQrCode()}>
          Qr Code Genarate{" "}
        </Button>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          className="code_genteror_input"
          placeholder="Submit here Link"
        />
      </div>
      <br />
      <br />
      {imageUrl ? (
        <a href={imageUrl} download>
          <img src={imageUrl} alt="img" />
        </a>
      ) : null}
    </div>
  );
};

export default Genatate;
