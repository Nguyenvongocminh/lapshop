import React,{useState} from 'react';
import './navbar.scss';
import icon from '../../img/computer.png'

const Navbar=() =>{
    return(
        <div>
            <div className="navbar">
                <div className="icon">
                    <img src={icon} alt=""/>
                </div>
                <div className="link">
                    <p>Trang chủ</p>
                    <p>Giới thiệu</p>
                    <p>Liên hệ</p>
                    <p>Phản hồi</p>
                </div>
        </div>
        </div>
    )
}

export default Navbar;