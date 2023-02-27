interface ICreatePersonTokenDTO{
    person_id: string;
    expires_date: string;
    refresh_token: string;
}

export {ICreatePersonTokenDTO}