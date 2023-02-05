import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { QrReader } from "react-qr-reader";

const Scanned = () => {
  const [scannerFile, setScannerFile] = useState(" ");
  const qrRef = useRef(null || {});

  const handleError = (error) => {
    console.log(error);
  };
  const handleScan = (result) => {
    if (result) {
      setScannerFile(result);
    }
  };

  //   console.log(scannerFile);

  const onScanFile = () => {
    qrRef.current.openImageDialog();
   
  };



  return (
    <div>
      <Button variant="success" color="secondary" onClick={onScanFile}>
        Scan Qr Code
      </Button>
      <QrReader
        ref={qrRef}
        delay={300}
        style={{height:"100px" }}
        onError={handleError}
        onResult={handleScan}
        legacyMode
      />
      <h3>Scanned Code: {scannerFile}</h3>
    </div>
  );
};

export default Scanned;
