import "../../style/customStyle.css";
import Images1 from "../../assets/images/images-1.png"

const Hero = () => {
    return (
      <>
        <div className="hero-display">
          <div className="hero-text">
            <p>Jadi expert bersama edspert.id</p>
            <span>
              Tingkatkan skill dan pengetahuan bersama para mentor terbaik di
              bidangnya, untuk siapkan karir impian anda.
            </span>
          </div>
          <div className="hero-images">
            <div className="triangle-blue"></div>
            <div className="triangle-yellow"></div>
            <img srcSet={Images1} alt=""/>
          </div>
        </div>
      </>
    );
}

export default Hero; 