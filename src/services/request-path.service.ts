import UrlParse from 'url-parse';
import { GetPathParams } from './models/get-path-params';

const host = 'http://server-domain.com';

export const getPath = (getPathParams: GetPathParams): string => {
    const path = `${host}${getPathParams.path}`;
    const parsedUrl = new UrlParse(path, true);
    parsedUrl.set('query', getPathParams.queryParams);

    return parsedUrl.toString();
}
