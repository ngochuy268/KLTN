import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import styles from './BaoCaoNgay.module.scss';
import { useReactToPrint } from 'react-to-print';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { fetchReportData } from "../../../../../../services/khoHangServices";


function BaoCaoNgay() {
    const [reportData, setReportData] = useState([]);
    useEffect(() => {
        fetchRP();
    }, [])
    const fetchRP = async () => {
        let response = await fetchReportData();
        if (response && response.EC === 0) {
            setReportData(response.DT);
        }
    }
    console.log(">>> check report data: ", reportData)

    // Print
    let componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Báo cáo ngày',
        copyStyles: false
    })

    // Get current date
    var showDate = new Date();
    var displayCurrentDate = `${showDate.getDate()}/${showDate.getMonth() + 1}/${showDate.getFullYear()}`;

    // Data of table 
    function createData(id, name, exportCount, importCount, stock) {
        return { id, name, exportCount, importCount, stock };
    }

    const rows = reportData.map(item => {
        return (
            item.listsp.map(item => (
                createData(item.SanPhamId, item.TenSanPham, item.SLXuat, item.SLNhap, item.SLTon)
            )))
    })
    // console.log(rows)
    // const rows = [
    //     createData('BD02','Bánh dứa',67),
    //     createData('BD02','Bánh dứa',67),
    //     createData('BD02','Bánh dứa',67)
    //     createData('BD02','Bánh dứa',67)
    // ]
    // console.log(rows)
    return (
        <div>
            <div ref={componentRef} className={styles.dailyReportWrapper} >
                <div className={styles.dailyReportTitleWrapper}>
                    <h1 className={styles.dailyReportTitle}>Báo cáo nhập xuất tồn</h1>
                </div>
                <div className={styles.dailyReportDate}>
                    <p>Ngày: <b><span>18/06/2022</span></b></p>
                    {/* <p>Ngày: <b><span>{displayCurrentDate}</span></b></p> */}
                </div>
                <p></p>
                <h2>Báo cáo kho hàng</h2>
                <p></p>
                {reportData ?
                    reportData.map((item, index) => {
                        return (
                            <>
                                <p></p><p></p>
                                <h4>Báo cáo xuất nhập tồn: {item.loaiSP.TenLoai}_{item.loaiSP.LoaiSanPhamId}  </h4>
                                <div className={styles.dailyReportTableWrapper}>
                                    <div className={styles.dailyReportTable}>
                                        <TableContainer component={Paper} sx={{ displayPrint: 'block' }} >
                                            <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell width='20%'><b>Mã sản phẩm</b></TableCell>
                                                        <TableCell width='35%'><b>Tên sản phẩm</b></TableCell>
                                                        <TableCell width='15%'><b>Số lượng xuất</b></TableCell>
                                                        <TableCell width='15%'><b>Số lượng nhập</b></TableCell>
                                                        <TableCell width='15%'><b>Tồn kho</b></TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {item.listsp.map((item, index) => {
                                                        return (
                                                            <>
                                                                <TableRow
                                                                    key={index}
                                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                                >
                                                                    <TableCell component="th" scope="row"> {item.SanPhamId}</TableCell>
                                                                    <TableCell>{item.TenSanPham}</TableCell>
                                                                    <TableCell>{item.SLXuat ? item.SLXuat : 0}</TableCell>
                                                                    <TableCell>{item.SLNhap ? item.SLNhap : 0}</TableCell>
                                                                    <TableCell>{item.SLTon}</TableCell>
                                                                </TableRow>
                                                            </>
                                                        )
                                                    })}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </div>
                                </div>
                                <p></p>
                            </>
                        )
                    })
                    :
                    <><span>Not found data</span></>
                }
                <p></p><p></p>
                <h2>Báo cáo cá nhân</h2>
                <p></p>
                <div className={styles.moreWrapper}>
                    <CKEditor
                        editor={ClassicEditor}
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
                        onChange={(event, editor) => {
                            const data = editor.getData();
                        }}
                        onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                        }}
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