import React, { Component } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


class DataForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data : [
              {
                name: '1970', uv: 4000, pv: 2400, amt: 2400,
              },
              {
                name: '1980', uv: 3000, pv: 1398, amt: 2210,
              },
              {
                name: '1990', uv: 2000, pv: 9800, amt: 2290,
              },
              {
                name: '2000', uv: 2780, pv: 3908, amt: 2000,
              },
              {
                name: '2010', uv: 1890, pv: 4800, amt: 2181,
              },
              {
                name: '2069', uv: 2390, pv: 3800, amt: 2500,
              },
              {
                name: '2100', uv: 3490, pv: 4300, amt: 2100,
              },
            ]
        }
    }

    changeData = (e) => {
        e.preventDefault()
        this.setState({data: [
          {
            name: '1970', uv: 333, pv: 2400, amt: 2400,
          },
          {
            name: '1980', uv: 3333, pv: 1398, amt: 2210,
          },
          {
            name: '1990', uv: 4456, pv: 9800, amt: 2290,
          },
          {
            name: '2000', uv: 5757, pv: 3908, amt: 2000,
          },
          {
            name: '2010', uv: 6767, pv: 4800, amt: 2181,
          },
          {
            name: '2069', uv: 2321, pv: 3800, amt: 2500,
          },
          {
            name: '2100', uv: 5543, pv: 4300, amt: 2100,
          },
        ]})
    }
    render() {
        return (
            <div>
                <h2>Number of P.A.B. (Pussy Ass Bitches)</h2>
                <LineChart width={600} height={300} data={this.state.data}>
                    <Line type="monotone" dataKey="uv" stroke="white" />
                    <Line type="monotone" dataKey="pv" stroke="white" />
                    <Line type="monotone" dataKey="amt" stroke="white" />
                    <CartesianGrid stroke="#white" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
                <button onClick={this.changeData}>hi</button>
            </div>
        )
    }
}

export default DataForm;
