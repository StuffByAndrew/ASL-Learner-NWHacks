import { Link as RouterLink} from "react-router-dom";
<<<<<<< HEAD
import Webcam from "react-webcam";
import React, { useEffect, useState, useRef } from "react";
import { useModel } from 'react-tensorflow'
=======
>>>>>>> 1a1fd6584cedd5d170323636783e9fe4369489cd
import './tree.css';
// material
import { Box, Grid, Container, Typography, Card, CardHeader, Link, Button } from '@mui/material';
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
<<<<<<< HEAD

  
  let model, labelContainer, maxPredictions, webcam;

  useEffect(() => {
    const script1 = document.createElement('script');
    const script2 = document.createElement('script');
  
    script1.src = "https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js";
    script2.src = "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js";
  
    script1.async = true;
    script2.async = true;
  
    document.body.appendChild(script1);
    document.body.appendChild(script2);
  
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    }
  }, []);

      // Load the image model and setup the webcam
      async function init() {

        // load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // or files from your local hard drive
        // Note: the pose library adds "tmImage" object to your window (window.tmImage)
        const model = tf.loadLayersModel('https://teachablemachine.withgoogle.com/models/em1KDmjQF/model.json').then( mod => {
          console.log(mod);
        });

        // maxPredictions = await model.getTotalClasses();

        // Convenience function to setup a webcam
        const flip = true; // whether to flip the webcam
        webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
        await webcam.setup(); // request access to the webcam
        await webcam.play();
        window.requestAnimationFrame(loop);

        // append elements to the DOM
        document.getElementById("webcam-container").appendChild(webcam.canvas);
        // labelContainer = document.getElementById("label-container");
        // for (let i = 0; i < maxPredictions; i++) { // and class labels
        //     labelContainer.appendChild(document.createElement("div"));
        // }
    }

    async function loop() {
        webcam.update(); // update the webcam frame
        await predict();
        window.requestAnimationFrame(loop);
    }

    // run the webcam image through the image model
    async function predict() {
        // predict can take in an image, video or canvas html element
        const prediction = await model.predict(webcam.canvas);
        for (let i = 0; i < maxPredictions; i++) {
            const classPrediction =
                prediction[i].className + ": " + prediction[i].probability.toFixed(2);
            labelContainer.childNodes[i].innerHTML = classPrediction;
        }
    }



=======
>>>>>>> 1a1fd6584cedd5d170323636783e9fe4369489cd
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
            <CardHeader title="🚗 Roadmap 🚗" />
            <Box>
                <div className="tree">
                    {/* <div className="spacer">
                      <Link className="emoji" component={RouterLink} to="/blank.html" >
                        <button className="start_btn">
                          <span role="img" aria-label="wave">👋</span>
                        </button>
                      </Link>
                    </div> */}

                    <div className="spacer">
                      <a className="emoji" href="../blank.html">
                        <button className="start_btn">
                          <span role="img" aria-label="wave">👋</span>
                        </button>
                      </a>
                    </div>
                 
                    
                    <div className="spacer">
                    <button className="btn">
                    <span role="img" aria-label="person">🧍</span>
                    </button>
                    </div>
                    <div className="spacer">
                    <button className="btn">
                    <span role="img" aria-label="cat">🐈</span>
                    </button>
                    <button className="btn">
                    <span role="img" aria-label="burger">🍔</span>
                    </button>
                    </div>
                    <div className="spacer">
                    <button className="btn">
                    <span role="img" aria-label="car">🚗</span>
                    </button>
                    <button className="btn">
                    <span role="img" aria-label="house">🏠</span>
                    </button>
                    </div>
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
<<<<<<< HEAD
          <Grid item xs={4}>
            <Card>
              <Box>
                <div>Teachable Machine Image Model</div>
                <button type="button" onclick={init()}>Start</button>
                <div id="webcam-container"></div>
                <div id="label-container"></div>
              </Box>
            </Card>
          </Grid>
=======
>>>>>>> 1a1fd6584cedd5d170323636783e9fe4369489cd

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
