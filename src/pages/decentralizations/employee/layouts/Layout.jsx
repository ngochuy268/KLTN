import styles from './css/Layout.module.scss';
import avatar from '../../../../assets/layoutImg/avatar.png';
import { Link } from 'react-router-dom';
import { SidebarDataEmployee } from '../../../../components/sidebar/SidebarData';
import Header from '../../../../components/header/Header';
import $ from 'jquery';

import { TreeView } from '@mui/lab';
import ArrowDropdownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import TreeItem from '@mui/lab/TreeItem';
import { useState, useEffect } from 'react';


import { style } from "../../../../components/chatbox/client/styles.jsx";
import '../../../../components/chatbox/client/index.scss';
import io from "socket.io-client";
import Chat from '../../../../components/chatbox/client/chatwindow/chat';
import ContentEmployee from '../../../../routes/UserRoute';


function LayoutAdmin() {

    // Scroll top function
    const topFunction = () => {
        var body = $("html, body");
        body.stop().animate({ scrollTop: 0 }, 300, 'swing')
    }

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

    useEffect(() => {
        document.querySelector('.transition-3').onclick = function () {
            document.querySelector('.chat').classList.toggle('active');
        }
    }, [])

    return (
        <>
            <div className={styles.container}>
                <div className={styles.gridColumn2}>
                    <div className="pageHeadWrapper">
                        <div className={styles.userAdmin}>
                            <div style={{ width: '80px' }} align="center">
                                <img src={avatar} alt="user-logo" style={{ width: "50px", borderRadius: '50%' }} />
                            </div>
                            <div className={styles.pageNameWrapper}>
                                <Link to='/canhan' className={styles.pageNameUser}>Nguyễn Văn A</Link>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <TreeView
                        aria-label="file system navigator"
                        defaultCollapseIcon={<ArrowDropdownIcon />}
                        defaultExpandIcon={<ArrowRightIcon />}
                        className = {styles.treeViewComponent}
                        sx={{ flexGrow: 1, maxWidth: 400, overflowY: 'auto', textAlign: 'left', padding: '30px 20px', color: 'white' }}
                    >
                        {SidebarDataEmployee.map(item => (
                            <TreeItem nodeId={item.id}
                                label={<Link to={item.path} className={styles.pageMenuItems}>
                                        <div className={styles.pageMenuItemsName}>
                                        {item.icon} 
                                    <p>{item.title}</p>
                                </div>
                                    </Link>}
                            />
                        ))}
                    </TreeView>
                </div>

                <div className={styles.gridColumn10}>
                    <Header />
                    <ContentEmployee />
                </div>
            </div>

            {/* ChatBox */}
            <div>
                <div className="chat transition-5" style={{ ...style.supportWindow, zIndex: 200 }}>

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

                <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 200 }}>

                    <div className="transition-3"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        style={{ ...style.chatWithMeButton, ...{ border: hovered ? '1px solid #f9f0ff' : '4px solid #7a39e0' } }}
                    >
                    </div>

                </div>
            </div>
        </>
    );
}

export default LayoutAdmin;