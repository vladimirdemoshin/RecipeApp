import { addUser } from "../lib/webApi";

export default function LoginPage() {

    async function addUserAction(form: FormData) {
        'use server';
        console.log(form);
        await addUser(form);
    }

    return (
        <form action={addUserAction}>
            <div>Register new user</div>

            <div>
                <label>Your public username</label>
            </div>
            <div>
                <input type="text" id="username" name="username" placeholder="Type user name"/>
            </div>

            <div>
                <label htmlFor="description">Password</label>
            </div>
            <div>
                <input type="password" id="password" name="password" placeholder="Type password"/>
            </div>
            
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    );
}