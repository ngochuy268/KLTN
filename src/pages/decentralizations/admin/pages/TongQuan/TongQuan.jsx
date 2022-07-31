import styles from './TongQuan.module.scss';
import ApexChart from './lineChart';
import ApexChartExpand from './lineChartExpand';
import clsx from 'clsx';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchAllLoaiSP, fetchDataLoaiSP, fetchPredictSL, fetchPredictSP, fetchAllLoaiSPs, fetchLineSPData, fetchLineSPDatas } from '../../../../../services/khoHangServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Table, TableBody, TableContainer, TableHead, TablePagination, TableRow, TableCell, tableCellClasses, Paper } from '@mui/material';
import styled from '@emotion/styled';


function TongQuan() {

    const [selectTime, setSelectTime] = useState(14);
    const [flat, setFlat] = useState(0);
    const [listLoaiSP, setListLoaiSP] = useState([]);
    const [listSP, setListSP] = useState([]);
    const [dataTableLoaiSP, setDataTableLoaiSP] = useState([]);
    let titlechart = 'Biểu đồ xuất kho trong 2 tuần gần đây';

    useEffect(() => {
        fetchLoaiSP();
        tableDataLoaiSP();
        fetchPreSP();
        fetchPreSL();
    }, [selectTime, flat])

    console.log("Flat: ", flat)
    console.log("selectTime: ", selectTime)
    // if (selectTime === 1) {

    // }


    const fetchLoaiSP = async () => {
        let response;
        if (+selectTime.days === 14) {
            response = await fetchAllLoaiSP(selectTime);
        } else {
            response = await fetchAllLoaiSPs(selectTime);
        }
        if (response && response.EC === 0) {
            setListLoaiSP(response.DT);
        }
    }

    const tableDataLoaiSP = async () => {
        let response = await fetchDataLoaiSP(selectTime);
        if (response && response.EC === 0) {
            setDataTableLoaiSP(response.DT);
        }
    }

    const lineChartSP = async (MaLoai, days) => {
        console.log(">>> check")
        let response;
        if (days == 14) {
            response = await fetchLineSPData(MaLoai, days);
        } else {
            response = await fetchLineSPDatas(MaLoai, days);
        }
        if (response && response.EC === 0) {
            setListSP(response.DT);
        }

    }

    // const fetchSP = async () => {
    //     let response = await fetchAllSP();
    //     if (response && response.EC === 0) {
    //         setListSP(response.DT);
    //     }
    // }

    // Predict SL Table get data
    const [showPredictSL, setShowPredictSL] = useState([]);

    const fetchPreSL = async () => {
        let response = await fetchPredictSL();
        if (response && response.EC === 0) {
            setShowPredictSL(response.DT);
        }
    }

    const columnsI = [
        { id: 'countNumber', label: 'STT', minWidth: 100,height: 40 },
        {
            id: 'goodName',
            label: 'Tên sản phẩm',
            minWidth: 100,
            height: 40,
            align: 'left'
        },
        {
            id: 'count',
            label: 'Số lượng',
            minWidth: 80,
            height: 40,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        }
    ];

    function createDataI(
        countNumber, goodName, count
    ) {
        return { countNumber, goodName, count };
    }

    const rowsI = showPredictSL.map((item, index) => (
        createDataI(index + 1, item.SanPham.TenSanPham, item.SoLuong)
    ))
    //  --------------------------------------
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    // Predict SP table get data
    const [showPredictSP, setShowPredictSP] = useState([]);

    const fetchPreSP = async () => {
        let response = await fetchPredictSP();
        if (response && response.EC === 0) {
            setShowPredictSP(response.DT);
        }
    }


    // Toggle and table style

    const StyledTableCell = styled(TableCell)(() => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#007bff',
            color: 'white',
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ }) => ({
        '&:nth-of-type(even)': {
            backgroundColor: '#f5f5f5',
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));


    // useEffect(() => {
    //     const $ = document.querySelector.bind(document);
    //     const $$ = document.querySelectorAll.bind(document);

    //     $$(`.${styles.goodName}`).forEach((item, index) => {
    //         item.onclick = function () {
    //             $(`.${styles.lineChart}`).classList.toggle(`${styles.active}`)
    //         }
    //     })
    // }, [])

    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.wrapperTitle}>
                        <p>Tổng quan</p>
                        <select className={styles.reportSelection} onChange={e => setSelectTime(e.target.value)} >
                            <option value='14'>Trong 2 tuần</option>
                            <option value='35'>Trong 1 tháng</option>
                        </select>
                    </div>

                    <div className={styles.lineChartWrapper}>
                        {flat === 0 ?
                            <><div className={styles.lineChartExpa}>
                                {/* {alert("aaaaaaaaaaaa")} */}
                                {listLoaiSP && listLoaiSP.length > 0 ?
                                    <>
                                        {ApexChart(listLoaiSP, titlechart)}
                                    </>
                                    :
                                    <><span>Not found data</span></>
                                }

                            </div>
                            </>
                            :
                            <>
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
                            </>
                        }


                    </div>


                    {/* --------------------BE------------------- */}
                    <div className={styles.lineChartInfoWrapper}>
                        <div className={styles.lineChartInfoTablewrapper}>
                            <TableContainer component={Paper} sx={{ displayPrint: 'block', height: 'fit-content' }} >
                                <Table sx={{ minWidth: 400 }} aria-label="simple table" >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell colSpan={5} style={{ textAlign: 'center', fontSize: '20px', border: '1px solid #4bb954' }}><b>{titlechart}</b></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <StyledTableCell width='5%'><b>STT</b></StyledTableCell>
                                            <StyledTableCell width='20%'><b>Mã loại</b></StyledTableCell>
                                            <StyledTableCell width='40%'><b>Tên loại</b></StyledTableCell>
                                            <StyledTableCell width='25%'><b>Số lượng</b></StyledTableCell>
                                            <StyledTableCell width='10%'></StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {dataTableLoaiSP && dataTableLoaiSP.length > 0 ?
                                            <>
                                                {dataTableLoaiSP.map((item, index) => (
                                                    <StyledTableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                        <StyledTableCell component='th' scope='row' align='center'>
                                                            {index + 1}
                                                        </StyledTableCell>
                                                        <StyledTableCell >{item.LoaiSanPhamId}</StyledTableCell>
                                                        <StyledTableCell>{item.LoaiSanPham.TenLoai}</StyledTableCell>
                                                        <StyledTableCell>{item.SoLuong}</StyledTableCell>
                                                        <StyledTableCell align='center'><FontAwesomeIcon icon={faEye} className={styles.goodName} onClick={() => { lineChartSP(item.LoaiSanPhamId, selectTime), setFlat(1) }} /></StyledTableCell>
                                                    </StyledTableRow>
                                                ))}
                                            </>
                                            :
                                            <><span>Not Found data!</span></>
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <div className={styles.lineChartInfoTableAddAndFavourite}>
                                <TableContainer component={Paper} sx={{ displayPrint: 'block', height: 'fit-content', marginBottom: '20px' }} >
                                    <Table sx={{ minWidth: 400 }} aria-label="simple table" >
                                        <TableHead>
                                            <TableRow>
                                                <TableCell style={{ textAlign: 'center', fontSize: '20px', border: '1px solid #4bb954' }}><b>Dự báo sản phẩm ưa chuộng trong tương lai</b></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <StyledTableRow>
                                                <StyledTableCell style={{ color: '#007bff' }}>
                                                    {showPredictSP && showPredictSP.length > 0 ?
                                                        showPredictSP.map(item => item.SanPham.TenSanPham).join(' , ').toLowerCase()
                                                        : ''}
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <TableContainer sx={{ maxHeight: 300, border: '1px solid #ced4da' }}>
                                    <Table stickyHeader aria-label="sticky table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell colSpan={3} style={{ textAlign: 'center', fontSize: '20px', border: '1px solid #4bb954' }}><b>Dự báo mặt hàng cần nhập</b></TableCell>
                                            </TableRow>
                                            <TableRow style={{height: 10}}>
                                                {columnsI.map((column) => (
                                                    <StyledTableCell
                                                        key={column.id}
                                                        align={column.align}
                                                        style={{ minWidth: column.minWidth }}
                                                    >
                                                        <b>{column.label}</b>
                                                    </StyledTableCell>
                                                ))}
                                            </TableRow>

                                        </TableHead>
                                        <TableBody>
                                            {rowsI
                                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                .map((row) => {
                                                    return (
                                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code} className='goodName'>
                                                            {columnsI.map((column) => {
                                                                const value = row[column.id];
                                                                return (
                                                                    <TableCell key={column.id} align={column.align} >
                                                                        {column.format && typeof value === 'number'
                                                                            ? column.format(value)
                                                                            : value}
                                                                    </TableCell>
                                                                );
                                                            })}
                                                        </TableRow>
                                                    );
                                                })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <TablePagination
                                    rowsPerPageOptions={[10, 25, 100]}
                                    component="div"
                                    count={rowsI.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />
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