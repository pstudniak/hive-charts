import { GetTemperatureResponse } from './models/get-temperature-request';

export const temperatureResponse: GetTemperatureResponse = {
    temperatures: [
        {
            date: '2019-07-05T14:42:56.182Z',
            temperature: '24'
        },
        {
            date: '2019-07-06T14:42:56.182Z',
            temperature: '22'
        },
        {
            date: '2019-07-07T14:42:56.182Z',
            temperature: '21'
        }
    ]
};
