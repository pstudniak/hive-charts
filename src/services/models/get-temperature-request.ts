import { Temperature } from './temperature';

export interface GetTemperatureRequest {
    from: string;
    to: string;
}

export interface GetTemperatureResponse {
    temperatures: Temperature[]
}
