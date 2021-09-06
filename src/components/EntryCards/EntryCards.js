import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './EntryCardStyle.css';
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
  const classes = useStyles();
  const CommunityCard = () => {
    return <>
      <div className = 'CommunityCard'>
        <h3>Community</h3>
      </div>
    </>
  };
  
  const FeedCard = () => {
    return <>
      <div className = 'FeedCard'>
        <h3>Feed</h3>
      </div>
    </>
  };
  
  const MarketPlaceCard = () => {
    return <>
      <div className = 'MarketPlaceCard'>
        <h3>MarketPlace</h3>
      </div>
    </>
  };
  
  const NewsCard = () => {
    return <>
      <div className = 'NewsCard'>
        <h3>News</h3>
      </div>
    </>
  };
  
  const GossipCard = () => {
    return <>
      <div className = 'GossipCard'>
        <h3>Gossip</h3>
      </div>
    </>
  };
  
  const JokeCard = () => {
    return <>
      <div className = 'JokeCard'>
        <h3>Joke</h3>
      </div>
    </>
  };  

  
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} >
          <Grid className = 'Community' item xs={4}>
              <CommunityCard />
          </Grid>
          <Grid className = 'Feed' item xs={4}>
              <FeedCard />
          </Grid>
          <Grid className = 'MarketPlace' item xs={4}>
              <MarketPlaceCard />
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid className = 'News' item xs={4}>
            <NewsCard />
          </Grid>
          <Grid className = 'Joke' item xs={4}>
            <JokeCard />
          </Grid>
          <Grid className = 'Gossip' item xs={4}>
            <GossipCard />
          </Grid>
        </Grid>
      </Grid>
      <Grid container className = 'Thumbnails' item xs={12}>
      </Grid>  
    </div>
  );
};