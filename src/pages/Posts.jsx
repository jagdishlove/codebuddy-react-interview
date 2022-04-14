// import React, { useState, useEffect } from 'react';
// import '../styles/index.css';

// const Posts = () => {
//     const [datas, setDatas] = useState([]);
//     useEffect(() => {
//         fetch('https://codebuddy.review/posts')
//             .then(resp => resp.json())
//             .then(data => setDatas(data.data.posts));
//     }, []);

//     return (
//         <div className="continer">
//             {datas.map(user => (
//                 <div className="data" key={user.id}>
//                     <p>User Id : {user.id}</p>
//                     <div className="nameAvatar">
//                         <img className="avatar" src={user.avatar} alt="avatar" />
//                         <h3>First name : {user.firstName}</h3>
//                         <h3>Last Name :{user.lastName}</h3>
//                     </div>
//                     <p>{user.writeup}</p>
//                     <img className="image" src={user.image} alt="image" />
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Posts;

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import '../styles/index.css';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const Posts = () => {
    const classes = useStyles();
    // const [expanded, setExpanded] = React.useState(false);
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('https://codebuddy.review/posts')
            .then(resp => resp.json())
            .then(data => setDatas(data.data.posts));
    }, []);

    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };

    console.log(datas);

    return (
        <div className="cardData">
            {datas &&
                datas.map(user => (
                    <Card className={classes.root}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    {user.avatar}
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={`${user.firstName} ${user.lastName}`}
                            subheader={user.id}
                        />
                        <CardMedia className={classes.media} image={user.image} title="Image" />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {user.writeup}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
        </div>
    );
};

export default Posts;
