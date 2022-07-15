import styles from './TongQuan.module.scss';
import ApexChart from './lineChart';
import ApexChartExpand from './lineChartExpand';
import clsx from 'clsx';
import { useEffect } from 'react';
import { useState } from 'react';

function TongQuan() {

    useEffect(() => {
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);

        $$('.goodName').forEach((item, index) => {
            item.onclick = function() {
                $(`.${styles.lineChart}`).classList.toggle(`${styles.active}`)
            }
        })
    })


    return (
        <>
         <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.wrapperTitle}>
                        <p>Tổng quan</p> 
                        
                    </div>

                    <div className={styles.lineChartWrapper}>
                        <div className={styles.lineChartExpa}>
                            <ApexChart />
                        </div>
                        <div className={styles.lineChart}>
                            <ApexChartExpand />
                        </div>
                    </div>  


                    {/* --------------------BE------------------- */}
                    <div className={styles.lineChartInfoWrapper}>
                        <div className={styles.lineChartInfoTablewrapper}>
                            <table className={styles.lineChartInfoTable}>
                                <tr>
                                    <th colSpan='3' style={{fontSize: '20px', textAlign: 'center',height: '20px'}}>
                                        Số lượng hàng trong 8 tuần gần đây
                                    </th>
                                </tr>
                                <tr>
                                    <th style={{width: '5%'}}>STT</th>
                                    <th style={{width: '60%'}}>Tên sản phẩm</th>
                                    <th style={{width: '35%'}}>Số lượng</th>
                                </tr>
                                <tr>
                                    <td style={{textAlign: 'center'}}>1</td>
                                    <td className='goodName'>Rau câu</td>
                                    <td>64.000</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign: 'center'}}>2</td>
                                    <td>Bánh bông lan</td>
                                    <td>58.000</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign: 'center'}}>3</td>
                                    <td>Bánh Flan</td>
                                    <td>50.000</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign: 'center'}}>4</td>
                                    <td>Bánh mì</td>
                                    <td>38.000</td>
                                </tr>
                            </table>
                            <div className={styles.lineChartInfoTableAddAndFavourite}>
                                <table className={styles.lineChartInfoTableFavourite}>
                                    <tr>
                                        <th style={{fontSize: '20px',textAlign: 'center'}}>Dự báo sản phẩm ưa chuộng trong tương lai</th>
                                    </tr>
                                    <tr>
                                        <td>Rau câu, bánh bông lan</td>
                                    </tr>
                                </table>
                                <table className={styles.lineChartInfoTableAdd}>
                                    <tr>
                                        <th colSpan={3} style={{fontSize: '20px',textAlign: 'center'}}>Dự báo số lượng cần bổ sung</th>
                                    </tr>
                                    <tr>
                                        <th style={{width: '5%'}}>STT</th>
                                        <th style={{width: '60%'}}>Tên sản phẩm</th>
                                        <th style={{width: '35%'}}>Số lượng</th>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign: 'center'}}>1</td>
                                        <td>Bánh Flan 35g</td>
                                        <td>500</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign: 'center'}}>2</td>
                                        <td>Bánh Flan 55g</td>
                                        <td>1000</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign: 'center'}}>3</td>
                                        <td>Bánh Flan 100g</td>
                                        <td>1500</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign: 'center'}}>4</td>
                                        <td>Rau câu 100g</td>
                                        <td>500</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>  

                    {/* --------------------BE------------------- */}
                </div>         
            </div>
        </>
    );
}

export default TongQuan