import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/anonimus.jpg'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let index = 1; index <= pagesCount; index++) {
            pages.push(index);
        }

        return (
            <div className={ style.users__wrapper }>
                <div>
                    { pages.map( number => 
                        <span 
                            className={ 
                                this.props.currentPage === number &&
                                style.selectedPage }
                            onClick={ () => this.onPageChanged(number) }>{ number }</span> 
                    ) }
                </div>    
                {
                    this.props.users.map(user =>
                        <div
                            key={ user.id } 
                            className={ style.user__wrapper }>
                            <div>
                                <img
                                    className={ style.image } 
                                    src={ 
                                        user.photos.small ? 
                                        user.photos.small :
                                        userPhoto
                                    } 
                                    alt="user photo"/>
                            </div>
                            <div className={ style.username__wrapper }>
                                <span>{ user.name }</span>
                                <span>{ user.name }</span>
                            </div>
                            <div className={ style.button__wrapper }>
                                {
                                user.followed ? 
                                <button 
                                    className={ style.button } 
                                    onClick={ () => 
                                        this.props.unfollow(user.id) 
                                    }>Отписаться</button> : 
                                <button 
                                    className={ style.button } 
                                    onClick={ () => 
                                        this.props.follow(user.id) 
                                    }>Подписаться</button> 
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Users;