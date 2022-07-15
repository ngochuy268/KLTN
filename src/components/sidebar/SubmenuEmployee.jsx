import { useEffect } from "react"
import { Link } from "react-router-dom";
import styles from '../../pages/decentralizations/employee/layouts/css/Layout.module.scss';
import $ from 'jquery';

export const SubMenu = ({ item }) => {

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
          <Link to={item.path} className={styles.pageMenuItemsLink}>
            <div className={styles.pageMenuItemsName} onClick={topFunction}>
              {item.icon}
              <p>{item.title}</p>
            </div>
          </Link>
        </>
      );
}