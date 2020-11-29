import home1 from '../img/home1.png';

const AboutSection = () => {
    return(
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>Dreams</span> come</h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>Contact us for any photgraph. This is just a placeholder for some text</p>
                <button>Contact Us</button>
                <div className="image">
                    <img src={home1} alt="camera guy"/>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;

//Software Developer. 