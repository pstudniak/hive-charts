import UrlParse from 'url-parse';
import { GetPathParams } from './models/get-path-params';

const host = 'http://internal-codeh-inter-199ptronvulxg-99019288.us-east-1.elb.amazonaws.com/bee';

export const getPath = (getPathParams: GetPathParams): string => {
    const path = `${host}${getPathParams.path}`;
    const parsedUrl = new UrlParse(path, true);
    parsedUrl.set('query', getPathParams.queryParams);

    return parsedUrl.toString();
}
