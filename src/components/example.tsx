'use client'

import React, { PureComponent } from 'react'
import { PieChart, Pie, Cell, Legend, Sector, ResponsiveContainer } from 'recharts'

// const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 }
// ];
// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const data = [
  { name: 'Group A', value: 400, fill: '#0088FE' },
  // { name: 'Blank', value: 400, fill: '#00C49F' },
  // { name: 'Group C', value: 400, fill: '#FFBB28' },
  // { name: 'Group D', value: 400, fill: '#FF8042' },
]

const renderColorfulLegendText = (value: string, entry: any) => {
  return (
    <span style={{ color: '#596579', fontWeight: 500, padding: '10px' }}>
      {value}
    </span>
  )
}

const COLORS = ['#FF8042', '#0088FE', '#00C49F', '#FFBB28']

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o'

  render() {
    return (
      <ResponsiveContainer width='100%' height={300}>
        <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
          {/* <Legend
          height={36}
          iconType='circle'
          layout='vertical'
          verticalAlign='middle'
          iconSize={10}
          padding={5}
          formatter={renderColorfulLegendText}
        /> */}
          <Pie
            data={[data[0]]}
            cx='50%'
            cy='100%' // Đẩy phần tròn xuống dưới để tạo nửa hình tròn
            innerRadius='40%'
            outerRadius='80%'
            startAngle={180} // Bắt đầu từ góc 180 độ
            endAngle={0} // Kết thúc ở góc 0 độ
            paddingAngle={0}
            isAnimationActive={false}
          >
            <Cell fill="#c3c3c3" />
          </Pie>
          <Pie
            // data={data}
            // cx={120}
            // cy={200}
            // innerRadius={60}
            // outerRadius={80}
            // fill='#8884d8'
            // paddingAngle={0}
            // dataKey='value'
            data={data}
            cx='50%'
            cy='100%' // Đẩy phần tròn xuống dưới để tạo nửa hình tròn
            innerRadius='40%'
            outerRadius='80%'
            startAngle={180} // Bắt đầu từ góc 180 độ
            endAngle={0} // Kết thúc ở góc 0 độ
            paddingAngle={0}
            enableBackground="#c3c3c3"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    )
  }
}
