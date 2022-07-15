import styles from './css/Layout.module.scss';
import logo from '../../../../assets/layoutImg/logo.png';
import avatar from '../../../../assets/layoutImg/avatar.png';
import { Link } from 'react-router-dom';
import { SidebarData } from '../../../../components/sidebar/SidebarData';
import Header from '../../../../components/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn, faNewspaper, faHistory } from '@fortawesome/free-solid-svg-icons';
import ContentAdmin from '../../../../routes/ContentAdmin';
import $ from 'jquery';

import { TreeView } from '@mui/lab';
import ArrowDropdownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import TreeItem from '@mui/lab/TreeItem';

import Icon from '../../../../components/chatbox/client/icon';
import { useState, useRef, useEffect } from 'react';


import { style } from "../../../../components/chatbox/client/styles.jsx";
import '../../../../components/chatbox/client/index.scss';
import io from "socket.io-client";
import Chat from '../../../../components/chatbox/client/chatwindow/chat';


function LayoutAdmin() {

    // Scroll top function
    const topFunction = () => {
        var body = $("html, body");
        body.stop().animate({ scrollTop: 0 }, 300, 'swing')
    }

    const ref = useRef(null);

    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);
    const [hovered, setHovered] = useState(false);

    const socket = io.connect("http://localhost:3001");

    const joinRoom = () => {
        if (username !== "" && room !== "") {
          socket.emit("join_room", room);
          setShowChat(true);
        }
      };

    // useEffect(() => {
    //     function handleClickOutSite(e) {
    //         if (ref.current && !ref.current.contains(e.target)) {
    //             setVisible(false)
    //         }
    //     }
    //     document.addEventListener('mousedown', handleClickOutSite);
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutSite)
    //     }
    // }, [ref])

     useEffect(() => {
      document.querySelector('.transition-3').onclick = function() {
        document.querySelector('.chat').classList.toggle('active');
      }
    },[])

    return (
        <>
            <div className={styles.container}>
                <div className={styles.gridColumn2}>
                    <div className="pageHeadWrapper">
                        <div className={styles.pageLogo}>
                            <div style={{ width: "80px" }} align="center">
                                <img src={logo} alt="page-logo" style={{ width: "70px" }} />
                            </div>

                            <div className={styles.pageNameWrapper} style={{ textAlign: 'center' }}>
                                <p className={styles.pageName}>Hoàng Ngọc Food</p>
                            </div>
                        </div>
                        <div className={styles.userAdmin}>
                            <div style={{ width: '80px' }} align="center">
                                <img src={avatar} alt="user-logo" style={{ width: "50px", borderRadius: '50%' }} />
                            </div>
                            <div className={styles.pageNameWrapper}>
                                <Link to='/canhan' className={styles.pageNameUser}>Nguyễn Văn A</Link>
                            </div>
                        </div>
                    </div>

                    <TreeView
                        aria-label="file system navigator"
                        defaultCollapseIcon={<ArrowDropdownIcon />}
                        defaultExpandIcon={<ArrowRightIcon />}
                        sx={{ flexGrow: 1, maxWidth: 400, overflowY: 'auto', textAlign: 'left', padding: '30px 20px', color: 'white' }}
                    >
                        <TreeItem nodeId='1'
                            label={<Link to='/tongquan' className={styles.pageMenuItems}>
                                <div className={styles.pageMenuItemsName}>
                                    <FontAwesomeIcon icon={faChartColumn} />
                                    <p>Tổng quan</p>
                                </div>
                            </Link>}
                        />
                        {SidebarData.map(item => (
                            <TreeItem
                                nodeId={item.id}
                                label={<div className={styles.pageMenuItems}>
                                    {item.icon}
                                    <p>{item.title}</p>
                                </div>}
                            >
                                {item.subNav.map(item => (
                                    <TreeItem
                                        nodeId={item.id}
                                        label={<Link to={item.path} className={styles.pageMenuItems}>
                                            <div onClick={topFunction} className={styles.pageMenuItemsName}>
                                                {item.icon}
                                                <p>{item.title}</p>
                                            </div>
                                        </Link>}
                                    />
                                ))}
                            </TreeItem>
                        ))}
                        <TreeItem nodeId='13'
                            label={<Link to='/baocao' className={styles.pageMenuItems}>
                                <div className={styles.pageMenuItemsName}>
                                    <FontAwesomeIcon icon={faNewspaper} />
                                    <p>Báo cáo</p>
                                </div>
                            </Link>}
                        />
                        <TreeItem nodeId='14'
                            label={<Link to='/congviec' className={styles.pageMenuItems}>
                                <div className={styles.pageMenuItemsName}>
                                    <FontAwesomeIcon icon={faHistory} />
                                    <p>Công việc</p>
                                </div>
                            </Link>}
                        />
                    </TreeView>
                </div>

                <div className={styles.gridColumn10}>
                    <Header />
                    <ContentAdmin />
                </div>
            </div>

            {/* ChatBox */}
            <div ref={ref}>
                <div className="chat transition-5" style={{...style.supportWindow}}>

                    {!showChat ? (
                    <div className="joinChatContainer">
                        <h3>Join A Chat</h3>
                        <input
                        type="text"
                        placeholder="John..."
                        onChange={(event) => {
                            setUsername(event.target.value);
                        }}
                        />
                        <input
                        type="text"
                        placeholder="Room ID..."
                        onChange={(event) => {
                            setRoom(event.target.value);
                        }}
                        />
                        <button onClick={joinRoom}>Join A Room</button>
                    </div>
                    ) : (
                    <Chat socket={socket} username={username} room={room} />
                    )}
                </div>

                <div style={{position: 'fixed', bottom: '24px', right: '24px'}}>

                    <div className="transition-3"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        style={{...style.chatWithMeButton,...{border: hovered ? '1px solid #f9f0ff' : '4px solid #7a39e0'}}}
                    >
                    </div>
            
                </div>
            </div>
        </>
    );
}

export default LayoutAdmin;