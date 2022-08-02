import { Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from "@mui/material";
import styled from '@emotion/styled';
import styles from './Search.module.scss';

function Search(dataSearch) {

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

    function createData(
        id, name, date, productDate, count, position
    ) {
        return { id, name, date, productDate, count, position };
    }

    const rows = dataSearch.map((item, index) => (
        createData(item.SanPhamId, item.SanPham.TenSanPham, item.NSX, item.HSD, item.SoLuong, item.ViTri)
    ));


    return (
        <>
            <div className={styles.searchWrapper}>
                <TableContainer component={Paper} >
                    <Table sx={{ minWidth: 700 }} aria-label="customized table" className={styles.searchTable} >
                        <TableHead>
                            <TableRow>
                                <StyledTableCell width='5%' align="center"><b>STT</b></StyledTableCell>
                                <StyledTableCell width='10%' align="center" ><b>Mã sản phẩm</b></StyledTableCell>
                                <StyledTableCell width='20%' ><b>Tên sản phẩm</b></StyledTableCell>
                                <StyledTableCell width='10%' ><b>Ngày Sản xuất</b></StyledTableCell>
                                <StyledTableCell width='10%' ><b>Hạn sử dụng</b></StyledTableCell>
                                <StyledTableCell width='10%' align="center" ><b>Số lượng</b></StyledTableCell>
                                <StyledTableCell width='25%' align="center" ><b>Vị trí</b></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell width='5%' component="th" scope="row" align="center">{index + 1}</StyledTableCell>
                                    <StyledTableCell width='10%' align="center" >{row.id}</StyledTableCell>
                                    <StyledTableCell width='20%' >{row.name}</StyledTableCell>
                                    <StyledTableCell width='10%' >{row.date}</StyledTableCell>
                                    <StyledTableCell width='10%' >{row.productDate}</StyledTableCell>
                                    <StyledTableCell width='10%' align="right" >{row.count}</StyledTableCell>
                                    <StyledTableCell width='25%' >{row.position}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default Search;