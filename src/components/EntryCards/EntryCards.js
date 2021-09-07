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
    alignItems:'center',
    margin:'25px 10px 0px 10px ',
  },
}));

export default function EntryCards() {
  let history = useHistory();
  const classes = useStyles();

  const CommunityCard = () => {
    return <>
      <div className = 'CommunityCard'>
        <img src = {QA} />
        <span>社区问答</span>
      </div>
    </>
  };
  
  const FeedCard = () => {
    return <>
      <div className = 'FeedCard'>
        <img src = {feed} />
        <span>生活趣事</span>
      </div>
    </>
  };
  
  const MarketPlaceCard = () => {
    return <>
      <div className = 'MarketPlaceCard'>
        <img src = {market} />
        <span>附近商店</span>
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
        <Grid container item xs={12}  >
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
    </div>
  );
};