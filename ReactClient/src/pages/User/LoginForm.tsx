import React, { useState } from "react";
import { login } from "../../utility/ApiClient";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "state/store";
import { change } from "../../state/token/tokenSlice";

export default function LoginForm () {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    //const language = useSelector((state: RootState) => state.language.value);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    return (
        <form className="login-form" onSubmit={async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const tokenObject: { token: string} = await login({
                username: username,
                password: password,
            });
            const token = tokenObject.token;
            dispatch(change(token));
            console.log(token);
            alert("Login was successfull!");
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