import "./users.css"
import {useState, useEffect} from "react";
import User from "../user/user";
import axiosInstance from "../../services/api";

export default function Users() {

    let [users, setUsers] = useState([]);
    let [singleUser, setSingleUser] = useState(null);

    useEffect(() => {
        axiosInstance.get('/users').then(value => setUsers([...value.data]));
    }, []);


    const search = id => {
        let someone = users.find(value => value.id === id);
        console.log(someone);
        setSingleUser(someone);
    };

    return (
        <div className={'wrapper'}>
            <div className={'users-box'}>
                {
                    users.map(person => <User key={person.id} person={person} search={search}/>)
                }
            </div>
            <div className={'single-user-box'}>
                {
                    singleUser && <h3>{singleUser.id}:{singleUser.name}</h3>
                }
            </div>
        </div>
    );
}