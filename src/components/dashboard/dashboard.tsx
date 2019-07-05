import React from 'react';
import { getTemperature } from '../../services/temperature.service';
import { GetTemperatureRequest, GetTemperatureResponse } from '../../services/models/get-temperature-request';
import { DashboardState } from './models/dashboard-state';
import { Temperature } from '../../services/models/temperature';

export class Dashboard extends React.Component<{}, DashboardState> {
    private defaultDatesRange: GetTemperatureRequest = {
        dateFrom: '2019-07-01',
        dateTo: '2019-07-03',
    }

    public state: DashboardState = {
        temperatures: []
    };

    public componentDidMount(): void {
        getTemperature(this.defaultDatesRange)
            .then((response: GetTemperatureResponse) => {
                this.setState(response);
            });
    }

    public render() {
        return (
            <div>
                {this.renderTemperatures()}
            </div>
        )
    }

    private renderTemperatures = () => {
        return this.state.temperatures.map((temperature: Temperature, index: number) => {
            return (<p key={`${index}${temperature.date}`}>
                {
                    `date: ${temperature.date}
                    temperature: ${temperature.temperature}`
                }
            </p>);
        })
    }
}
