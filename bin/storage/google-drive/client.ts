import axios from "axios";
import {GoogleToken} from "gtoken";

export interface TokenData {
    refresh_token?: string;
    expires_in?: number;
    access_token?: string;
    token_type?: string;
    id_token?: string;
}

export interface Request {
    url?: string,
    method?:string,
    options?: Options
}

export interface Options {
    header?: object,
    body?: object
}

export interface Response {
    status?: number,
    data?: object
}

export type Callback = (err: Error | null, response: Response) => void;

export default class Client {
    private gToken:GoogleToken;
    private tokens:TokenData;

    constructor() {
        this.configure();
    }

    private configure() {
        if(!this.gToken) {
            this.gToken = new GoogleToken({
                keyFile: 'legends-pos-254518-414599b1e615.json',
                scope: ['https://www.googleapis.com/auth/drive'] // or space-delimited string of scopes
            });
        }
    }

    private async generateTokens(): Promise<TokenData> {
        try {
             this.tokens = await this.gToken.getToken();
             return this.tokens;
        } catch (error) {
            this.tokens = this.tokens ? this.tokens : null;
            throw error;
        }
    }

    public async request(request:Request): Promise<Response> {
        if(!this.tokens || this.gToken.hasExpired()) {
            await this.generateTokens();
        }

        if(request.method === 'GET') {
            return await axios.get<Response>(request.url, {
                headers: {
                    Authorization: `Bearer ${this.tokens.access_token}`
                },
            }).then((response:Response) => {
               return response;
            });
        } else if (request.method === 'POST') {
            try {
                return await axios.post<Response>(request.url, request.options.body, {
                    headers: {
                        Authorization: `Bearer ${this.tokens.access_token}`
                    },
                }).then((response:Response) => {
                    return response;
                });
            } catch (e) {
                console.log('error');
                console.log(e.message);
            }
        }
    }
}


