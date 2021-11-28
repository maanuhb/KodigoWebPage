import React from 'react'
import Res1 from '../img/restaurant1.jpg'
import star from '../img/star.png'
import starblank from '../img/star-blank.png'
import starblack from '../img/star-black.png'
import { Card } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Rating from 'react-rating'
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";


function RestaurantCard() {
    return (
        <>
        <Card style={{ backgroundColor: "#134E4A"}} className=' d-flex align-items-center justify-content-center white-text'>
        <Row className='no-gutters' >
        <Card.Title className='d-flex justify-content-center align-self-center mx-auto' style= {{marginTop: '1rem'}}>Restaurant "Los 3 cerditos".</Card.Title>
        <Col md={5} lg={5}  >
        <Card.Img variant="top" src={Res1} style={{ width: '20rem', position: 'static',margin: '1.5rem' }}/>
        </Col>
        <Col>
        <Card.Body className='white-text'>
        <Rating 
                placeholderRating={3}
                emptySymbol={<img src={starblank} className="icon" style={{ width: '2rem'}}/>}
                placeholderSymbol={<img src={starblack} className="icon" style={{ width: '2rem'}} />}
                fullSymbol={<img src={star} className="icon" style={{ width: '2rem'}} />}
                />
        
        <ul className=' list-unstyled'style= {{marginTop: '1rem'}} >
            <li>
            <a >
                <i><MdIcons.MdOutlinePlace/></i>
                <span className="link_name">Location</span>
            </a>
            </li>
            <li>
            <a>
                <i><MdIcons.MdRateReview/></i>
                <span className="link_name">Reviews</span>
            </a>
            </li>
        </ul>
        </Card.Body>
    
        </Col>
        
        <Col>
        <Card.Body>
        <ul className=' list-unstyled' style= {{marginTop: '3rem'}}>
            <li>
            <a>
                <i><BsIcons.BsFillTelephoneFill/></i>
                <span className="link_name">Telephone</span>
            </a>
            </li>
            <li>
            <a>
                <i><MdIcons.MdWeb/></i>
                <span className="link_name">Website</span>
            </a>
            </li>
            <li>
            <a>
                <i><MdIcons.MdOutlineMenuBook/></i>
                <span className="link_name">Menu</span>
            </a>
            </li>
        </ul>
        </Card.Body>
        
        </Col>
        <Col>
        <Card.Body>
        <ul className=' list-unstyled' style= {{marginTop: '3rem'}}>
            <li>
            <a>
                <i><MdIcons.MdLocationPin/></i>
                <span className="link_name">Branch</span>
            </a>
            </li>
            <li>
            <a>
                <i><AiIcons.AiFillSchedule/></i>
                <span className="link_name">Schedule</span>
            </a>
            </li>
        </ul>
        </Card.Body>
        </Col>
        </Row>
        </Card>
        </>
    )
}

export default RestaurantCard
