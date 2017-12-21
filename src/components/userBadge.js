import React from 'react';

var male = 'https://randomuser.me/api/portraits/men/39.jpg';
var female = 'https://randomuser.me/api/portraits/women/84.jpg';


const UserBadge = props => {
    let {name, favorites, projects, comments, gender, clients, img, onUserEdit} = props;
    return (
        <div className="container top50">
            <div>
                <div className={`item-1 ${gender}`}>
                    <div className="img-container">
                        <a href="#"><img src={(gender === 'male') ? male : female}/></a>
                    </div>
                    <div className="robin-key">
                        <p>{name}</p>
                        <ul>                            
                            <li><a href="#" onClick={() => onUserEdit(name)}><i className="fa fa-edit"></i></a></li>
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