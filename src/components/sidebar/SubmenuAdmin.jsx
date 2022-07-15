 import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import styles from '../../pages/decentralizations/admin/layouts/css/Layout.module.scss';
import $ from 'jquery';

export const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);    


    // Set styles for sidebar
    useEffect(() => {
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);

        $$(`.${styles.pageMenuItemsLink}`).forEach(item => {
          item.onclick = function() {
            $(`.${styles.pageMenuItemsLink}.${styles.active}`).classList.remove(`${styles.active}`);
            this.classList.add(`${styles.active}`);   
          }
        }) 
        $$(`.${styles.pageSubMenuItems}`).forEach(item => {
          // item.onclick = function() {
          //   console.log($(`.${styles.pageSubMenuItemsLink}`))
          //   // $(`.${styles.pageMenuItemsLink}.${styles.active}`).classList.remove(`${styles.active}`);
          //   // $(`.${styles.pageSubMenuItemsLink}.${styles.active}`).classList.remove(`${styles.active}`);
          //   // this.classList.add(`${styles.active}`);          
          // }
          item.addEventListener('click', function(){
            console.log($(`.${styles.pageSubMenuItemsLink}`));
          })
        }) 
    },[])

    useEffect(() => {
      
    })


    // Scroll top function
    const topFunction = () => {
      var body = $("html, body");
      body.stop().animate({scrollTop:0}, 300, 'swing')
    }

    
    return (
        <>
          <div onClick={item.subNav && showSubnav} className={styles.pageMenuItemsLink}>
            <div className={styles.pageMenuItemsName}>
              {item.icon}
              <p>{item.title}</p>
            </div>
            <div className={styles.pageSubMenuItemsIcon}>
              {item.subNav && subnav
                ? item.iconOpened
                : item.subNav
                ? item.iconClosed
                : null}
            </div>
          </div>
          
          {subnav &&
          item.subNav.map((item, index) => {
            return (     
                <Link to={item.path} key={index} className={styles.pageSubMenuItemsLink}>
                  <div className={styles.pageSubMenuItems} onClick={topFunction}>
                    {item.icon}
                    <p>{item.title}</p>
                  </div>
                </Link>
            );
          })}
        </>
      );
}

