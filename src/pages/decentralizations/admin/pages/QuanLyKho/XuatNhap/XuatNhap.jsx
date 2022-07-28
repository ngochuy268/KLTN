import styles from './XuatNhap.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Dialog, DialogActions, DialogTitle, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { fetchDataDSNhapKho, fetchDataDSXuatKho } from '../../../../../../services/khoHangServices';
import { toast } from 'react-toastify';


function XuatNhap() {

    const [dataDSXK, setDataDSXK] = useState([]);
    const [dataDSNK, setDataDSNK] = useState([]);

    useEffect(() => {
        fetchDSXK();
        fetchDSNK();
    }, [])

    // Table goods export data
    const fetchDSXK = async () => {
        let response = await fetchDataDSXuatKho();
        if (response && response.EC === 0) {
            setDataDSXK(response.DT);
        }
    }

    function createData(
        exportDate, employeeName, deliverName, receiver, goodName, count, expiredDate, cost, note
    ) {
        return { exportDate, employeeName, deliverName, receiver, goodName, count, expiredDate, cost, note };
    }

    const rows =
        dataDSXK.map(item => (
            createData(item.NgayXuat,
                item.NhanVien.HoTen,
                item.NVGiaoHang,
                item.BenNhan,
                item.SanPham.TenSanPham,
                item.SoLuong,
                item.HSD,
                item.ThanhTien,
                item.GhiChu)
        ));
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
            minWidth: 60,
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
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

    // Table goods import data
    const fetchDSNK = async () => {
        let response = await fetchDataDSNhapKho();
        if (response && response.EC === 0) {
            setDataDSNK(response.DT);
        }
    }
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

    function createDataI(
        importDate, employeeName, goodName, count, expiredDate, cost, note
    ) {
        return { importDate, employeeName, goodName, count, expiredDate, cost, note };
    }


    const rowsI = dataDSNK.map(item => (
        createDataI(item.createdAt,
            item.NhanVien.HoTen,
            item.SanPham.TenSanPham,
            item.SoLuong,
            item.HSD,
            item.ThanhTien,
            item.updatedAt)
    ))

    const [pageI, setPageI] = useState(0);
    const [rowsPerPageI, setRowsPerPageI] = useState(10);

    const handleChangePageI = (event, newPage) => {
        setPageI(newPage);
    };

    const handleChangeRowsPerPageI = (event) => {
        setRowsPerPageI(+event.target.value);
        setPageI(0);
    };

    // Open and close
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };

    const [openI, setOpenI] = useState(false);
    const handleClickOpenI = () => {
        setOpenI(true);
    };

    const handleCloseI = () => {
        setOpenI(false);

    };

    const StyledTableCell = styled(TableCell)(() => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#007bff',
            color: 'white',
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    //   Get value from input
    const [valueObj, setValueObj] = useState({
        HoTen: '',
        NVGiaoHang: '',
        BenNhan: '',
        SanPham: {
            TenSanPham: ''
        },
        SoLuong: '',
        HSD: '',
        ThanhTien: '',
        GhiChu: ''
    });
    const handleUpdate = () => {
        if (valueObj.HoTen === "" || valueObj.NVGiaoHang === ""
            || valueObj.BenNhan === "" || valueObj.SanPham.TenSanPham === ""
            || valueObj.SoLuong === "" || valueObj.HSD === "" || valueObj.ThanhTien === "") {
            toast.error("Vui lòng điền đầy đủ thông tin!");
            return false;
        } else {
            const newArr = [];
            newArr.push(valueObj);
            console.log(newArr);
            /* 
                Code update lên db
            */
            toast.success('Cập nhật thông tin thành công!');
        }
    }

    const [valueObj1, setValueObj1] = useState({
        HoTen: '',
        SanPham: {
            TenSanPham: ''
        },
        SoLuong: '',
        HSD: '',
        ThanhTien: '',
        GhiChu: ''
    });
    const handleUpdate1 = () => {
        if (valueObj1.HoTen === "" || valueObj1.SanPham.TenSanPham === ""
            || valueObj1.SoLuong === "" || valueObj1.HSD === "" || valueObj1.ThanhTien === "") {
            toast.error("Vui lòng điền đầy đủ thông tin!");
            return false;
        } else {
            const newArr = [];
            newArr.push(valueObj1);
            console.log(newArr);
            /* 
                Code update lên db
            */
            toast.success('Cập nhật thông tin thành công!');
        }
    }
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
                                            {columns.map((column, index) => (
                                                <StyledTableCell
                                                    key={index}
                                                    align={column.align}
                                                    style={{ minWidth: column.minWidth }}
                                                >
                                                    <b>{column.label}</b>
                                                </StyledTableCell>
                                            ))}
                                            <StyledTableCell style={{ minWidth: 50 }}></StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((row, index) => {
                                                return (
                                                    <TableRow hover role="checkbox" tabIndex={-1} key={index} className='goodName'>
                                                        {columns.map((column, indexI) => {
                                                            const value = row[column.id];
                                                            return (
                                                                <TableCell key={indexI} align={column.align} >
                                                                    {column.format && typeof value === 'number'
                                                                        ? column.format(value)
                                                                        : value}
                                                                </TableCell>
                                                            );
                                                        })}
                                                        <TableCell align='center'><FontAwesomeIcon icon={faEdit} onClick={handleClickOpen} className={styles.editIcon} /></TableCell>
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
                            <TableContainer sx={{ maxHeight: 490 }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {columnsI.map((column, index) => (
                                                <StyledTableCell
                                                    key={index}
                                                    align={column.align}
                                                    style={{ minWidth: column.minWidth }}
                                                >
                                                    <b>{column.label}</b>
                                                </StyledTableCell>
                                            ))}
                                            <StyledTableCell style={{ minWidth: 70 }}></StyledTableCell>
                                        </TableRow>

                                    </TableHead>
                                    <TableBody>
                                        {rowsI
                                            .slice(pageI * rowsPerPageI, pageI * rowsPerPageI + rowsPerPageI)
                                            .map((row, index) => {
                                                return (
                                                    <TableRow hover role="checkbox" tabIndex={-1} key={index} className='goodName'>
                                                        {columnsI.map((column, indexI) => {
                                                            const value = row[column.id];
                                                            return (
                                                                <TableCell key={indexI} align={column.align} >
                                                                    {column.format && typeof value === 'number'
                                                                        ? column.format(value)
                                                                        : value}
                                                                </TableCell>
                                                            );
                                                        })}
                                                        <TableCell align='center'><FontAwesomeIcon icon={faEdit} onClick={handleClickOpenI} className={styles.editIcon} /></TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={rowsI.length}
                                rowsPerPage={rowsPerPageI}
                                page={pageI}
                                onPageChange={handleChangePageI}
                                onRowsPerPageChange={handleChangeRowsPerPageI}
                            />
                        </div>
                    </div>
                    {/* ------------------------------------------ */}
                </div>
            </div>
            <Dialog open={open} onClose={handleClose} className={styles.dialogWrapper} maxWidth='xl' fullWidth={true}>
                <div className={styles.closeButtonWrapper} onClick={handleClose}>
                    <button className={styles.closeButton}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
                <DialogTitle align='center' sx={{ fontWeight: 600, fontSize: 30 }}>
                    Chỉnh sửa thông tin sản phẩm
                </DialogTitle>
                <div className={styles.goodEditContainer}>
                    <div className={styles.goodEditWrapper}>
                        <h3>Loại sản phẩm</h3>
                        <div className={styles.goodEditInputWrapper}>
                            <div className={styles.goodEditInputItem}>
                                <p>Tên nhân viên</p>
                                <input type="text" className={styles.goodEditInput} onChange={e => setValueObj({ ...valueObj, HoTen: e.target.value })} />
                            </div>
                            <div className={styles.goodEditInputItem}>
                                <p>Nhân viên giao hàng</p>
                                <input type="text" className={styles.goodEditInput} onChange={e => setValueObj({ ...valueObj, NVGiaoHang: e.target.value })} />
                            </div>
                            <div className={styles.goodEditInputItem}>
                                <p>Bên nhận</p>
                                <input type="text" className={styles.goodEditInput} onChange={e => setValueObj({ ...valueObj, BenNhan: e.target.value })} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.goodEditWrapper}>
                        <h3>Sản phẩm</h3>
                        <div className={styles.goodEditInputWrapper}>
                            <div className={styles.goodEditInputItem}>
                                <p>Tên sản phẩm</p>
                                <input type="text" className={styles.goodEditInput} onChange={e => setValueObj({ ...valueObj, SanPham: { TenSanPham: e.target.value } })} />
                            </div>
                            <div className={styles.goodEditInputItem}>
                                <p>Số lượng</p>
                                <input type="text" className={styles.goodEditInput} onChange={e => setValueObj({ ...valueObj, SoLuong: parseInt(e.target.value) })} />
                            </div>
                            <div className={styles.goodEditInputItem}>
                                <p>Hạn sử dụng</p>
                                <input type="date" className={styles.goodEditInput} onChange={e => setValueObj({ ...valueObj, HSD: e.target.value })} />
                            </div>
                            <div className={styles.goodEditInputItem}>
                                <p>Giá tiền</p>
                                <input type="text" className={styles.goodEditInput} onChange={e => setValueObj({ ...valueObj, ThanhTien: parseInt(e.target.value) })} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.goodEditWrapper}>
                        <h3 style={{ marginBottom: '10px' }}>Ghi chú</h3>
                        <CKEditor
                            editor={ClassicEditor}
                            data=""
                            onReady={editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log('Editor is ready to use!', editor);
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setValueObj({ ...valueObj, GhiChu: data });
                            }}
                            onBlur={(event, editor) => {
                                console.log('Blur.', editor);
                            }}
                            onFocus={(event, editor) => {
                                console.log('Focus.', editor);
                            }}
                        />
                    </div>
                    <div className={styles.saveButtonWrapper}>
                        <button className={styles.saveButton} onClick={handleUpdate}>Cập nhật</button>
                    </div>
                </div>
            </Dialog>
            <Dialog open={openI} onClose={handleCloseI} className={styles.dialogWrapper} maxWidth='xl' fullWidth={true}>
                <div className={styles.closeButtonWrapper} onClick={handleCloseI}>
                    <button className={styles.closeButton}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
                <DialogTitle align='center' sx={{ fontWeight: 600, fontSize: 30 }}>
                    Chỉnh sửa thông tin sản phẩm
                </DialogTitle>
                <div className={styles.goodEditContainer}>
                    <div className={styles.goodEditWrapper}>
                        <h3>Loại sản phẩm</h3>
                        <div className={styles.goodEditInputWrapper}>
                            <div className={styles.goodEditInputItem}>
                                <p>Tên nhân viên</p>
                                <input type="text" className={styles.goodEditInput} onChange={e => setValueObj1({ ...valueObj1, HoTen: e.target.value })} />
                            </div>
                            <div className={styles.goodEditInputItem}>
                                <p>Tên sản phẩm</p>
                                <input type="text" className={styles.goodEditInput} onChange={e => setValueObj1({ ...valueObj1, SanPham: { TenSanPham: e.target.value } })} />
                            </div>
                            <div className={styles.goodEditInputItem}>
                                <p>Số lượng</p>
                                <input type="text" className={styles.goodEditInput} onChange={e => setValueObj1({ ...valueObj1, SoLuong: parseInt(e.target.value) })} />
                            </div>
                            <div className={styles.goodEditInputItem}>
                                <p>Hạn sử dụng</p>
                                <input type="date" className={styles.goodEditInput} onChange={e => setValueObj1({ ...valueObj1, HSD: e.target.value })} />
                            </div>
                            <div className={styles.goodEditInputItem}>
                                <p>Giá tiền</p>
                                <input type="text" className={styles.goodEditInput} onChange={e => setValueObj1({ ...valueObj1, ThanhTien: parseInt(e.target.value) })} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.goodEditWrapper}>
                        <h3 style={{ marginBottom: '10px' }}>Ghi chú</h3>
                        <CKEditor
                            editor={ClassicEditor}
                            data=""
                            onReady={editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log('Editor is ready to use!', editor);
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData()
                                setValueObj1({ ...valueObj, GhiChu: data });
                            }}
                            onBlur={(event, editor) => {
                                console.log('Blur.', editor);
                            }}
                            onFocus={(event, editor) => {
                                console.log('Focus.', editor);
                            }}
                        />
                    </div>
                    <div className={styles.saveButtonWrapper}>
                        <button className={styles.saveButton} onClick={handleUpdate1}>Cập nhật</button>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default XuatNhap;