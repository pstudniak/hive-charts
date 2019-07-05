import { Temperature } from './temperature';

export interface GetTemperatureRequest {
    dateFrom: string;
    dateTo: string;
}

export interface GetTemperatureResponse {
    temperatures: Temperature[]
}
