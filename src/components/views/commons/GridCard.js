import React from 'react'
import { Col } from 'antd';
function GridCard(props) {
    if(props.LandingPage){
        return (
        <Col lg={4} md={7} xs={12}>
            <div style={{ position: 'relative'}}>
                <a href ={`/movie/${props.movieId}`}>
                    <img style={{width: '100%', height:'320px'}}src={props.image} alt={props.movieName} />
                </a>
    
            </div>
        </Col>
        )
    } else{
        return (
            <Col lg={4} md={7} xs={12}>
            <div style={{ position: 'relative'}}>
                    <img style={{width: '100%', height:'320px'}}src={props.image} alt={props.characterName} />
            </div>
        </Col>
        )
    }
}

export default GridCard
