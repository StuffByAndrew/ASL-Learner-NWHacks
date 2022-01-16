import { useFormik } from 'formik';
import { useState } from 'react';
// material
import { Container, Stack, Typography, Card, CardHeader, Box, Grid } from '@mui/material';
// components
import Page from '../components/Page';
import {
  ProductSort,
  ProductList,
  ProductCartWidget,
  ProductFilterSidebar
} from '../components/_dashboard/products';
//
import PRODUCTS from '../_mocks_/products';

// ----------------------------------------------------------------------

export default function EcommerceShop() {

  return (
    <Page title="Dashboard: Products | Minimal-UI">
      <Container>
        <div style={{height: "200px"}}></div>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={7}>
        <Card>
        <CardHeader title="Our Mission" />
          <Box mx={3} mb={3} mt={1}>
             We are a group of passionate programmers trying to spread positivity through promoting inclusion for marginalized people. 
             It is unfortunate that people who are deaf, mute, or cannot properly verbally communicate for other reasons, struggle so 
             much in our society. As the world becomes more inclusive and ready to accept people with disabilities, it is important that 
             the members of our society are able to accommodate this. As people who have had seen how such disabilities can prevent one 
             from fitting into society, we decided to try and address this issue through jesture. jesture is a Machine Learning powered 
             app that helps users learn American Sign Language (ASL), so that they have these skills available if they ever need them. 
             The goal of doing this is to try and create a more inclusive society by giving people the necessary skills to do so. We 
             understand that by all of societies problem will not be solved by teaching people how to speak ASL, but we truly hope that 
             it helps. Please continue to the Learn page and feel free to try our app if you have not already! 🤟      
          </Box>
          </Card>
          </Grid>

          <Grid item xs>
            <Card>
              <Box>
                <img src="/static/mock-images/about/asl_image.jpg" alt="about us" />
              </Box>
            </Card>
          </Grid>
          </Grid>
      </Container>
    </Page>
  );
}
