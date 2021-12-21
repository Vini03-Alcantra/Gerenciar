interface ICreatePersonTokenDTO{
    person_id: string;
    expires_date: Date;
    refresh_token: string;
}

export {ICreatePersonTokenDTO}