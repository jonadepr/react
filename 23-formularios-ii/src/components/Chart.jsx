import React, { PureComponent } from 'react';
import {
    PieChart, Pie, Cell,
} from 'recharts';


export default class Example extends PureComponent {
    // eslint-disable-next-line
    constructor(props) {
        super(props)
    }

    COLORS = ["#FF0000", "#008000"]

    render() {
        console.log("props en chart ", this.props)

        const gasto = this.props.gastos.reduce((acc, actual) => acc + parseFloat(actual.importe), 0)
        const ingreso = this.props.ingresos.reduce((acc, actual) => acc + parseFloat(actual.importe), 0)
        const data01 = [
            { name: 'Group A', value: gasto }, { name: 'Group B', value: ingreso }
        ]

        return (
            <PieChart width={400} height={400}>
                <Pie data={data01} dataKey="value" cx={200} cy={200} outerRadius={60} fill="#FF0000" label >
                    {
                        data01.map((entry, index) => <Cell fill={this.COLORS[index % this.COLORS.length]} />)
                    }
                </Pie>
            </PieChart>
        );
    }
}
