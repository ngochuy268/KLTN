import styles from './Header.module.scss';
import barcode from '../../assets/layoutImg/barcode.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode, faSearch, faBell, faExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import BarcodeScanner from '../barcode/BarcodeScanner';
import { Dialog, DialogTitle } from '@mui/material';

function Header() {

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    const handleClose = () => {
        setOpen(false);
    };


    useEffect(() => { 

        // Notification toggle appearance
        const $ = document.querySelector.bind(document);
        const headerNotification = $(`.${styles.headerNotification}`);
        const height = window.getComputedStyle(headerNotification, null).getPropertyValue('height');
        
        $(`.${styles.headerNotificationWrapper}`).onclick = function() {
            $(`.${styles.headerNotification}`).classList.toggle(`${styles.active}`);
            $(`.${styles.headerNotification}`).onclick = function(e) {
                e.stopPropagation();
            }
        }

        // Notification style edit
        const x = parseInt(height.slice(0,-2));
        if ( x > 500 ) {
            headerNotification.style.height = 500 + 'px';
            headerNotification.style.overflowY = 'auto';
        } 
        else {
            headerNotification.style.height = 'auto';
            headerNotification.style.overflowY = 'initial';
        }
    },[]);
    
    return (
        <>
            <header className={styles.pageHeader}>
                <ul className={styles.headerComponent}>
                    <li className={styles.headerItem}>
                        <button className={styles.barcodeButton} onClick={handleClickOpen}><FontAwesomeIcon icon={faBarcode} /></button> 
                    </li>
                    <li className={clsx(styles.headerItem, styles.headerNotificationWrapper)}>
                        <FontAwesomeIcon icon={faBell} className={styles.notifyIcon}/>
                        <div className={styles.headerNotification}>
                           <div className={styles.headerNotificationItem}>
                                <div className={styles.headerNotificationHeader}>
                                    <FontAwesomeIcon icon={faExclamation} />
                                </div>
                                <div className={styles.headerNotificationContent}>
                                    <p><span>Bánh Flan 50g</span></p>
                                    <p><span>Số lượng: </span>500/2500 bánh</p>
                                    <p><span>Hạn sử dụng: </span>21/01/2022</p>
                                </div>
                            </div>
                            <div className={styles.headerNotificationItem}>
                                <div className={styles.headerNotificationHeader}>
                                    <FontAwesomeIcon icon={faExclamation} />
                                </div>
                                <div className={styles.headerNotificationContent}>
                                    <p><span>Rau câu dừa 75g</span></p>
                                    <p><span>Số lượng: </span>500/2500 bánh</p>
                                    <p><span>Hạn sử dụng: </span>21/01/2022</p>
                                </div>
                            </div>
                            <div className={styles.headerNotificationItem}>
                                <div className={styles.headerNotificationHeader}>
                                    <FontAwesomeIcon icon={faExclamation} />
                                </div>
                                <div className={styles.headerNotificationContent}>
                                    <p><span>Bánh Flan 100g</span></p>
                                    <p><span>Số lượng: </span>500/2500 bánh</p>
                                    <p><span>Hạn sử dụng: </span>21/01/2022</p>
                                </div>
                            </div>
                            <div className={styles.headerNotificationItem}>
                                <div className={styles.headerNotificationHeader}>
                                    <FontAwesomeIcon icon={faExclamation} />
                                </div>
                                <div className={styles.headerNotificationContent}>
                                    <p><span>Bánh Flan 100g</span></p>
                                    <p><span>Số lượng: </span>500/2500 bánh</p>
                                    <p><span>Hạn sử dụng: </span>21/01/2022</p>
                                </div>
                            </div>
                            <div className={styles.headerNotificationItem}>
                                <div className={styles.headerNotificationHeader}>
                                    <FontAwesomeIcon icon={faExclamation} />
                                </div>
                                <div className={styles.headerNotificationContent}>
                                    <p><span>Bánh Flan 100g</span></p>
                                    <p><span>Số lượng: </span>500/2500 bánh</p>
                                    <p><span>Hạn sử dụng: </span>21/01/2022</p>
                                </div>
                            </div>
                            <div className={styles.headerNotificationItem}>
                                <div className={styles.headerNotificationHeader}>
                                    <FontAwesomeIcon icon={faExclamation} />
                                </div>
                                <div className={styles.headerNotificationContent}>
                                    <p><span>Bánh Flan 100g</span></p>
                                    <p><span>Số lượng: </span>500/2500 bánh</p>
                                    <p><span>Hạn sử dụng: </span>21/01/2022</p>
                                </div>
                            </div>
                            <div className={styles.headerNotificationItem}>
                                <div className={styles.headerNotificationHeader}>
                                    <FontAwesomeIcon icon={faExclamation} />
                                </div>
                                <div className={styles.headerNotificationContent}>
                                    <p><span>Bánh Flan 100g</span></p>
                                    <p><span>Số lượng: </span>500/2500 bánh</p>
                                    <p><span>Hạn sử dụng: </span>21/01/2022</p>
                                </div>
                            </div>
                            <div className={styles.headerNotificationItem}>
                                <div className={styles.headerNotificationHeader}>
                                    <FontAwesomeIcon icon={faExclamation} />
                                </div>
                                <div className={styles.headerNotificationContent}>
                                    <p><span>Bánh Flan 100g</span></p>
                                    <p><span>Số lượng: </span>500/2500 bánh</p>
                                    <p><span>Hạn sử dụng: </span>21/01/2022</p>
                                </div>
                            </div>
                            <div className={styles.headerNotificationItem}>
                                <div className={styles.headerNotificationHeader}>
                                    <FontAwesomeIcon icon={faExclamation} />
                                </div>
                                <div className={styles.headerNotificationContent}>
                                    <p><span>Bánh Flan 100g</span></p>
                                    <p><span>Số lượng: </span>500/2500 bánh</p>
                                    <p><span>Hạn sử dụng: </span>21/01/2022</p>
                                </div>
                            </div>
                            <div className={styles.headerNotificationItem}>
                                <div className={styles.headerNotificationHeader}>
                                    <FontAwesomeIcon icon={faExclamation} />
                                </div>
                                <div className={styles.headerNotificationContent}>
                                    <p><span>Bánh Flan 100g</span></p>
                                    <p><span>Số lượng: </span>500/2500 bánh</p>
                                    <p><span>Hạn sử dụng: </span>21/01/2022</p>
                                </div>
                            </div>
                            <div className={styles.headerNotificationItem}>
                                <div className={styles.headerNotificationHeader}>
                                    <FontAwesomeIcon icon={faExclamation} />
                                </div>
                                <div className={styles.headerNotificationContent}>
                                    <p><span>Bánh Flan 100g</span></p>
                                    <p><span>Số lượng: </span>500/2500 bánh</p>
                                    <p><span>Hạn sử dụng: </span>21/01/2022</p>
                                </div>
                            </div>
                            <div className={styles.headerNotificationItem}>
                                <div className={styles.headerNotificationHeader}>
                                    <FontAwesomeIcon icon={faExclamation} />
                                </div>
                                <div className={styles.headerNotificationContent}>
                                    <p><span>Bánh Flan 100g</span></p>
                                    <p><span>Số lượng: </span>500/2500 bánh</p>
                                    <p><span>Hạn sử dụng: </span>21/01/2022</p>
                                </div>
                            </div>

                        </div>
                    </li>
                </ul>
            </header>

             {/* BarcodeScanner */}
            <Dialog open={open} onClose={handleClose}>
                <div className={styles.closeButtonWrapper} onClick={handleClose}>
                    <button className={styles.closeButton}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
                <DialogTitle id="alert-dialog-title" style={{textAlign: 'center', fontWeight: '700', fontSize: '30px'}}>
                    {"Đưa mã vạch vào khung hình"}
                </DialogTitle>
                <BarcodeScanner />
            </Dialog>
        </>
    );
}

export default Header;