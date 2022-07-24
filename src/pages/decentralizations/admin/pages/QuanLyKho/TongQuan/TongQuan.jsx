import React from 'react';
import styles from './TongQuan.module.scss';
import PieChart from './piechart';
import $ from 'jquery';
import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import { tableCellClasses } from '@mui/material/TableCell';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { fetchDataPieChart, fetchDataPieChartTable } from '../../../../../../services/khoHangServices';

function TongQuan1() {

    const [pieChartData, setPieChartData] = useState([]);
    const [tableGood, setTablegood] = useState([]);

    useEffect(() => {
        fetchPC();
        // fetchTableGood(item.loaisp.LoaiSanPhamId)
    }, [])


    // Pie-chart data 
    const fetchPC = async () => {
        let response = await fetchDataPieChart();
        if (response && response.EC === 0) {
            setPieChartData(response.DT);
        }
    }

    // Set table appearance
    useEffect(() => {
        const $$ = document.querySelectorAll.bind(document);

        const goodName = $$(`.goodName`);
        const goodsTableDetails = $$(`.${styles.goodsTableDetails}`);

        goodName.forEach((item, index) => {
            const goodsTableDetailsIndex = goodsTableDetails[index];
            item.onclick = function () {
                goodsTableDetailsIndex.classList.toggle(`${styles.active}`);
            }
        })
    }, [])

    // Table goods data
    const fetchTableGood = async (MaLoai) => {
        let response = await fetchDataPieChartTable(MaLoai);
        if (response && response.EC === 0) {
            setTablegood(response.DT);
        }
    }


    const columns = [
        { id: 'id', label: 'Mã sản phẩm', minWidth: 170 },
        { id: 'name', label: 'Tên sản phẩm', minWidth: 100 },
        {
            id: 'count',
            label: 'Số lượng',
            minWidth: 170,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
    ];

    function createData(
        id, name, count
    ) {
        return { id, name, count };
    }

    const rows = tableGood.map(item => (
        createData(item.SanPhamId, item.SanPham.TenSanPham, item.SoLuong)
    ))

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    // Table detail data
    const StyledTableCell = styled(TableCell)(() => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#007bff',
            color: 'white',
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(() => ({
        '&:nth-of-type(odd)': {
            backgroundColor: '#f5f5f5',
        },
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    function createDataI(
        id, name, date, expiredDate, count, note
    ) {
        return { id, name, date, expiredDate, count, note };
    }

    const rowsII = [
        createDataI('F55', 'Bánh Flan 55g', '12/03/2022', '12/05/2022', 2000, 'Bánh ngon vl'),
        createDataI('F55', 'Bánh Flan 55g', '12/03/2022', '12/05/2022', 2000, 'Bánh ngon vl'),
        createDataI('F55', 'Bánh Flan 55g', '12/03/2022', '12/05/2022', 2000, 'Bánh ngon vl'),
        createDataI('F55', 'Bánh Flan 55g', '12/03/2022', '12/05/2022', 2000, 'Bánh ngon vl'),
        createDataI('F55', 'Bánh Flan 55g', '12/03/2022', '12/05/2022', 2000, 'Bánh ngon vl')
    ];



    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.wrapperTitle}>
                    <p>Tổng quan</p>
                </div>

                {pieChartData && pieChartData.length > 0 ?
                    pieChartData.map((item, index) => {
                        fetchTableGood(item.loaisp.LoaiSanPhamId);
                        return (
                            <>
                                <div className={styles.listAndChartGoodsWrapper}>
                                    <div className={styles.goodsTitle}>
                                        <span>{item.loaisp.LoaiSanPhamId} : {item.loaisp.LoaiSanPham.TenLoai}</span>
                                    </div>
                                    <div className={styles.listAndChartGoods}>
                                        <div className={styles.pieChart}>

                                            {PieChart(item.tensp, item.soluong)}

                                        </div>
                                        <div className={styles.listGoods}>
                                            <TableContainer sx={{ maxHeight: 330 }}>
                                                <Table stickyHeader aria-label="sticky table">
                                                    <TableHead>
                                                        <TableRow>
                                                            {columns.map((column) => (
                                                                <TableCell
                                                                    key={column.id}
                                                                    style={{ minWidth: column.minWidth }}
                                                                >
                                                                    <b>{column.label}</b>
                                                                </TableCell>
                                                            ))}
                                                            <TableCell></TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {rows
                                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                            .map((row) => {
                                                                return (
                                                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                                        {columns.map((column) => {
                                                                            const value = row[column.id];
                                                                            return (
                                                                                <TableCell key={column.id} >
                                                                                    {column.format && typeof value === 'number'
                                                                                        ? column.format(value)
                                                                                        : value}
                                                                                </TableCell>
                                                                            );
                                                                        })}
                                                                        <TableCell align='center'><FontAwesomeIcon icon={faEye} className='goodName' /></TableCell>
                                                                    </TableRow>
                                                                );
                                                            })}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                            <TablePagination
                                                rowsPerPageOptions={[10, 25, 100]}
                                                component="div"
                                                count={rows.length}
                                                rowsPerPage={rowsPerPage}
                                                page={page}
                                                onPageChange={handleChangePage}
                                                onRowsPerPageChange={handleChangeRowsPerPage}
                                            />
                                        </div>
                                    </div>
                                    {/* hidden table */}
                                    <div className={styles.goodsTableDetailWrapper}>
                                        <TableContainer component={Paper} className={styles.goodsTableDetails}>
                                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                                <TableHead>
                                                    <TableRow>
                                                        <StyledTableCell><b>Mã sản phẩm</b></StyledTableCell>
                                                        <StyledTableCell align="right"><b>Tên sản phẩm</b></StyledTableCell>
                                                        <StyledTableCell align="right"><b>Ngày sản xuất</b></StyledTableCell>
                                                        <StyledTableCell align="right"><b>Hạn sử dụng</b></StyledTableCell>
                                                        <StyledTableCell align="right"><b>Số lượng</b></StyledTableCell>
                                                        <StyledTableCell align="right"><b>Ghi chú</b></StyledTableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {rowsII.map((row) => (
                                                        <StyledTableRow key={row.id}>
                                                            <StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>
                                                            <StyledTableCell align="right">{row.name}</StyledTableCell>
                                                            <StyledTableCell align="right">{row.date}</StyledTableCell>
                                                            <StyledTableCell align="right">{row.expiredDate}</StyledTableCell>
                                                            <StyledTableCell align="right">{row.count}</StyledTableCell>
                                                            <StyledTableCell align="right">{row.note}</StyledTableCell>
                                                        </StyledTableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </div>
                                </div>
                            </>
                        )
                    })
                    :
                    <><span>Not found data</span></>
                }

            </div>


        </div>
    )
}

export default TongQuan1;