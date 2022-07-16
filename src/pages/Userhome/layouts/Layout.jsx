import styles from './css/Layout.module.scss';
import logo from '../../../assets/layoutImg/logo.png';
import avatar from '../../../assets/layoutImg/avatar.png';
import { Link } from 'react-router-dom';
import { SidebarDataEmployee } from '../../../components/sidebar/SidebarData';
import { SubMenu } from '../../../components/sidebar/SubmenuEmployee';
import Header from '../../../components/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import ContentEmployee from '../../../routes/UserRoute';

function LayoutEmployee() {

    // Scroll top function


    return (
        <div className={styles.container}>
            <div className={styles.gridColumn2}>
                <div className="pageHeadWrapper">
                    <div className={styles.pageLogo}>
                        <div style={{width:"80px"}} align ="center">
                            <img src={logo} alt="page-logo" style={{width:"70px"}}/>
                        </div>
                        
                        <div className={styles.pageNameWrapper} style={{textAlign: 'center'}}>
                            <p className={styles.pageName}>Hoàng Ngọc Food</p>
                        </div>
                    </div>
                    <div className={styles.userAdmin}>
                        <div style={{width:  '80px'}} align = "center">
                            <img src={avatar} alt="user-logo" style={{width:"50px", borderRadius:'50%   '}} />
                        </div>
                        <div className={styles.pageNameWrapper}>
                            <p className={styles.pageNameUser}>Nguyễn Văn A</p>
                        </div>
                    </div>
                </div>
                <div className={styles.pageMenuWrapper}>
                    <div className={styles.pageMenuItems}>
                        <Link to='/canhan' className={clsx(styles.pageMenuItemsLink, styles.active)}>
                            <div className={styles.pageMenuItemsName}>
                                <FontAwesomeIcon icon={faHouseUser}/>
                                <p>Cá nhân</p>
                            </div>
                        </Link>
                    </div>
                    {SidebarDataEmployee.map((item) => (
                        <div className={styles.pageMenuItems}>
                            <SubMenu item={item} key={item.key}/>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.gridColumn10}>
                <Header />
                {/* <ContentEmployee /> */}
            </div>
        </div>
    );
}

export default LayoutEmployee;