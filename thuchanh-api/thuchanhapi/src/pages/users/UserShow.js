import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import UserModel from '../../models/UserModel';
import ArticleModel from '../../models/ArticleModel';

function UserShow(props) {
    const {id} = useParams();
    const [user,setUser] = useState({});

    useEffect( function(){

        /*
        Tam.then( res => {
            Nho.then( res => {
                Phong.then( res => {
                    Ngoc.then( res => {
                    })
                })
            })
        })
        async function xu_ly(){
            var res = await Tam.xu_ly();
            var res = await Nho.xu_ly();
            var res = await Phong.xu_ly();
            var res = await Ngoc.xu_ly();
        }
        */

        UserModel.find(id).then(res => {
            setUser(res.data);
        })
        .catch(err => {
            throw err;
        });
    },[] );
    return (
        <div>
            UserShow
            <table border={1} width={'100%'}>
                <tr>
                    <td>Id</td>
                    <td>{ user.id }</td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>{ user.name }</td>
                </tr>
            </table>
        </div>
    );
}

export default UserShow;