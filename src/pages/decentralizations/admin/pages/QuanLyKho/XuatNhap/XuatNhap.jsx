import styles from './XuatNhap.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Dialog, DialogActions, DialogTitle, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { useState } from 'react';
import styled from '@emotion/styled';



function XuatNhap() {


    // Table goods data
    const columns = [
        { id: 'exportDate', label: 'Ngày xuất', minWidth: 60 },
        { id: 'employeeName', label: 'Tên nhân viên', minWidth: 100 },
        {
          id: 'deliverName',
          label: 'Nhân viên giao hàng',
          minWidth: 100,
          align: 'left',
          format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'receiver',
            label: 'Bên nhận',
            minWidth: 100,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'goodName',
            label: 'Tên sản phẩm',
            minWidth: 100,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'count',
            label: 'Số lượng',
            minWidth: 60,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'expiredDate',
            label: 'Hạn sử dụng',
            minWidth: 60,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'cost',
            label: 'Giá tiền',
            minWidth: 60,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'note',
            label: 'Ghi chú',
            minWidth: 120,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
    ];

    const columnsI = [
        {
            id: 'importDate',
            label: 'Ngày nhập',
            minWidth: 90,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        { id: 'employeeName', label: 'Tên nhân viên', minWidth: 100 },
        {
            id: 'goodName',
            label: 'Tên sản phẩm',
            minWidth: 100,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'count',
            label: 'Số lượng',
            minWidth: 80,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'expiredDate',
            label: 'Hạn sử dụng',
            minWidth: 90,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'cost',
            label: 'Giá tiền',
            minWidth: 90,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'note',
            label: 'Ghi chú',
            minWidth: 120,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        }
    ];

    const StyledTableCell = styled(TableCell)(() => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: '#007bff' ,
          color: 'white',
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));

    function createData(
       exportDate, employeeName, deliverName, receiver, goodName, count, expiredDate, cost, note
    ){
        return {exportDate, employeeName, deliverName, receiver, goodName, count, expiredDate, cost, note };
    }

    function createDataI(
        importDate, employeeName, goodName, count, expiredDate, cost, note
     ){
         return { importDate, employeeName, goodName, count, expiredDate, cost, note};
     }

    //  ------------------BE------------------
    const rows = [
       createData('19/7/2022','Trần Văn D','Nguyễn Văn Hùng','Hồ Tấn Đào','Bánh Flan 100g',623,'12/9/2022','267000 VND','ahihi'),
       createData('19/7/2022','Trần Văn D','Nguyễn Văn Hùng','Hồ Tấn Đào','Bánh Flan 100g',623,'12/9/2022','267000 VND','ahihi'),
       createData('19/7/2022','Trần Văn D','Nguyễn Văn Hùng','Hồ Tấn Đào','Bánh Flan 100g',623,'12/9/2022','267000 VND','ahihi'),
       createData('19/7/2022','Trần Văn D','Nguyễn Văn Hùng','Hồ Tấn Đào','Bánh Flan 100g',623,'12/9/2022','267000 VND','ahihi'),
       createData('19/7/2022','Trần Văn D','Nguyễn Văn Hùng','Hồ Tấn Đào','Bánh Flan 100g',623,'12/9/2022','267000 VND','ahihi'),
       createData('19/7/2022','Trần Văn D','Nguyễn Văn Hùng','Hồ Tấn Đào','Bánh Flan 100g',623,'12/9/2022','267000 VND','ahihi'),
       createData('19/7/2022','Trần Văn D','Nguyễn Văn Hùng','Hồ Tấn Đào','Bánh Flan 100g',623,'12/9/2022','267000 VND','ahihi'),
       createData('19/7/2022','Trần Văn D','Nguyễn Văn Hùng','Hồ Tấn Đào','Bánh Flan 100g',623,'12/9/2022','267000 VND','ahihi'),
       createData('19/7/2022','Trần Văn D','Nguyễn Văn Hùng','Hồ Tấn Đào','Bánh Flan 100g',623,'12/9/2022','267000 VND','ahihi'),
       createData('19/7/2022','Trần Văn D','Nguyễn Văn Hùng','Hồ Tấn Đào','Bánh Flan 100g',623,'12/9/2022','267000 VND','ahihi'),
       createData('19/7/2022','Trần Văn D','Nguyễn Văn Hùng','Hồ Tấn Đào','Bánh Flan 100g',623,'12/9/2022','267000 VND','ahihi'),
       createData('19/7/2022','Trần Văn D','Nguyễn Văn Hùng','Hồ Tấn Đào','Bánh Flan 100g',623,'12/9/2022','267000 VND','ahihi'),
       createData('19/7/2022','Trần Văn D','Nguyễn Văn Hùng','Hồ Tấn Đào','Bánh Flan 100g',623,'12/9/2022','267000 VND','ahihi'),
       createData('19/7/2022','Trần Văn D','Nguyễn Văn Hùng','Hồ Tấn Đào','Bánh Flan 100g',623,'12/9/2022','267000 VND','ahihi'),
       createData('19/7/2022','Trần Văn D','Nguyễn Văn Hùng','Hồ Tấn Đào','Bánh Flan 100g',623,'12/9/2022','267000 VND','ahihi'),
       createData('19/7/2022','Trần Văn D','Nguyễn Văn Hùng','Hồ Tấn Đào','Bánh Flan 100g',623,'12/9/2022','267000 VND','ahihi'),
       createData('19/7/2022','Trần Văn D','Nguyễn Văn Hùng','Hồ Tấn Đào','Bánh Flan 100g',623,'12/9/2022','267000 VND','ahihi'),
       createData('19/7/2022','Trần Văn D','Nguyễn Văn Hùng','Hồ Tấn Đào','Bánh Flan 100g',623,'12/9/2022','267000 VND','ahihi'),
       createData('19/7/2022','Trần Văn D','Nguyễn Văn Hùng','Hồ Tấn Đào','Bánh Flan 100g',623,'12/9/2022','267000 VND','ahihi'),
       createData('19/7/2022','Trần Văn D','Nguyễn Văn Hùng','Hồ Tấn Đào','Bánh Flan 100g',623,'12/9/2022','267000 VND','ahihi'),
       createData('19/7/2022','Trần Văn D','Nguyễn Văn Hùng','Hồ Tấn Đào','Bánh Flan 100g',623,'12/9/2022','267000 VND','ahihi')
    ];

    const rowsI = [
        createDataI('12/6/2022','Nguyễn Thị C','Bánh Flan 55g',623,'12/9/2022','267000 VND','Hello World'),
        createDataI('12/6/2022','Nguyễn Thị C','Bánh Flan 55g',623,'12/9/2022','267000 VND','Hello World'),
        createDataI('12/6/2022','Nguyễn Thị C','Bánh Flan 55g',623,'12/9/2022','267000 VND','Hello World'),
        createDataI('12/6/2022','Nguyễn Thị C','Bánh Flan 55g',623,'12/9/2022','267000 VND','Hello World'),
        createDataI('12/6/2022','Nguyễn Thị C','Bánh Flan 55g',623,'12/9/2022','267000 VND','Hello World'),
        createDataI('12/6/2022','Nguyễn Thị C','Bánh Flan 55g',623,'12/9/2022','267000 VND','Hello World'),
        createDataI('12/6/2022','Nguyễn Thị C','Bánh Flan 55g',623,'12/9/2022','267000 VND','Hello World'),
        createDataI('12/6/2022','Nguyễn Thị C','Bánh Flan 55g',623,'12/9/2022','267000 VND','Hello World'),
        createDataI('12/6/2022','Nguyễn Thị C','Bánh Flan 55g',623,'12/9/2022','267000 VND','Hello World'),
        createDataI('12/6/2022','Nguyễn Thị C','Bánh Flan 55g',623,'12/9/2022','267000 VND','Hello World'),
        createDataI('12/6/2022','Nguyễn Thị C','Bánh Flan 55g',623,'12/9/2022','267000 VND','Hello World'),
        createDataI('12/6/2022','Nguyễn Thị C','Bánh Flan 55g',623,'12/9/2022','267000 VND','Hello World'),
        createDataI('12/6/2022','Nguyễn Thị C','Bánh Flan 55g',623,'12/9/2022','267000 VND','Hello World'),
        createDataI('12/6/2022','Nguyễn Thị C','Bánh Flan 55g',623,'12/9/2022','267000 VND','Hello World'),
        createDataI('12/6/2022','Nguyễn Thị C','Bánh Flan 55g',623,'12/9/2022','267000 VND','Hello World'),
        createDataI('12/6/2022','Nguyễn Thị C','Bánh Flan 55g',623,'12/9/2022','267000 VND','Hello World'),
        createDataI('12/6/2022','Nguyễn Thị C','Bánh Flan 55g',623,'12/9/2022','267000 VND','Hello World'),
        createDataI('12/6/2022','Nguyễn Thị C','Bánh Flan 55g',623,'12/9/2022','267000 VND','Hello World'),
        createDataI('12/6/2022','Nguyễn Thị C','Bánh Flan 55g',623,'12/9/2022','267000 VND','Hello World'),
        createDataI('12/6/2022','Nguyễn Thị C','Bánh Flan 55g',623,'12/9/2022','267000 VND','Hello World'),
        createDataI('12/6/2022','Nguyễn Thị C','Bánh Flan 55g',623,'12/9/2022','267000 VND','Hello World')
    ];
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

  // Open and close
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.wrapperTitle}>
                        <p>Danh sách xuất nhập kho</p> 
                    </div>

                    <div className={styles.listGoodsInfoWrapper}>
                        <div className={styles.goodsTitle}>
                            <span>Danh sách xuất kho</span>
                        </div>
                            <div className={styles.listGoods}>
                                <TableContainer sx={{ maxHeight: 440 }}>
                                    <Table stickyHeader aria-label="sticky table">
                                        <TableHead>
                                            <TableRow>
                                            {columns.map((column) => (
                                                <StyledTableCell 
                                                key={column.id}
                                                align={column.align}
                                                style={{ minWidth: column.minWidth }}
                                                >
                                                <b>{column.label}</b>
                                                </StyledTableCell>
                                            ))}
                                             <StyledTableCell style={{minWidth: 50}}></StyledTableCell>  
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
                                                    <TableCell align='center'><FontAwesomeIcon icon={faEdit} onClick={handleClickOpen}/></TableCell>
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
                    <div className={styles.listGoodsInfoWrapper}>
                        <div className={styles.goodsTitle}>
                            <span>Danh sách nhập kho</span>
                        </div>
                            <div className={styles.listGoods}>
                                <TableContainer sx={{ maxHeight: 440 }}>
                                        <Table stickyHeader aria-label="sticky table">
                                            <TableHead>
                                                <TableRow>
                                                {columnsI.map((column) => (
                                                    <StyledTableCell 
                                                        key={column.id}
                                                        align={column.align}
                                                        style={{ minWidth: column.minWidth }}
                                                        >
                                                        <b>{column.label}</b>
                                                    </StyledTableCell>
                                                ))}  
                                                <StyledTableCell style={{minWidth: 70}}></StyledTableCell>   
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
                                                        <TableCell align='center'><FontAwesomeIcon icon={faEdit} onClick={handleClickOpen}/></TableCell>
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
                    {/* ------------------------------------------ */}
                </div>         
            </div>
        </>
    )
}

export default XuatNhap;