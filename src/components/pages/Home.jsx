import lamp from "../../assets/lamp.png";
import girl from "../../assets/SigmaFemale.png"
import male from "../../assets/sigmaMale.png"
import logo from "../../assets/logo.png"
import city from "../../assets/city.png"
import './home.css';

const About = () => {
    return (
        <div className="about">
            <div className="about-section about-pic">
                <img src={male} alt="SigmaMale"/>
            </div>
            <div className="about-section about-text">
                <div className="branding">
                    <img src={logo} alt="PVV"/>
                </div>
                <div className="branding">
                    <span className="about-heading">ABOUT INSIGNIA</span>
                    <span className="tm">TM</span>
                </div>
                <div className="branding">Insignia Luxury Apartments, an exquisite real estate project located in the prestigious neighborhood of Dadar. Developed by PVV Infra, Insignia offers a unique combination of luxury, premium amenities, and breathtaking sea views.</div>
                <div className="branding">At Insignia Luxury Apartments, we strive to redefine the standards of opulence, comfort, and elegance in the prestigious neighborhood of Dadar. Developed by PVV Infra, our mission is to provide an exceptional living experience that transcends the ordinary, offering residents a sanctuary of unparalleled luxury.</div>
            </div>
            <div className="about-section about-pic">
                <img src={girl} alt="SigmaFemale"/>
            </div>
        </div>
    )
}

const Home = () => {
    return (
        <div className="home">
            <div className="hero">
                <div className="txt">
                    <div className="crown">
                        THE CROWN
                    </div>
                    <div className="lamp">
                        <img src={lamp} alt="lamp"/>
                    </div>
                </div>

                <div className="build"></div>
            </div>
            <div className="rectangle">
                <div className="epitom">UNVEILING THE EPITOM OF LUXURIOUS LIVING</div>
            </div>
            
            <About />
            
            <div className="experience">
                <div className="newDadar">EXPERIENCE THE NEW DADAR</div>
                <div>Be at the Top of the crown of Luxury & Lifestyle That is rare, Premium & Top of the World</div>
            </div>

            <div className="city">
                <img src={city} alt="Mumbai" />
            </div>

            
        </div>
    )
}

export default Home

