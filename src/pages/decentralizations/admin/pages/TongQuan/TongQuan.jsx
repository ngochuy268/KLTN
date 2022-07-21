import styles from './TongQuan.module.scss';
import ApexChart from './lineChart';
import ApexChartExpand from './lineChartExpand';
import clsx from 'clsx';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchAllLoaiSP, fetchAllSP, fetchDataLoaiSP } from '../../../../../services/khoHangServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


function TongQuan() {

    const [listLoaiSP, setListLoaiSP] = useState([]);
    const [listSP, setListSP] = useState([]);
    const [dataTableLoaiSP, setDataTableLoaiSP] = useState([]);
    let titlechart = 'Biểu đồ xuất kho trong 2 tuần gần đây';

    useEffect(() => {
        fetchLoaiSP();
        fetchSP();
        tableDataLoaiSP()
    }, [])

    const fetchLoaiSP = async () => {
        let response = await fetchAllLoaiSP();
        if (response && response.EC === 0) {
            setListLoaiSP(response.DT);
        }
    }

    const tableDataLoaiSP = async () => {
        let response = await fetchDataLoaiSP();
        if (response && response.EC === 0) {
            setDataTableLoaiSP(response.DT);
        }
    }

    const fetchSP = async () => {
        let response = await fetchAllSP();
        if (response && response.EC === 0) {
            setListSP(response.DT);
        }
    }

    useEffect(() => {
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);

        $$('.goodName').forEach((item, index) => {
            item.onclick = function () {
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
                        <select className={styles.reportSelection}>
                            <option value='trong 2 tuần'>Trong 2 tuần</option>
                            <option value='trong 1 tháng'>Trong 1 tháng</option>
                        </select> 
                    </div>

                    <div className={styles.lineChartWrapper}>
                        <div className={styles.lineChartExpa}>
                            {listLoaiSP && listLoaiSP.length > 0 ?
                                <>

                                    {ApexChart(listLoaiSP, titlechart)}
                                </>
                                :
                                <><span>Not found data</span></>
                            }

                        </div>
                        <div className={styles.lineChart}>
                            {listSP && listSP.length > 0 ?
                                <>
                                    {ApexChartExpand(listSP, titlechart)}
                                </>
                                :
                                <><span>Not found data</span></>
                            }
                        </div>
                    </div>


                    {/* --------------------BE------------------- */}
                    <div className={styles.lineChartInfoWrapper}>
                        <div className={styles.lineChartInfoTablewrapper}>
                            <table className={styles.lineChartInfoTable}>
                                <thead>
                                    <tr>
                                        <th colSpan='4' style={{ fontSize: '20px', textAlign: 'center', height: '20px' }}>
                                            {titlechart}
                                        </th>
                                    </tr>
                                    <tr>
                                        <th style={{ width: '5%' }}>STT</th>
                                        <th style={{ width: '20%' }}>Mã loại</th>
                                        <th style={{ width: '50%' }}>Tên loại</th>
                                        <th style={{ width: '25%' }}>Số lượng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataTableLoaiSP && dataTableLoaiSP.length > 0 ?
                                        <>
                                            {dataTableLoaiSP.map((item, index) => {
                                                return (
                                                    <tr>
                                                        <td style={{ textAlign: 'center' }}>{index + 1}</td>
                                                        <td className='goodName'>{item.LoaiSanPhamId}</td>
                                                        <td>{item.LoaiSanPham.TenLoai}</td>
                                                        <td>{item.SoLuong}</td>
                                                    </tr>
                                                )
                                            })}
                                        </>
                                        :
                                        <><span>Not found data</span></>
                                    }
                                </tbody>

                            </table>

                            <div className={styles.lineChartInfoTableAddAndFavourite}>
                                <table className={styles.lineChartInfoTableFavourite}>
                                    <tr>
                                        <th style={{ fontSize: '20px', textAlign: 'center' }}>Dự báo sản phẩm ưa chuộng trong tương lai</th>
                                    </tr>
                                    <tr>
                                        <td>Rau câu, bánh bông lan</td>
                                    </tr>
                                </table>
                                <table className={styles.lineChartInfoTableAdd}>
                                    <tr>
                                        <th colSpan={3} style={{ fontSize: '20px', textAlign: 'center' }}>Dự báo số lượng cần bổ sung</th>
                                    </tr>
                                    <tr>
                                        <th style={{ width: '5%' }}>STT</th>
                                        <th style={{ width: '60%' }}>Tên sản phẩm</th>
                                        <th style={{ width: '35%' }}>Số lượng</th>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'center' }}>1</td>
                                        <td>Bánh Flan 35g</td>
                                        <td>500</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'center' }}>2</td>
                                        <td>Bánh Flan 55g</td>
                                        <td>1000</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'center' }}>3</td>
                                        <td>Bánh Flan 100g</td>
                                        <td>1500</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'center' }}>4</td>
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