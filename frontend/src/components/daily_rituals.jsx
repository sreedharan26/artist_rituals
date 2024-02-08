import "../styles/dr.css"
import image1 from "../assets/image3.png"
import image2 from "../assets/image4.png"
import image3 from "../assets/image5.png"
import image4 from "../assets/image6.png"


export default function DailyRituals(){
    return (
        <>
            <div className="dr-container">
                <div className="left-dr-cont">
                    <h1 className="dr-heading">
                        Daily Rituals
                    </h1>
                    <p className="dr-p"> 
                        Find your artist personality
                    </p>
                    <button className="dr-btn">
                        Fill questionnaire
                    </button>
                </div>
                <div className="right-dr-cont">
                    <div className="dr-i-cont image1">
                            <div className="dr-img-cont">
                                <img className="dr-image" src={image1} />
                            </div>
                            <div className="dr-i-wrapper">

                            </div>
                    </div>
                    <div className="dr-i-cont image2">
                            <div className="dr-img-cont">
                                <img className="dr-image" src={image2} />
                            </div>
                            <div className="dr-i-wrapper">

                            </div>
                    </div>
                    <div className="dr-i-cont image3">
                            <div className="dr-img-cont">
                                <img className="dr-image" src={image3} />
                            </div>
                            <div className="dr-i-wrapper">

                            </div>
                    </div>
                    <div className="dr-i-cont image4">
                            <div className="dr-img-cont">
                                <img className="dr-image" src={image4} />
                            </div>
                            <div className="dr-i-wrapper">

                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}