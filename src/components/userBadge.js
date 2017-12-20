import React from 'react';

const UserBadge = props => {
    console.log(props);
    let {name, favorites, projects, comments, gender, clients, img, onUserAdd} = props;
    return (
        <div className="container top50">
            <div>
                <div className={`item-1 ${gender}`}>
                    <div className="img-container">
                        <a href="#"><img src={img}/></a>
                    </div>
                    <div className="robin-key">
                        <p>{name}</p>
                        <ul>
                            <li><i className="fa fa-check"></i></li>
                            <li><a href="#" onClick={() => onUserAdd(name)}><i className="fa fa-plus"></i></a></li>
                        </ul>
                    </div>

                    <ul className="follow-list">
                        <li><a href="#"><i className="fa fa-heart"></i> {favorites}</a></li>
                        <li><a href="#"><i className="fa fa-users"></i> {clients}</a></li>
                        <li><a href="#"><i className="fa fa-folder"></i> {projects}</a></li>
                        <li><a href="#"><i className="fa fa-comments"></i> {comments}</a></li>
                    </ul>
                </div>
            </div>          
        </div>       
    )
}


export default UserBadge;