import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './MainPageRecommendStyle.css';

const CommunityQARecommend = ({onClick}) => {
    return (
        <Grid className="CommunityQARecommend" onClick = {onClick}>
            <h1>Q&A recommend</h1>
        </Grid>
    )
}

const FeedRecommend = ({onClick}) => {
    return (
        <Grid  className="FeedRecommend" onClick = {onClick}>
            <h1>Feed recommend</h1>
        </Grid>
    )
}

const MarketPromotionRecommend = ({onClick}) => {
    return (
        <Grid  className = "MarketPromotionRecommend" onClick = {onClick}>
            <h1>MarketPromotion&A recommend</h1>
        </Grid>
    )
}


function MainPageRecommend() {
    return (
        <div className = 'MainLayout'>
            <CommunityQARecommend
                onClick = {()=>{console.log("show q and a")}}
            />
            <FeedRecommend
                onClick = {()=>{console.log("show feed")}}
            />
            <MarketPromotionRecommend
                onClick = {()=>{console.log("show marketPromotion")}}
            />
        </div>
    );
};

export default MainPageRecommend;