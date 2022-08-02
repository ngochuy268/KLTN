import styles from './TongQuan.module.scss';
import PieChart from './piechart';
import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import { tableCellClasses } from '@mui/material/TableCell';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { fetchDataPieChart, getCTSP } from '../../../../../../services/khoHangServices';
import clsx from 'clsx';
import { OpenWithSharp } from '@mui/icons-material';

function TongQuan1() {

    const [pieChartData, setPieChartData] = useState([]);
    const [flat, setFlat] = useState(true);

    useEffect(() => {
        fetchPC();
    }, [])


    // Pie-chart data 
    const fetchPC = async () => {
        let response = await fetchDataPieChart();
        if (response && response.EC === 0) {
            setPieChartData(response.DT);
        }
    }

    const columns = [
        { id: 'Mã loại', label: 'Mã sản phẩm', minWidth: 100 },
        { id: 'name', label: 'Tên sản phẩm', minWidth: 180 },
        {
            id: 'count',
            label: 'Số lượng',
            minWidth: 100,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'view',
            label: '',
            minWidth: 30,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
    ];

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

    const [tableGood, setTablegood] = useState([]);
    const getSP = async (SanPhamId) => {
        let response = await getCTSP(SanPhamId);
        if (response && response.EC === 0) {
            setTablegood(response.DT);
        }
    }

    console.log(">>>> check: ", tableGood)
    const openSP = (SanPhamId) => {
        getSP(SanPhamId);
    }

    function createDataI(
        id, name, date, expiredDate, count, address
    ) {
        return { id, name, date, expiredDate, count, address };
    }

    const rowsII =
        tableGood.map((item, index) => (
            createDataI(item.SanPhamId, item.SanPham.TenSanPham, item.NSX, item.HSD, item.SoLuong, item.ViTri)
        ));



    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.wrapperTitle}>
                    <p>Tổng quan</p>
                </div>

                {pieChartData && pieChartData.length > 0 ?
                    pieChartData.map((item, index) => {
                        let not = true;
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
                                        <div className={clsx(styles.listGoods, styles.showTable)}>
                                            <TableContainer sx={{ maxHeight: 330 }}>
                                                <Table stickyHeader aria-label="sticky table">
                                                    <TableHead>
                                                        <TableRow>
                                                            {columns.map((column, index) => (
                                                                <TableCell
                                                                    key={index}
                                                                    style={{ minWidth: column.minWidth }}
                                                                >
                                                                    <b>{column.label}</b>
                                                                </TableCell>
                                                            ))}
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {item.tablesp.map((item, index) => {
                                                            return (
                                                                <TableRow key={index}>
                                                                    <TableCell>{item.masp}</TableCell>
                                                                    <TableCell>{item.tensp}</TableCell>
                                                                    <TableCell>{item.soluong}</TableCell>
                                                                    <TableCell ><FontAwesomeIcon icon={faEye} className={styles.showIcon} onClick={() => { openSP(item.masp), setFlat(!flat) }} /></TableCell>
                                                                </TableRow>
                                                            )
                                                        })}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>

                                        </div>

                                    </div>
                                    {/* hidden table */}
                                    <div className={styles.goodsTableDetailWrapper}>

                                    </div>
                                </div>
                            </>
                        )
                    })
                    :
                    <><span>Not found data</span></>
                }

                {flat &&
                    <>
                        <TableContainer component={Paper} >
                            <Table sx={{ minWidth: 700 }} aria-label="customized table" className={styles.goodsTableDetails} >
                                <TableHead>
                                    <TableRow padding='10px' >
                                        <StyledTableCell width='10%' align="center"><b>Mã sản phẩm</b></StyledTableCell>
                                        <StyledTableCell width='22%' ><b>Tên sản phẩm</b></StyledTableCell>
                                        <StyledTableCell width='15%' ><b>Ngày sản xuất</b></StyledTableCell>
                                        <StyledTableCell width='15%' ><b>Hạn sử dụng</b></StyledTableCell>
                                        <StyledTableCell width='10%' align="center"><b>Số lượng</b></StyledTableCell>
                                        <StyledTableCell width='23%' align="center"><b>Vị trí</b></StyledTableCell>
                                        <StyledTableCell width='5%' ></StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rowsII.map((row, index) => (
                                        console.log(">>> check row: ", row),
                                        <StyledTableRow key={index}>
                                            <StyledTableCell align="center" component="th" scope="row">{row.id}</StyledTableCell>
                                            <StyledTableCell >{row.name}</StyledTableCell>
                                            <StyledTableCell >{row.date}</StyledTableCell>
                                            <StyledTableCell >{row.expiredDate}</StyledTableCell>
                                            <StyledTableCell align="right">{row.count}</StyledTableCell>
                                            <StyledTableCell >{row.address}</StyledTableCell>
                                            <StyledTableCell ><FontAwesomeIcon icon={faEdit} style={{ fontSize: '18px' }} /></StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </>
                }


            </div>


        </div>
    )
}

export default TongQuan1;