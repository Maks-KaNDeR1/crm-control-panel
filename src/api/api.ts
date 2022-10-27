import axios, { AxiosResponse } from 'axios';
import { DataType } from './types';

const token = "fef883d56d3051676b0f926f0abed4ff21d63d12";

const instance = axios.create({
    baseURL: "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    }
})


export const ItemsAPI = {
    getItems: (query: string, count = 18): Promise<AxiosResponse<DataType>> =>
        instance.post<DataType>(`/address`, {
            query,
            count
        })
}





