import React from 'react';
import styles from './TongQuan.module.scss';
import PieChart from './piechart';
import $ from 'jquery';
import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import { tableCellClasses } from '@mui/material/TableCell';


function TongQuan1() {

    // Set table appearance
    useEffect(() => {
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);

        const goodName = $$(`.goodName`);
        const goodsTableDetails = $$(`.${styles.goodsTableDetails}`);

        goodName.forEach((item, index) => {
            const goodsTableDetailsIndex = goodsTableDetails[index];
            item.onclick = function () {
                goodsTableDetailsIndex.classList.toggle(`${styles.active}`);
            }
        })
    })

    // Table goods data
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
    const rows = [
        createData('India', 'IN', 1324171354),
        createData('China', 'CN', 1403500365),
        createData('Italy', 'IT', 60483973),
        createData('United States', 'US', 327167434),
        createData('Canada', 'CA', 37602103),
        createData('Australia', 'AU', 25475400),
        createData('Germany', 'DE', 83019200),
        createData('Ireland', 'IE', 4857000),
        createData('Mexico', 'MX', 126577691),
        createData('Japan', 'JP', 126317000),
        createData('France', 'FR', 67022000),
        createData('United Kingdom', 'GB', 67545757),
        createData('Russia', 'RU', 146793744),
        createData('Nigeria', 'NG', 200962417),
        createData('Brazil', 'BR', 210147125),
        createData('Brazil', 'BR', 210147125),
    ];

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

                <div className={styles.listAndChartGoodsWrapper}>
                    <div className={styles.goodsTitle}>
                        <span>Bánh flan: 4250</span>
                    </div>
                    <div className={styles.listAndChartGoods}>
                        <div className={styles.pieChart}>
                            <PieChart />
                        </div>
                        <div className={styles.listGoods}>
                            <TableContainer sx={{ maxHeight: 330 }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {columns.map((column) => (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    style={{ minWidth: column.minWidth }}
                                                >
                                                    <b>{column.label}</b>
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((row) => {
                                                return (
                                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code} className='goodName'>
                                                        {columns.map((column) => {
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
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </div>
                    </div>
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
            </div>


        </div>
    )
}

export default TongQuan1;