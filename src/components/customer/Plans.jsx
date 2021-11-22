import { useEffect } from "react";

import Card from "./Card";

function Plans() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container-fluid bg-plans">
            <div className="row px-5 mx-5">
                <div className="col">
                    <p className="h1 py-3 mb-3 text-navy border-gold-3">
                        PLANS
                    </p>
                </div>
            </div>
            <div className="row  px-lg-5 mx-lg-5 align-items-center justify-content-center">
                <div className="col-xl-4 col-xxl-3 col-lg-12 col-md-9 col-12 my-3 order-xs-0 order-md-1">
                    <Card
                        title="INTERNATIONAL"
                        price="1099"
                        SDchannels="120"
                        HDchannels="54"
                    />
                </div>
                <div className="col-xl-4 col-xxl-3 col-lg-12 col-md-9 col-12 my-3 order-xs-1 order-md-2">
                    <Card
                        title="PREMIUM"
                        price="790"
                        SDchannels="93"
                        HDchannels="35"
                    />
                </div>
                <div className="col-xl-4 col-xxl-3 col-lg-12 col-12 col-md-9 my-3 order-xs-2 order-md-0">
                    <Card
                        title="BASIC"
                        price="640"
                        SDchannels="61"
                        HDchannels="23"
                    />
                </div>
            </div>
            <h5>† Additional ₱ 1,000 for installation fee.</h5>
            <p>* Channels are subject to change without prior notice</p>
        </div>
    );
}

export default Plans;
