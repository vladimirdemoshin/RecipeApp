import { FormEvent } from "react";

export interface CreateUserFormProps {
    create: (formData: FormData) => void,
}

export default async function CreateUserForm(props: CreateUserFormProps) {
    <form onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
    }}>
        <div>Register new account</div>

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
}