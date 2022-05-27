import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { img_300, noPicture } from '../config';
import classes from './Carousel.module.css'

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
];

const Carousel = ({media_type,id}) => {
  const [credits, setCredits] = useState([])

  const items = credits.map((c) => (
    <div className="carouselItem">
      <img
        src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
        alt={c?.name}
        onDragStart={handleDragStart}
        
      />
      <b >{c?.name}</b>
    </div>
  ));


  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=e6ab9cb5f394d693d47a56721ddcd9a5&language=en-US`
    );
    setCredits(data.cast);
  };

  useEffect(() => {
    fetchCredits()
  }, [])

  return (
    <AliceCarousel autoPlay responsive={responsive} infinite disableDotsControls disableButtonsControls mouseTracking items={items} />
  );
}

export default Carousel