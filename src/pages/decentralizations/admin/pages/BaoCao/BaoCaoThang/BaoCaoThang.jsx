import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import styles from './BaoCaoThang.module.scss';
import { useReactToPrint } from 'react-to-print';
import ApexChart from "../../TongQuan/lineChart";
import ApexChartExpand from "../../TongQuan/lineChartExpand";
import { fetchAllLoaiSPs, fetchAllLoaiSPS } from '../../../../../../services/khoHangServices';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function BaoCaoThang() {

    const [listLoaiSP, setListLoaiSP] = useState([]);
    const [listSP, setListSP] = useState([]);
    const title = 'Biểu đồ xuất kho trong 1 tháng';

    useEffect(() => {
        fetchLoaiSP();
        fetchSP();
        console.log('......................................................')
    }, [])

    const fetchLoaiSP = async () =>  {
        let response = await fetchAllLoaiSPS();
        if (response && response.EC === 0) {
            setListLoaiSP(response.DT);
        }
    }


    const fetchSP = async () => {
        let response = await fetchAllLoaiSPs();
        if (response && response.EC === 0) {
            setListSP(response.DT);
        }
    }

    // Print
    let componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Báo cáo ngày',
    })

    // Get date
    var showDate = new Date();
    var firstDateOfMonth = `${showDate.getDate() - (showDate.getDate() - 1)}/${showDate.getMonth() + 1}/${showDate.getFullYear()}`;
    var displayCurrentDate = `${showDate.getDate()}/${showDate.getMonth() + 1}/${showDate.getFullYear()}`;

    // Data of table I
    function createDataI(id,name, exportCount, importCount,stock) {
        return { id, name, exportCount, importCount, stock };
    }

    const rowsI = [
        createDataI('F55', 159, 6.0, 24 ,23),
        createDataI('RC100', 237, 9.0, 37,32),
        createDataI('BM', 262, 16.0, 24,34),
        createDataI('F35', 305, 3.7, 67,34),
        createDataI('F100', 356, 16.0, 49,33),
    ];


    return (
        <div>
            <div ref={componentRef} className={styles.dailyReportWrapper} >
                <div className={styles.dailyReportTitleWrapper}>
                    <h1 className={styles.dailyReportTitle}>Báo cáo nhập xuất tồn</h1>
                </div>
                <div className={styles.dailyReportDate}>
                    <p>Thời gian: <b><span>{firstDateOfMonth} - {displayCurrentDate}</span></b></p>
                </div>
                <div className={styles.dailyReportTableWrapper}>
                    <div className={styles.dailyReportTable}>
                        <TableContainer component={Paper} sx={{ displayPrint: 'block' }} >
                            <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                                <TableHead>
                                    <TableRow>
                                        <TableCell width='20%'><b>Mã sản phẩm</b></TableCell>
                                        <TableCell width='30%'><b>Tên sản phẩm</b></TableCell>
                                        <TableCell width='20%'><b>Số lượng nhập</b></TableCell>
                                        <TableCell width='20%'><b>Số lượng tồn</b></TableCell>
                                        <TableCell width='10%'><b>Tồn kho</b></TableCell>
                                        
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
                                            <TableCell>{row.exportCount}</TableCell>
                                            <TableCell>{row.importCount}</TableCell>
                                            <TableCell>{row.stock}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
                <div className={styles.moreWrapper}>
                    <CKEditor
                            editor={ ClassicEditor }
                            data=""
                            onReady={(editor) => {
                                // You can store the "editor" and use when it is needed.
                                // console.log("Editor is ready to use!", editor);
                                editor.editing.view.change((writer) => {
                                writer.setStyle(
                                    "height",
                                    "150px",
                                    editor.editing.view.document.getRoot()
                                );
                                });
                            }}
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

export default BaoCaoThang;