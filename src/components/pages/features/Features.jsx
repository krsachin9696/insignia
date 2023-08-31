import './features.css'
import logo from '../../../assets/logo.png'

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
        </div>
    )
}

export default Features