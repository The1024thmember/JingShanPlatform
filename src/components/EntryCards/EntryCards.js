import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useHistory} from "react-router-dom";

import './EntryCardStyle.css';

import QA from '../../images/QA.jpg';
import feed from '../../images/feed.png';
import market from '../../images/market.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems:'center',
    margin:'0px 50px ',
  },
  paper: {
    padding: theme.spacing(1),
    margin:'5px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function EntryCards() {
  let history = useHistory();
  const classes = useStyles();

  const CommunityCard = () => {
    return <>
      <div className = 'CommunityCard'>
        <img src = {QA} />
      </div>
    </>
  };
  
  const FeedCard = () => {
    return <>
      <div className = 'FeedCard'>
        <img src = {feed} />
      </div>
    </>
  };
  
  const MarketPlaceCard = () => {
    return <>
      <div className = 'MarketPlaceCard'>
        <img src = {market} />
      </div>
    </>
  };

  const goToCommunity = () => {
    history.push("/community");
  }

  const goToFeed = () => {
    history.push("/feed");
  }

  const goToMaketPlace = () => {
    history.push("/marketPlace");
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} >
          <Grid className = 'Community' item xs={4}
            onClick = {goToCommunity}
          >
              <CommunityCard
              />
          </Grid>
          <Grid className = 'Feed' item xs={4}
            onClick = {goToFeed}
          >
              <FeedCard
                onClick = {goToFeed}
              />
          </Grid>
          <Grid className = 'MarketPlace' item xs={4}
            onClick = {goToMaketPlace}
          >
              <MarketPlaceCard
              />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};