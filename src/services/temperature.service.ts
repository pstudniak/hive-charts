import { GetTemperatureRequest, GetTemperatureResponse } from './models/get-temperature-request';
import { getPath } from './request-path.service';
import { RequestMethod } from './models/request-method';
import { temperatureResponse } from './mock-data';

const requestPath = '/requestPath';

export const getTemperature = (request: GetTemperatureRequest): Promise<GetTemperatureResponse> => {
    // const url = getPath({
    //     path: requestPath,
    //     queryParams: request
    // });

    // return fetch(url, {
    //     method: RequestMethod.GET
    // })
    //     .then<GetTemperatureResponse>(response => response.json());

    return Promise.resolve<GetTemperatureResponse>(temperatureResponse);
}
