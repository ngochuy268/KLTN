import styles from './Header.module.scss';
import barcode from '../../assets/layoutImg/barcode.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode, faSearch, faBell, faExclamation, faXmark, faBox } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import BarcodeScanner from '../barcode/BarcodeScanner';
import { Dialog, DialogTitle } from '@mui/material';
import logo from '../../assets/layoutImg/logo.png';


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
        const $$ = document.querySelectorAll.bind(document);
        const headerNotification = $(`.${styles.headerNotification}`);
        const height = window.getComputedStyle(headerNotification, null).getPropertyValue('height');
        
        $(`.${styles.headerNotificationWrapper}`).onclick = function() {
            $(`.${styles.headerNotification}`).classList.toggle(`${styles.active}`);
            $(`.${styles.headerNotification}`).onclick = function(e) {
                e.stopPropagation();
            }
        }

        $(`.${styles.headerStoreWrapper}`).onclick = function() {
            $(`.${styles.headerStore}`).classList.toggle(`${styles.active}`);
            $(`.${styles.headerStore}`).onclick = function(e) {
                e.stopPropagation();
            }
        }

        $$(`.${styles.headerNotificationItem}`).forEach(item => {
            item.onclick = function() {
                this.classList.add(`${styles.seen}`);
            }
        })

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
                <div className={styles.pageLogo}>
                    <div style={{ width: "80px" }} align="center">
                        <img src={logo} alt="page-logo" className={styles.logoIcon}/>
                    </div>

                    <div className={styles.pageNameWrapper} style={{ textAlign: 'center' }}>
                        <p className={styles.pageName}>Hoàng Ngọc Food</p>
                    </div>
                </div>
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
                            

                        </div>
                    </li>
                    <li className={styles.headerStoreWrapper} >
                        <FontAwesomeIcon icon={faBox} className={styles.storeIcon} />
                        <div className={styles.headerStore} style={{height: '700px'}}>
                            <img src={require('../../assets/layoutImg/Kho.drawio.png').default} alt="" className={styles.storeImg} style={{width: '80%'}}/>
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