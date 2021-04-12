import React from 'react';
import * as actionType from './Actiontype';


export const getUsersDatafromList = (token) => {

    return (dispatch) => {
        let headers = {"Content-Type": "application/json", 'Accept': 'application/json'};
        if (token) {
          headers["Authorization"] = `Bearer ${token}`;
        }
        fetch("https://apertum-interview.herokuapp.com/api/users", {headers}).then(resp=>resp.json()).then((response)=>{
            dispatch(usersListItems(response));
        })
    }
}
export const usersListItems = (data) =>{
    return {
        type: actionType.USERS_DATA,
        payload: data
    }
}
export const userValidation = (token) => {
    return {
        type: actionType.SAVE_TOKEN,
        payload: token
    }
}


export const checkUserValidation = (obj) => {
    return  (dispatch) => {
        fetch("https://apertum-interview.herokuapp.com/api/user/login", {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        }).then(res => res.json())
            .then(res => {
                if (res.message === "You got the token!") {
                    dispatch(userValidation(res.token));
                } else {
                    alert("Entered wrong Username or Password");
                }


            });
    
    }
        
    
}