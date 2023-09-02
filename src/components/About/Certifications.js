import React, { useRef, useState } from 'react';
import { Card } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import coursera from "../../Assets/coursera.png"

import "./certifications.css"
import ListGroup from 'react-bootstrap/ListGroup';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import {certificates} from "../../constants"

function Certifications() {
    return(
        <div>

    {/* https://swiperjs.com/swiper-api#param For Swiper Documentation*/}
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoHeight={true}
        autoplay={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        {
            certificates.map((object,index) => {
                return(
                    <SwiperSlide>
                    <Card style={{ width: '18rem'}} border='secondary' className='certifications-card'>
                    <Card.Img variant="top" src={coursera} />
                     <Card.Body>
                    <Card.Title>{object.course_name}</Card.Title>
                    <Card.Text>
                    <hr></hr>
                      {object.specialization}
                    </Card.Text>
                    
                  {/* </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item></ListGroup.Item>
                  </ListGroup>
                  <Card.Body> */}
                    <Card.Link href={object.certificate}>Certificate Link</Card.Link>
                  </Card.Body>
                </Card>
                    </SwiperSlide>
                );
            })
        }
      </Swiper>
        </div>


    
    );
}

export default Certifications;