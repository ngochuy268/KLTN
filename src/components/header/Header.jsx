import styles from './Header.module.scss';
import barcode from '../../assets/layoutImg/barcode.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode, faSearch, faBell, faExclamation, faXmark, faBox } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import BarcodeScanner from '../barcode/BarcodeScanner';
import { Dialog, DialogTitle } from '@mui/material';
import logo from '../../assets/layoutImg/logo.png';
import { fetchNotification } from '../../services/khoHangServices';

function Header() {

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // Data notification show
    useEffect(() => {
        fetchShowNo();
    }, []);

    const [showNo, setShowNo] = useState({});
    console.log(showNo)
    const fetchShowNo = async () => {
        let response = await fetchNotification();
        if (response && response.EC === 0) {
            setShowNo(response.DT);
        }
    }

    useEffect(() => {

        // Notification toggle appearance
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);
        const headerNotification = $(`.${styles.headerNotification}`);
        const height = window.getComputedStyle(headerNotification, null).getPropertyValue('height');

        $(`.${styles.headerNotificationWrapper}`).onclick = function () {
            $(`.${styles.headerNotification}`).classList.toggle(`${styles.active}`);
            $(`.${styles.headerNotification}`).onclick = function (e) {
                e.stopPropagation();
            }
        }

        $(`.${styles.headerStoreWrapper}`).onclick = function () {
            $(`.${styles.headerStore}`).classList.toggle(`${styles.active}`);
            $(`.${styles.headerStore}`).onclick = function (e) {
                e.stopPropagation();
            }
        }

        $$(`.${styles.headerNotificationItem}`).forEach(item => {
            item.onclick = function () {
                this.classList.add(`${styles.seen}`);
            }
        })
        console.log($$(`.${styles.headerNotificationItem}`))
    }, []);

    return (
        <>
            <header className={styles.pageHeader}>
                <div className={styles.pageLogo}>
                    <div style={{ width: "80px" }} align="center">
                        <img src={logo} alt="page-logo" className={styles.logoIcon} />
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
                        <FontAwesomeIcon icon={faBell} className={styles.notifyIcon} />
                        <div className={styles.headerNotification}>
                            {showNo.hetHan && showNo.hetHan.length > 0 ?
                                showNo.hetHan.map((item, index) => {
                                    return (
                                        <div className={styles.headerNotificationItem} key={index}>
                                            <div className={styles.headerNotificationHeader}>
                                                <FontAwesomeIcon icon={faExclamation} />
                                            </div>
                                            <div className={styles.headerNotificationContent}>
                                                <p ><span style={{ color: '#159af7', fontSize: '17px' }}>{item.SanPham.TenSanPham} <span style={{ color: '#1539f7' }}>đã hết hạn</span></span></p>
                                                <div className={styles.contentWrapper}>
                                                    <p>Số lượng: <span>{item.SoLuong}</span></p>
                                                    <p>HSD: <span>{item.HSD}</span></p>
                                                </div>
                                                <p>Vị trí:<span> {item.ViTri} </span></p>
                                            </div>
                                        </div>
                                    )
                                })

                                : <></>
                            }

                        </div>
                    </li>
                    <li className={styles.headerStoreWrapper} >
                        <FontAwesomeIcon icon={faBox} className={styles.storeIcon} />
                        <div className={styles.headerStore} style={{ height: '700px' }}>
                            <img src={require('../../assets/layoutImg/Kho.drawio.png').default} alt="" className={styles.storeImg} style={{ width: '80%' }} />
                        </div>
                    </li>
                </ul>
            </header>

            {/* BarcodeScanner */}
            <Dialog open={open} onClose={handleClose}>
                <div className={styles.closeButtonWrapper} onClick={handleClose}>
                    <button className={styles.closeButton}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
                <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center', fontWeight: '700', fontSize: '30px' }}>
                    {"Đưa mã vạch vào khung hình"}
                </DialogTitle>
                <BarcodeScanner />
            </Dialog>
        </>
    );
}
export default Header;