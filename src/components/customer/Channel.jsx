import AT from "../../assets/channel_images/AT.jpg";
import Cartoon1 from "../../assets/channel_images/Cartoon1.jpg";
import PPG from "../../assets/channel_images/PPG.jpg";
import WBB from "../../assets/channel_images/WBB.jpg";

function Channel() {
    
    return (
        <div>
            <div className="row">
                <div className="col">
                    <img className="border border-warning border-4 border-top-0 border-start-0 border-end-0 image-responsive" src={Cartoon1} alt="Cartoon Logo" />
                </div>
            </div>
            
            <div className="row">
                <div className="col bg-navy" >
                    <h1 className="py-4 text-white text-center fw-bolder">37 - Cartoon Network</h1>
                </div>
            </div>

            <div className="row py-4 justify-content-center d-flex">
                <div className="col-md-12 col-lg-3">
                    <img className="image-responsive" src={AT} alt="Adventure Time" />  
                </div>
                <div className="col-md-12 col-lg-3">
                    <img className="image-responsive" src={PPG} alt="Power Puff Girls" /> 
                </div>
                <div className="col-md-12 col-lg-3">
                    <img className="image-responsive" src={WBB} alt="We Bare Bears" style={{height: 340}} /> 
                </div>
            </div>

            <div className="row bg-navy justify-content-center">
                <div className="col-4 m-5 ratio ratio-4x3" style={{width: 750}}>
                    <iframe width="720" height="480" src="https://www.youtube.com/embed/0ZNsLy2IwcY" title="YouTube video player"></iframe>
                </div>
                <div className="col-4 ms-4 m-5 text-light">
                    <div className="row">
                        <div className="col">
                            <h3 className="fw-bolder text-gold">
                                CARTOON NETWORK INFORMATION
                            </h3>

                            <p className="fs-5 text-wrap text-justify">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cartoon Network
                                is the leading kids’ brand in the Philippines.
                                Its dedicated Philippine channel offers the best
                                in original animated content including the
                                multi-award-winning global hits Regular Show,
                                The Amazing World of Gumball and Adventure Time.
                                Cartoon Network is available in 31 countries
                                throughout Asia Pacific and is currently seen in
                                more than 85 million pay-TV homes. Online,
                                Cartoon Network reaches nearly three million
                                unique visitors a month in the region. In Asia
                                Pacific, Cartoon Network is created and
                                distributed by Turner Broadcasting System Asia
                                Pacific, Inc., a Time Warner company.
                            </p>

                            <h3 className="mt-5 fw-bolder text-gold">
                                CARTOON NETWORK IS AVAILABLE IN:
                            </h3>
                            <ul className="fs-5">
                                <li>BASIC 640</li>
                                <li>PREMIUM 790</li>
                                <li>INTERNATIONAL 1099</li>
                            </ul>
                        </div>
                    </div>                 
                </div>
            </div>
        </div>
    );
};

export default Channel;