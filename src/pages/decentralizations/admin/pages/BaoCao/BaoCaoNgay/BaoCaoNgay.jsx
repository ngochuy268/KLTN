import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
import styles from './BaoCaoNgay.module.scss';
function BaoCaoNgay() {
    
     // Get current date
    var showDate = new Date();
    var displayCurrentDate = `${showDate.getDate()}/${showDate.getMonth() + 1}/${showDate.getFullYear()}`;

    // Data of table I
    function createDataI(id,name,stock,note) {
        return { id, name, stock, note };
    }

    const rowsI = [
        createDataI('F55', 159, 6.0, 24),
        createDataI('RC100', 237, 9.0, 37),
        createDataI('BM', 262, 16.0, 24),
        createDataI('F35', 305, 3.7, 67),
        createDataI('F100', 356, 16.0, 49),
    ];

    // Data of table II
    function createDataII(id,name,importNumber,exportNumber, spend, income) {
        return { id, name, importNumber, exportNumber, spend, income };
    }

    const rowsII = [
        createDataII('F55', 159, 6.0, 24, 200000, 300000),
        createDataII('RC100', 237, 9.0, 37, 200000, 300000),
        createDataII('BM', 262, 16.0, 24, 200000, 300000),
        createDataII('F35', 305, 3.7, 67, 200000, 300000),
        createDataII('F100', 356, 16.0, 49, 200000, 300000),
    ];

    return(
        <>
            <div className={styles.dailyReportWrapper}>
                <h1 className={styles.dailyReportTitle}>Báo cáo nhập xuất tồn</h1> 
                <div className={styles.dailyReportDate}>
                    <p>Ngày: <span>{displayCurrentDate}</span></p>
                </div>
                <div className={styles.dailyReportTableWrapper}>
                    <h2>I. Tồn kho</h2>
                    <div className={styles.dailyReportTable}>
                        <TableContainer component={Paper} >
                            <Table sx={{ minWidth: 650}} aria-label="simple table" >
                                <TableHead>
                                    <TableRow>
                                        <TableCell width= '25%'><b>Mã sản phẩm</b></TableCell>
                                        <TableCell width= '25%'><b>Tên sản phẩm</b></TableCell>
                                        <TableCell width= '25%'><b>Tồn kho</b></TableCell>
                                        <TableCell width= '25%'><b>Ghi chú</b></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rowsI.map((row) => (
                                        <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.id}
                                            </TableCell>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell>{row.stock}</TableCell>
                                            <TableCell>{row.note}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
                <div className={styles.dailyReportTableWrapper}>
                    <h2>II. Nhập xuất kho</h2>
                    <div className={styles.dailyReportTable}>
                        <TableContainer component={Paper} >
                            <Table sx={{ minWidth: 650}} aria-label="simple table" >
                                <TableHead>
                                    <TableRow>
                                        <TableCell width= '16.6667%'><b>Mã sản phẩm</b></TableCell>
                                        <TableCell width= '16.6667%'><b>Tên sản phẩm</b></TableCell>
                                        <TableCell width= '16.6667%'><b>Số lượng nhập</b></TableCell>
                                        <TableCell width= '16.6667%'><b>Số lượng xuất</b></TableCell>
                                        <TableCell width= '16.6667%'><b>Chi</b></TableCell>
                                        <TableCell width= '25%'><b>Thu</b></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rowsII.map((row) => (
                                        <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.id}
                                            </TableCell>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell>{row.importNumber}</TableCell>
                                            <TableCell>{row.exportNumber}</TableCell>
                                            <TableCell>{row.spend}</TableCell>
                                            <TableCell>{row.income}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BaoCaoNgay;