import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Team B',
    type: 'line',
    data: [44, 55, 41, 67, 22, 43, 21]
  }
];

export default function AppWebsiteVisits() {
  const chartOptions = merge(BaseOptionChart(), {
    // stroke: { width: [0, 2, 3] },
    // plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: 'gradient' },
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
    // tooltip: {
    //   shared: true,
    //   intersect: false,
    //   y: {
    //     formatter: (y) => {
    //       if (typeof y !== 'undefined') {
    //         return `${y.toFixed(0)} visits`;
    //       }
    //       return y;
    //     }
    //   }
    // }
  });

  return (
    <Card>
      <CardHeader title="Website Visits" subheader="(+43%) than last year" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="area" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
