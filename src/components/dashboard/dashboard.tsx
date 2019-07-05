import React from 'react';
import { getTemperature } from '../services/temperature.service';
import { GetTemperatureResponse } from '../services/models/get-temperature-request';

export class Dashboard extends React.Component<null, > {
    public state: FaqListItemState = {
        temperatures: []
    };

    public componentDidMount(): void {
        getTemperature({from: '10', to: '12'})
            .then((response: GetTemperatureResponse) => {

            });
    }

    public render() {
        return (
            <p>

            </p>
        )
    }
}
