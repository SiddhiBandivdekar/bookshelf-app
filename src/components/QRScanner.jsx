import React, { useState } from "react";
import QrReader from "react-qr-scanner";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const QRScanner = () => {
  const [scannedResult, setScannedResult] = useState(null);
  const navigate = useNavigate();

  const handleScan = (data) => {
    if (data) {
      setScannedResult(data);
      navigate(`/show-book/${data}`);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const handleCancelScan = () => {
    setScannedResult(null);
    navigate("/");
  };

  return (
    <div>
      <h2>QR Code Scanner</h2>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
      {!scannedResult ? (
        <Button variant="danger" onClick={handleCancelScan}>
          Cancel Scan
        </Button>
      ) : (
        <div>
          <p>Scanned Result: {scannedResult}</p>
          <Button variant="primary" onClick={handleCancelScan}>
            Scan Again
          </Button>
        </div>
      )}
    </div>
  );
};

export default QRScanner;
