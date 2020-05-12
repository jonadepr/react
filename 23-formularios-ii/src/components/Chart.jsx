import React, { PureComponent } from 'react';
import {
    PieChart, Pie, Cell,
} from 'recharts';
import "./Chart.css"

export default class Chart extends PureComponent {
    // eslint-disable-next-line
    constructor(props) {
        super(props)
        this.COLORS = ["#FF0000", "#008000"]
    }

    render() {
        console.log("props en chart ", this.props)

        const gasto = this.props.gastos.reduce((acc, actual) => acc + parseFloat(actual.importe), 0)
        const ingreso = this.props.ingresos.reduce((acc, actual) => acc + parseFloat(actual.importe), 0)
        const data01 = [
            { name: "Gasto", value: gasto }, { name: "Ingreso", value: ingreso }
        ]

        return (
            <PieChart width={600} height={600}>
                <Pie data={data01} dataKey="value" cx={200} cy={200} outerRadius={60} label={(entry) => entry.name} >
                    {
                        data01.map((entry, index) => <Cell fill={this.COLORS[index % this.COLORS.length]} />)
                    }
                </Pie>
            </PieChart>
        );
    }
}
