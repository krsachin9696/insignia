import { useState } from 'react';
import './features.css'
import logo from '../../../assets/logo.png'
import left from '../../../assets/left.png'
import right from '../../../assets/right.png'

import cardData from '../../../CardData'
import PropTypes from 'prop-types';

const Card = (props) => {
    return (
        <div className="card">
            <img src={`/src/assets/${props.pic}`} alt="photo" />
            <div className='card-title'>{props.title}</div>
            <p className='card-des'>{props.description}</p>
        </div>
    )
}

Card.propTypes = {
    pic: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

const Amenities = () => {
    const [CurrentIndex, setCurrentIndex] = useState(0);
    const cardsPerPage = 6;
    const cardDataLength = cardData.length;
  
    const handleNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardDataLength);
    };
  
    const handlePrevSlide = () => {
      setCurrentIndex((prevIndex) =>  prevIndex === 0 ? cardDataLength - 1 : prevIndex - 1);
    };

    const startIndex = CurrentIndex;
    const endIndex = (startIndex + cardsPerPage) % cardDataLength;
    const visibleCards =[
            ...cardData.slice(startIndex),
            ...cardData.slice(0, endIndex),
          ];
  
    return (
        <div className="amenities-container">
            <div className="amenities-heading">AMENITIES</div>
            <hr className='my-hr'/>
            
            <div className="amenities-cards">
            <button className="prev-button" onClick={handlePrevSlide}>
                <img src={left} alt="prev" />
            </button>
                {visibleCards.map((card, index) => (
                        <Card
                            key={index}
                            pic={card.image}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                    <button className="next-button" onClick={handleNextSlide}>
                        <img src={right} alt="next" />
                    </button>
            </div>
            <div className="amenities-buttons">
                
                
            </div>
        </div>
    )
}

const Features = () => {
    return (
        <div className="features">
            <div className="details-card">
                <div className="item1">
                    <img src={logo} alt="PVV logo" />
                </div>
                <div className="item2">
                    <div className="buid-upon">
                        BUILD UPON THE PUREST EMOTION OF JOY!
                    </div>
                    <div className="harmony">
                    Harmony of Happiness - Delight in the Richness of Your New Home as You Experience Unparalleled Comfort and Opulence in Our Real Estate Haven
                    </div>
                    <button className="broucher">Download Broucher</button>
                </div>
                <div className="item3"></div>
            </div>

            <div className="details-card">
                <div className="item4">
                    <img src={logo} alt="PVV logo" />
                </div>
                <div className="item5">
                    <div className="buid-upon">
                    LIVE ALL THE ELEMENTS THAT MAKE UP A RICH LIFE!
                    </div>
                    <div className="harmony">
                    A Canvas for Your Dreams - Unveil All the Facets of a Rich Life as You Step into Our Unrivaled Real Estate Masterpiece, Crafted for Your Ultimate Pleasure and Fulfillment
                    </div>
                    <button className="quote">Get a Quote</button>
                </div>
                <div className="item6"></div>
            </div>

            <Amenities />
        </div>
    )
}

export default Features