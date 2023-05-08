import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'

const VideoCard = ({ video }) => {
    const videoId = video.id.videoId
    const snippet = video.snippet

    // console.log(videoId, snippet);

    return (
        <Card sx={{ width: { md: 320, xs: '100 %' }, boxShadow: 'none', borderRadius: 0 }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: 358, height: 180 }}
                />
            </Link>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: 160 }}>

                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}></Link>
                <Typography
                    variant='subtitle1'
                    fontWeight='bold'
                    color='#FFF'
                >
                    {snippet?.title.slice(0, 60) + ' ...' || demoVideoTitle.slice(0, 60) + ' ...'}
                </Typography>

                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}></Link>
                <Typography
                    variant='subtitle2'
                    fontWeight='bold'
                    color='#FCAE1E'
                >
                    {snippet?.channelTitle || demoChannelTitle.slice(0, 60)}
                    <CheckCircle sx={{ fontSize: 12, color: '#00bfff', ml: '5px' }} />
                </Typography>

            </CardContent>
        </Card>
    )
}

export default VideoCard