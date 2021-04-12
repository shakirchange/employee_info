//import classes from '*.module.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersDatafromList } from './Redux/Action';
import DataGrid, { Column, SearchPanel } from 'devextreme-react/data-grid';
import classes from './InputComp.module.css';
import { Row, Col } from 'reactstrap';
import './table.css';
const UsersList = () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.token);
    const usersResp = useSelector(state => state.usersResp);
    const getUsersData = (token) => dispatch(getUsersDatafromList(token));
    useEffect(() => {
        if (token) {
            getUsersData(token);
        }

    }, [token])
    return (
        <Row className={`${classes.noMargin} ${classes.contenmiddle}`} style={{ marginTop: '30px' }}>
            <Col lg="12">
                <DataGrid id="gridContainer"
                    dataSource={usersResp}
                    showBorders={true}>
                    <SearchPanel visible={true}
                        width={240}
                        placeholder="Search..." />
                    <Column dataField="accountId"
                        width={140}
                        caption="Account ID"></Column>
                    <Column dataField="firstName"
                        width={140}
                        caption="First Name"></Column>
                    <Column dataField="lastName"
                        width={140}
                        caption="Last Name"></Column>
                    <Column dataField="age"
                        width={140}
                        caption="Age"></Column>
                </DataGrid>
            </Col>
        </Row>
    )
}
export default UsersList;