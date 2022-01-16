import { Link } from "react-router-dom";
import './tree.css';
// material
import { Box, Grid, Container, Typography, Card, CardHeader } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppTasks,
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppNewsUpdate,
  AppWeeklySales,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates,
  Leaderboards
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Learn">
      <Container maxWidth="xl" >
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4"> </Typography>
        </Box>
        <Grid container spacing={3}>
          {/* <Grid item xs={12} sm={6} md={3}>
            <AppWeeklySales />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppNewUsers />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppItemOrders />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBugReports />
          </Grid> */}

          <Grid item xs={8}>
          <Card>
            <CardHeader title="Roadmap" />
            <Box>
                <div className="tree">
                    <button className="btn">
                        Hello World
                    </button>
                    <button className="btn">
                        Hello World
                    </button>
                    <button className="btn">
                        Hello World
                    </button>
                </div>
            </Box>
        </Card>
          </Grid>

          <Grid item xs={4}>
            <AppCurrentVisits />
            <div style={{height:20}}/>
            <AppWebsiteVisits />
            <div style={{height:20}}/>
            <Leaderboards/>
          </Grid>

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates />
          </Grid> 

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks />
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
