import Card from "./Card";

function Plans() {
    return (
        <div className="container p-5">
            <div className="row align-items-center justify-content-center">
                <div className="col-xl-4 col-lg-7 col-md-9 my-3">
                    <Card
                        title="BASIC"
                        price="640"
                        SDchannels="61"
                        HDchannels="23"
                    />
                </div>
                <div className="col-xl-4 col-lg-7 col-md-9 my-3">
                    <Card
                        title="INTERNATIONAL"
                        price="1099"
                        SDchannels="120"
                        HDchannels="54"
                    />
                </div>
                <div className="col-xl-4 col-lg-7 col-md-9 my-3">
                    <Card
                        title="PREMIUM"
                        price="790"
                        SDchannels="93"
                        HDchannels="35"
                    />
                </div>
            </div>
            <p>* Channels are subject to change without prior notice</p>
        </div>
    );
}

export default Plans;
