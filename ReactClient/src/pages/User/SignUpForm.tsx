import React, { useState } from "react";
import { signUp } from "../../utility/ApiClient";
import { useNavigate } from "react-router-dom";

export default function SignUpForm () {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const navigate = useNavigate();

    return (
        <form className="sign-up-form" onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            signUp({
                username: username,
                password: password,
            });
            alert("User was added successfully!");
            navigate('/');
        }}>
            <div>
                <label>Enter username
                    <textarea name="description" value={username} onChange={(event) => {
                        const newValue = event.target.value;
                        setUsername(newValue);
                    }}/>
                </label>
            </div>
            <div>
                <label>Enter password
                    <input name="password" type="password" value={password} onChange={(event) => {
                        const newValue = event.target.value;
                        setPassword(newValue);
                    }}/>
                </label>
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    );
}