export interface IRegister {
    firstname: string;
    lastname: string;
    username: string;
    email?: string;
    weight?: number;
    age?: number;
    password?: string;
    height?: number;
    gender?: string;
    image?: string;
}


export class Register implements IRegister{
    constructor(public firstname: string, 
        public lastname: string,
        public username: string,
        public email: string,
        public weight: number,
        public age: number,
        public password: string,
        public height: number,
        public gender: string,
        public image: string
        ){}

}