import React, { useEffect, useState } from "react";
import "./Header.css"
import LanguageSelector from '../../components/shared/LanguageSelector/LanguageSelector'
import LoginButton from "../../pages/User/LoginButton";
import { getMyInfo } from "../../api/me/client";

export default function Header () {
    const [username, setUsername] = useState<string | null>(null);
    useEffect(() => {
        getMyInfo()
            .then((info) => {
                if (info !== null) {
                    setUsername(info.username)
                }
            })
            .catch((error) => console.log(error)); 
    }, []);
    
    return (
        <div className='header'>
            <div>
                <h1>Recipe app</h1>
            </div>
            <div>
                <LanguageSelector/>
                {
                    username === null ? 
                        <LoginButton/> :
                        <div>
                            <span>Welcome {username}</span>
                        </div>
                }
            </div>
        </div>
    );
}