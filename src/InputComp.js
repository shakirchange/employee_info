import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkUserValidation } from './Redux/Action'
import { useHistory } from 'react-router-dom';
import { Col, Row, Button } from 'reactstrap';
import classes from './InputComp.module.css';
import loaderImgage from './Images/loader.gif';
const InputComp = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [styleCss, setStyleCss] = useState("none");
    let history = useHistory();
    let dispatch = useDispatch();
    let token = useSelector(state => state.token);
    useEffect(() => {
        if (token) {
            history.push('/users');
        }
    }, [token])
    const getTokenApi = (obj) => dispatch(checkUserValidation(obj));
    const inputHandler = () => {
        setStyleCss("block");
        if (username && password) {
            let obj = {
                accountId: username,
                pswd: password
            }

            getTokenApi(obj);
            setStyleCss("none");
        }
        else {
            setStyleCss("none");
            alert("Please enter mandatory values");
        }

    };


    return (
        <Fragment>
            <div id="loading" className={classes.loading} style={{ display: styleCss }}>
                <img id="loading-image" className={classes.loadingImage} src={loaderImgage} alt="Loading..." />
            </div>
            <Row className={classes.noMargin}>
                <Col lg="4"></Col>
                <Col lg="4">
                    <div className={classes.centerContent}>
                        <div className={classes.formField}>
                            <label className={classes.labelField}>Username<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" className={classes.InputField} value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className={classes.formField}>
                            <label className={classes.labelField}>Passsword<span style={{ color: 'red' }}>*</span></label>
                            <input type="password" className={classes.InputField} value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="button"><button type="button" className={classes.btnBackground} onClick={inputHandler}>Submit</button></div>

                    </div>
                </Col>
                <Col lg="4"></Col>
            </Row>
        </Fragment>
    )
}
export default InputComp;