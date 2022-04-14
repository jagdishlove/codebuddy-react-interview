import React, { useState, useEffect } from 'react';
import '../styles/index.css';

const Posts = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('https://codebuddy.review/posts')
            .then(resp => resp.json())
            .then(data => setDatas(data.data.posts));
    }, []);

    return (
        <div className="continer">
            {datas.map(user => (
                <div className="data" key={user.id}>
                    <p>User Id : {user.id}</p>
                    <div className="nameAvatar">
                        <img className="avatar" src={user.avatar} alt="avatar" />
                        <h3>First name : {user.firstName}</h3>
                        <h3>Last Name :{user.lastName}</h3>
                    </div>
                    <p>{user.writeup}</p>
                    <img className="image" src={user.image} alt="image" />
                </div>
            ))}
        </div>
    );
};

export default Posts;
//
