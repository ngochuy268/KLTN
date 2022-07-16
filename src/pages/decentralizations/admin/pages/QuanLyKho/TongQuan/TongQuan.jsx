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

        goodName.forEach((item, index) => {
            const goodsTableDetailsIndex = goodsTableDetails[index];
            console.log((`.${styles.goodsTableDetails}.${styles.active}`))
            item.onclick = function () {
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
                        <div className={`huy ${styles.listGoods}`}>
                            <table className={`table-striped table-fixed table-condensed ${styles.goodsTable}`} style={{ width: '100%' }}>
                                <thead>
                                    <tr>
                                        <th style={{ width: '25%' }}>Mã sản phẩm</th>
                                        <th style={{ width: '50%' }}>Tên sản phẩm</th>
                                        <th style={{ width: '25%' }}>Số lượng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ textAlign: 'center' }}> 55g</td>
                                        <td classNameBánh Flan='goodName'>Bánh Flan 55g</td>
                                        <td style={{ textAlign: 'right', paddingRight: '30px' }}>1000</td>
                                    </tr>
                                    <tr>
                                        <td >Bánh Flan 55g</td>
                                        <td className='goodName'>Bánh Flan 35g</td>
                                        <td style={{ textAlign: 'right', paddingRight: '30px' }}>2500</td>
                                    </tr>
                                    <tr>
                                        <td>Bánh Flan 55g</td>
                                        <td className='goodName'>Bánh Flan 75g</td>
                                        <td style={{ textAlign: 'right', paddingRight: '30px' }}>500</td>
                                    </tr>
                                    <tr>
                                        <td>Bánh Flan 55g</td>
                                        <td className='goodName'>Bánh Flan 100g</td>
                                        <td style={{ textAlign: 'right', paddingRight: '30px' }}>250</td>
                                    </tr>
                                    <tr>
                                        <td>Bánh Flan 55g</td>
                                        <td className='goodName'>Bánh Flan 100g</td>
                                        <td style={{ textAlign: 'right', paddingRight: '30px' }}>250</td>
                                    </tr>
                                    <tr>
                                        <td>Bánh Flan 55g</td>
                                        <td className='goodName'>Bánh Flan 100g</td>
                                        <td style={{ textAlign: 'right', paddingRight: '30px' }}>250</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>
                    <div className={styles.goodsTableDetailWrapper}>
                        <table className={styles.goodsTableDetails} style={{ width: '100%' }}>
                            <tr>
                                <th style={{ width: '11%' }}>Mã sản phẩm</th>
                                <th style={{ width: '24%' }}>Tên sản phẩm</th>
                                <th style={{ width: '15%' }}>Ngày sản xuất</th>
                                <th style={{ width: '15%' }}>Hạn sử dụng</th>
                                <th style={{ width: '10%' }}>Số lượng</th>
                                <th style={{ width: '25%' }} >Ghi chú</th>
                            </tr>
                            <tr>
                                <td style={{ textAlign: 'center' }}>F55</td>
                                <td>Bánh Flan 55g</td>
                                <td>23/4/2021</td>
                                <td>23/6/2021</td>
                                <td style={{ textAlign: 'right' }}>200</td>
                                <td >Bánh dở vl</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: 'center' }}>F55</td>
                                <td>Bánh Flan 55g</td>
                                <td>1/3/2021</td>
                                <td>1/5/2021</td>
                                <td style={{ textAlign: 'right' }}>550</td>
                                <td >Bánh không ngon, dẹp đi</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: 'center' }}>F55</td>
                                <td>Bánh Flan 55g</td>
                                <td>22/6/2021</td>
                                <td>22/8/2021</td>
                                <td style={{ textAlign: 'right' }}>250</td>
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