import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const CommunityQARecommend = ({onClick}) => {
    return (
        <div onClick = {onClick}>
            <h1>This is Q&A recommend</h1>
        </div>
    )
}

const FeedRecommend = ({onClick}) => {
    return (
        <div onClick = {onClick}>
            <h1>This is Feed recommend</h1>
        </div>
    )
}

const MarketPromotionRecommend = ({onClick}) => {
    return (
        <div onClick = {onClick}>
            <h1>This is MarketPromotion&A recommend</h1>
        </div>
    )
}


function MainPageRecommend() {
    return (
        <div >
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