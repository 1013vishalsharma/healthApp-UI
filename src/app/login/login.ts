export interface ILogin{
    username?: string;
    password: string;
    email?: string;
}

export class Login implements ILogin{
    constructor(public email: string, public password: string){}
}