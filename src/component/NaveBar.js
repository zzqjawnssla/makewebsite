import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch, faUser} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

const NaveBar = () => {
    const  menu = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M home", "Sale", "지속가능성" ];
    const navigate = useNavigate();
    const gotoLogin = () => {
        navigate("/login");
    }
    return (
        <div>
            <div className="login-button" onClick={gotoLogin}>
                <FontAwesomeIcon icon={faUser} />
                <div>로그인</div>
            </div>
            <div className="nav-section">
                <img
                    width={100}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png"
                />
            </div>
            <div className="menu-area">
                <ul className="menu-list">
                    {menu.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <div className="login-button">
                    <FontAwesomeIcon icon={faSearch} />
                    <div aria-placeholder="검색하기">__</div>
                </div>
            </div>
        </div>
    );
}

export default NaveBar;