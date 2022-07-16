import { useEffect, useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import styles from '../../components/header/Header.module.scss';


export default function BarcodeScanner(props) {
  const [scan, setScan] = useState(true);
  const [logs, setLog] = useState([]);

  useEffect(() => {
        document.querySelector(`.${styles.closeButton}`).onclick = function() {
            document.querySelector(`.${styles.closeButton}`)
        }
  })
  
  const barcodeScannerComponentHandleUpdate = (error, result) => {
    if (result) {
      setLog([...logs, result.text]);
      window.navigator.vibrate(100);
      setScan(false);
    }
  };

  return (
    <div className={styles.barcodeWrapper}>
        <div className={styles.buttonScannerWrapper}>
            <button className={styles.scanButton} onClick={() => setScan(true)}>Quét</button>
            <button className={styles.cancelButton} onClick={() => setScan(false)}>Dừng quét</button>
            <button className={styles.clearButton} onClick={() => setLog([])}>Bỏ mã</button>
        </div>
        {scan && (
          <div className={styles.scanScreenWrapper}>
              <div className={styles.scanScreen}>
                <BarcodeScannerComponent
                  onUpdate={barcodeScannerComponentHandleUpdate}
                />
            </div>
          </div>
        )}
          {logs.map((log) => (

<div key={log} className={styles.codeWrapper}>
    {log}
</div>

))}
        
    </div>
  );
}