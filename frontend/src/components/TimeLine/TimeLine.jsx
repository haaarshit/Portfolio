import React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeprator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import { Event } from '@mui/icons-material'
import { Typography } from '@mui/material'

function TimeLine({ timelines = [] }) {
    return (
        <div>

            <Timeline position='alternate'>
                {
                    timelines.map((item, index) => {
                        return (
                            <TimelineItem key={index}>
                                <TimelineOppositeContent
                                  sx={{m:"auto 0"}}
                                  align="right"
                                  variant="body2"
                                  color="white"
                                >
                                    {item.date.split('T')[0]}
                                </TimelineOppositeContent>

                                <TimelineSeprator>
                                    <TimelineConnector/>
                                    <TimelineDot>
                                        <Event/>
                                    </TimelineDot>
                                    <TimelineConnector/>
                                </TimelineSeprator>

                                <TimelineContent sx={{py:"12px",px:2}}>
                                    <Typography variant='h6'>{item.title}</Typography>
                                    <Typography >{item.description}</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        )
                    })
                }
            </Timeline>
        </div>
    )
}

export default TimeLine
