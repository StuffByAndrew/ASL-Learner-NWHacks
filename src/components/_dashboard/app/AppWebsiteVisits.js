import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Signs practiced',
    type: 'line',
    data: [44, 55, 41, 67, 22, 43, 21],
    color: '#f492f0'
  }
];

export default function AppWebsiteVisits() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [0], colors: ['#f8bba1', '#f492f0']},
    // plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#f492f0'],
        shadeIntensity: 1,
        type: 'horizontal', 
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
        colorStops: [
          {
              offset: 10,
              color: '#f8bba1',
              opacity: 0.35
          },
          {
              offset: 55,
              color: '#f492f0',
              opacity: 1
          }]
      }},
    // labels: [
    //   '01/01/2003',
    //   '02/01/2003',
    //   '03/01/2003',
    //   '04/01/2003',
    //   '05/01/2003',
    //   '06/01/2003',
    //   '07/01/2003',
    //   '08/01/2003',
    //   '09/01/2003',
    //   '10/01/2003',
    //   '11/01/2003'
    // ],
    // xaxis: { type: 'datetime' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} signs`;
          }
          return y;
        }
      }
    }
  });

  return (
    <Card>
      <CardHeader title="🔥 Daily Streak 🔥"/>
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="area" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
