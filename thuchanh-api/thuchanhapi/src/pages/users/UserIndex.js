import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import UserModel from '../../models/UserModel';
class UserIndex extends Component {
    constructor( props ){
        super(props);
        // Khai báo state users
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        UserModel.getAll().then(res => {
            this.setState({ users: res.data });
        }).catch(err => {
            throw err;
        });
    }

    render() {
        return (
            <div>
                <h1>UserIndex</h1>
                <table border={1} width={'100%'}>
                    <thead>
                        <tr>
                            <th> ID </th>
                            <th> Name </th>
                            <th> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map((user, key) => (
                                <tr key={key}>
                                    <td>
                                        {user.id}
                                    </td>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>
                                        <Link to={'/users/' + user.id }>Xem</Link>
                                        |
                                        <Link to={'/users/' + user.id + '/edit' }>Sua</Link>
                                        |
                                        <Link to={'/users/' + user.id + '/delete' }>Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserIndex;