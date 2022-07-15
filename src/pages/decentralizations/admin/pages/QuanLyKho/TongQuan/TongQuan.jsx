import React from 'react';
import styles from './TongQuan.module.scss';
import PieChart from './piechart';
import $ from 'jquery';
import { useEffect } from 'react';

function TongQuan1() {

    useEffect(() => {
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);

       const goodName = $$(`.goodName`);
       const goodsTableDetails = $$(`.${styles.goodsTableDetails}`);

       goodName.forEach((item,index) => {
            const goodsTableDetailsIndex = goodsTableDetails[index];
            console.log((`.${styles.goodsTableDetails}.${styles.active}`))
            item.onclick = function() {
                // if ((`.${styles.goodsTableDetails}.${styles.active}`) !== undefined) {
                //     (`.${styles.goodsTableDetails}.${styles.active}`).classList.remove(`${styles.active}`);
                //     goodsTableDetailsIndex.classList.add(`${styles.active}`);
                // }
                goodsTableDetailsIndex.classList.toggle(`${styles.active}`);
            }
       })
    })

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.wrapperTitle}>
                    <p>Tổng quan</p> 
                </div>

                {/* Chỗ này cần làm BE để load dữ liệu từ DB */}
                <div className={styles.listAndChartGoodsWrapper}>
                    <div className={styles.goodsTitle}>
                        <span>Bánh flan: 4250</span>
                    </div>
                    <div className={styles.listAndChartGoods}>
                        <div className={styles.pieChart}>
                            <PieChart />
                        </div>
                        <div className={styles.listGoods}>
                            <table className={styles.goodsTable} style={{width: '100%'}}>
                                <tr>
                                    <th>Tên sản phẩm</th>
                                    <th>Số lượng</th>
                                </tr>
                                <tr>
                                    <td className='goodName'>Bánh Flan 55g</td>
                                    <td>1000</td>
                                </tr>
                                <tr>
                                    <td className='goodName'>Bánh Flan 35g</td>
                                    <td>2500</td>
                                </tr>
                                <tr>
                                    <td className='goodName'>Bánh Flan 75g</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <td className='goodName'>Bánh Flan 100g</td>
                                    <td>250</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className={styles.goodsTableDetailWrapper}>
                        <table className={styles.goodsTableDetails} style={{width: '100%'}}>
                            <tr>
                                <th>Mã sản phẩm</th>
                                <th>Tên sản phẩm</th>
                                <th>Ngày sản xuất</th>
                                <th>Hạn sử dụng</th>
                                <th>Số lượng</th>
                                <th >Ghi chú</th>
                            </tr>
                            <tr>
                                <td rowSpan={Object.keys($(`.${styles.goodsTableDetails}`).children()).length - 2}>F55</td>
                                <td>Bánh Flan 55g</td>
                                <td>23/4/2021</td>
                                <td>23/6/2021</td>
                                <td>200</td>
                                <td >Bánh dở vl</td>    
                            </tr>
                            <tr>
                                <td>Bánh Flan 55g</td>
                                <td>1/3/2021</td>
                                <td>1/5/2021</td>
                                <td>550</td>
                                <td >Bánh không ngon, dẹp đi</td>
                            </tr>
                            <tr>
                                <td>Bánh Flan 55g</td>
                                <td>22/6/2021</td>
                                <td>22/8/2021</td>
                                <td>250</td>
                                <td >Bánh như cc</td>
                            </tr>
                        </table>
                        <table className={styles.goodsTableDetails} style={{width: '100%'}}>
                            <tr>
                                <th>Mã sản phẩm</th>
                                <th>Tên sản phẩm</th>
                                <th>Ngày sản xuất</th>
                                <th>Hạn sử dụng</th>
                                <th>Số lượng</th>
                                <th >Ghi chú</th>
                            </tr>
                            <tr>
                                <td rowSpan={Object.keys($(`.${styles.goodsTableDetails}`).children()).length - 2}>F55</td>
                                <td>Bánh Flan 35g</td>
                                <td>24/4/2021</td>
                                <td>25/6/2021</td>
                                <td>230</td>
                                <td >Bánh dở vl</td>
                            </tr>
                            <tr>
                                
                                <td>Bánh Flan 35g</td>
                                <td>1/4/2021</td>
                                <td>1/6/2021</td>
                                <td>350</td>
                                <td >Bánh không ngon, dẹp đi</td>
                            </tr>
                            <tr>
                                
                                <td>Bánh Flan 35g</td>
                                <td>22/5/2021</td>
                                <td>22/7/2021</td>
                                <td>250</td>
                                <td >Bánh như cc</td>
                            </tr>
                            <tr> 
                                <td>Bánh Flan 35g</td>
                                <td>22/1/2021</td>
                                <td>22/3/2021</td>
                                <td>250</td>
                                <td >Bánh như cc</td>
                            </tr>
                        </table>
                        <table className={styles.goodsTableDetails} style={{width: '100%'}}>
                            <tr>
                                <th>Mã sản phẩm</th>
                                <th>Tên sản phẩm</th>
                                <th>Ngày sản xuất</th>
                                <th>Hạn sử dụng</th>
                                <th>Số lượng</th>
                                <th >Ghi chú</th>
                            </tr>
                            <tr>
                                <td rowSpan={Object.keys($(`.${styles.goodsTableDetails}`).children()).length - 2}>F55</td>
                                <td>Bánh Flan 75g</td>
                                <td>24/4/2021</td>
                                <td>25/6/2021</td>
                                <td>230</td>
                                <td >Bánh dở vl</td>
                            </tr>
                            <tr>
                                
                                <td>Bánh Flan 75g</td>
                                <td>1/4/2021</td>
                                <td>1/6/2021</td>
                                <td>750</td>
                                <td >Bánh không ngon, dẹp đi</td>
                            </tr>
                            <tr>
                                
                                <td>Bánh Flan 75g</td>
                                <td>22/5/2021</td>
                                <td>22/7/2021</td>
                                <td>250</td>
                                <td >Bánh như cc</td>
                            </tr>
                            <tr> 
                                <td>Bánh Flan 75g</td>
                                <td>22/1/2021</td>
                                <td>22/3/2021</td>
                                <td>250</td>
                                <td >Bánh như cc</td>
                            </tr>
                        </table>
                        <table className={styles.goodsTableDetails} style={{width: '100%'}}>
                            <tr>
                                <th>Mã sản phẩm</th>
                                <th>Tên sản phẩm</th>
                                <th>Ngày sản xuất</th>
                                <th>Hạn sử dụng</th>
                                <th>Số lượng</th>
                                <th >Ghi chú</th>
                            </tr>
                            <tr>
                                <td rowSpan={Object.keys($(`.${styles.goodsTableDetails}`).children()).length - 2}>F55</td>
                                <td>Bánh Flan 100g</td>
                                <td>24/4/2021</td>
                                <td>25/6/2021</td>
                                <td>230</td>
                                <td >Bánh dở vl</td>
                            </tr>
                            <tr>
                                
                                <td>Bánh Flan 100g</td>
                                <td>1/4/2021</td>
                                <td>1/6/2021</td>
                                <td>1000</td>
                                <td >Bánh không ngon, dẹp đi</td>
                            </tr>
                            <tr>
                                
                                <td>Bánh Flan 100g</td>
                                <td>22/5/2021</td>
                                <td>22/7/2021</td>
                                <td>250</td>
                                <td >Bánh như cc</td>
                            </tr>
                            <tr> 
                                <td>Bánh Flan 100g</td>
                                <td>22/1/2021</td>
                                <td>22/3/2021</td>
                                <td>250</td>
                                <td >Bánh như cc</td>
                            </tr>
                        </table>
                    </div>
                </div>
                {/* ------------------------------------------ */}


            </div>

         
        </div>
    )
}

export default TongQuan1;