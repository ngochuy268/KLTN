import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleCarry, 
        faTasks, faUserCog, faAngleLeft, faAngleDown, faChartLine,
        faCloudArrowDown, faCartPlus, faList, faBriefcase,
        faFileExport, faUserTie } from '@fortawesome/free-solid-svg-icons';

export const SidebarData =  [

            {
                title: 'Quản lý kho',
                icon: <FontAwesomeIcon icon={faTasks}/>,
                iconClosed: <FontAwesomeIcon icon={faAngleLeft}/>,
                iconOpened: <FontAwesomeIcon icon={faAngleDown}/>,
                key: 1,
                id: '20',
        
                subNav: [
                    {
                        title: 'Tổng quan',
                        path: '/quanlykho/tongquan',
                        icon: <FontAwesomeIcon icon={faChartLine}/>,
                        id: '21',
        
                    },
                    {
                        title: 'Xuất nhập',
                        path: '/quanlykho/xuatnhap',
                        icon: <FontAwesomeIcon icon={faCloudArrowDown}/>,
                        id: '22'
                    },
                    {
                        title: 'Thêm sản phẩm',
                        path: '/quanlykho/themsanpham',
                        icon: <FontAwesomeIcon icon={faCartPlus}/>,
                        id: '23',
        
                    },
                    {
                        title: 'Danh sách sản phẩm',
                        path: '/quanlykho/danhsachsanpham',
                        icon: <FontAwesomeIcon icon={faList}/>,
                        id: '24',
        
                    },
        
                ]
            }, 
            {
                title: 'Nhập xuất kho',
                icon: <FontAwesomeIcon icon={faPeopleCarry}/>,
                iconClosed: <FontAwesomeIcon icon={faAngleLeft}/>,
                iconOpened: <FontAwesomeIcon icon={faAngleDown}/>,
                key: 2,
                id: '25',
        
                subNav : [
                    {
                        title: 'Nhập hàng',
                        path: '/nhapxuatkho/nhaphang',
                        icon: <FontAwesomeIcon icon={faCartPlus}/>,
                        id: '26'
                    },
                    {
                        title: 'Xuất hàng',
                        path: '/nhapxuatkho/xuathang',
                        icon: <FontAwesomeIcon icon={faFileExport}/>,
                        id: '27',
        
                    },
                ]
            },
            {
                title: 'Quản lý nhân viên',
                icon: <FontAwesomeIcon icon={faUserCog}/>,
                iconClosed: <FontAwesomeIcon icon={faAngleLeft}/>,
                iconOpened: <FontAwesomeIcon icon={faAngleDown}/>,
                key: 3,
                id: '4',
        
        
                subNav : [
                    {
                        title: 'Danh sách nhân viên',
                        path: '/quanlynhanvien/danhsachnhanvien',
                        icon: <FontAwesomeIcon icon={faUserTie}/>,
                        id: '28',
        
                    },
                    {
                        title: 'Thêm nhân viên',
                        path: '/quanlynhanvien/themnhanvien',
                        icon: <FontAwesomeIcon icon={faFileExport}/>,
                        id: '29',
        
                    },
                ]
            },

]

export const SidebarDataEmployee = [

    {
        id: '1',
        title: 'Nhập hàng',
        path: '/nhaphang',
        icon: <FontAwesomeIcon icon={faCartPlus}/>
    },
    {
        id: '2',
        title: 'Xuất hàng',
        path: '/xuathang',
        icon: <FontAwesomeIcon icon={faFileExport}/>

    },
    {
        id: '3',
        title: 'Công việc',
        path: '/congviec',
        icon: <FontAwesomeIcon icon={faBriefcase}/>
    },
];