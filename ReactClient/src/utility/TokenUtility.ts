import { jwtDecode, JwtPayload } from "jwt-decode";

export const getUserName = async (token: string): Promise<string> => {
    console.log('input', token);
    const decoded: JwtPayload & { name: string } = jwtDecode(token);
    console.log('Token: ', decoded);
    return decoded.name ?? '';
}
