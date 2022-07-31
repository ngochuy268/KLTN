import { Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from "@mui/material";
import styled from '@emotion/styled';
import styles from './Search.module.scss';

function Search() {

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
        id, name, productDate, count, position
    ) {
        return { id, name, productDate, count, position};
    }

    const rows = [
        createData('F55', 'Bánh Flan 55g', '12/03/2022',233, 'Kho A - Khu A')
    ];


    return (
        <>
            <div className={styles.searchWrapper}>
                <TableContainer component={Paper} >
                    <Table sx={{ minWidth: 700 }} aria-label="customized table" className={styles.searchTable} >
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center"><b>STT</b></StyledTableCell>
                                <StyledTableCell ><b>Mã sản phẩm</b></StyledTableCell>
                                <StyledTableCell ><b>Tên sản phẩm</b></StyledTableCell>
                                <StyledTableCell ><b>Ngày sản xuất</b></StyledTableCell>
                                <StyledTableCell ><b>Số lượng</b></StyledTableCell>
                                <StyledTableCell ><b>Vị trí</b></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row,index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell component="th" scope="row" align="center">{index + 1}</StyledTableCell>
                                    <StyledTableCell >{row.id}</StyledTableCell>
                                    <StyledTableCell >{row.name}</StyledTableCell>
                                    <StyledTableCell >{row.productDate}</StyledTableCell>
                                    <StyledTableCell >{row.count}</StyledTableCell>
                                    <StyledTableCell >{row.position}</StyledTableCell>
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