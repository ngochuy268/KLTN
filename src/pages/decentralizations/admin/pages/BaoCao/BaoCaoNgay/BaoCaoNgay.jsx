import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useRef, useState } from "react";
import styles from './BaoCaoNgay.module.scss';
import { useReactToPrint } from 'react-to-print';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function BaoCaoNgay() {

    // Print
    let componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Báo cáo ngày',
        copyStyles:  false
    })
    
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

     // Data of table III
    function createDataIII(id, name, count) {
        return { id, name, count };
    }

    const rowsIII = [
        createDataIII('F55', 159, 6.0, 24, 200000, 300000),
        createDataIII('RC100', 237, 9.0, 37, 200000, 300000),
        createDataIII('BM', 262, 16.0, 24, 200000, 300000),
        createDataIII('F35', 305, 3.7, 67, 200000, 300000),
        createDataIII('F100', 356, 16.0, 49, 200000, 300000),
    ];

    return(
        <div>
            <div ref={componentRef}  className={styles.dailyReportWrapper} > 
                <div className={styles.dailyReportTitleWrapper}>
                    <h1 className={styles.dailyReportTitle}>Báo cáo nhập xuất tồn</h1> 
                </div>
                <div className={styles.dailyReportDate}>
                    <p>Ngày: <b><span>{displayCurrentDate}</span></b></p>
                </div>
              <div className={styles.dailyReportTableWrapper}>
                    <h2>I. Tồn kho</h2>
                    <div className={styles.dailyReportTable}>
                        <TableContainer component={Paper} sx={{displayPrint: 'block'}} >
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
                        <TableContainer component={Paper} sx={{displayPrint: 'block'}}>
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
                <div className={styles.dailyReportTableWrapper}>
                    <h2>III. Đề nghị nhập hàng</h2>
                    <div className={styles.dailyReportTable}>
                        <TableContainer component={Paper} sx={{displayPrint: 'block'}}>
                            <Table sx={{ minWidth: 650}} aria-label="simple table" >
                                <TableHead>
                                    <TableRow>
                                        <TableCell width= '33.3333%'><b>Mã sản phẩm</b></TableCell>
                                        <TableCell width= '33.3333%'><b>Tên sản phẩm</b></TableCell>
                                        <TableCell width= '33.3333%'><b>Số lượng</b></TableCell>
                                       
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rowsIII.map((row) => (
                                        <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.id}
                                            </TableCell>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell>{row.count}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
                <div className={styles.moreWrapper}>
                    <h2>IV. Bổ sung</h2>
                    <p>.........Bổ sung đánh giá của quản lý (nếu có).............

                     </p>
                     <CKEditor
                            editor={ ClassicEditor }
                            data=""
                            onReady={ editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                            } }
                            onBlur={ ( event, editor ) => {
                                console.log( 'Blur.', editor );
                            } }
                            onFocus={ ( event, editor ) => {
                                console.log( 'Focus.', editor );
                            } }
                        />
                </div>
                <div className={styles.signatureWrapper}>
                    <div className={styles.signature}>
                        <p>Quản lý kho</p>
                        <p>(ký và ghi rõ họ tên)</p>
                    </div>
                </div>
            </div>
            <div className={styles.printButtonWrapper}>
                    <button className={styles.printButton} onClick={handlePrint}>In báo cáo</button>
            </div>
        </div>
    );
}

export default BaoCaoNgay;