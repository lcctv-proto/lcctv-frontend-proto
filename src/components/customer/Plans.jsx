import Card from "./Card.jsx";

function Plans() {
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-lg-4 mb-3">
                    <Card
                        title="BASIC"
                        price="640"
                        SDchannels="61"
                        HDchannels="23"
                    />
                </div>

                <div className="col-lg-4 mb-3">
                    <Card
                        title="PREMIUM"
                        price="790"
                        SDchannels="93"
                        HDchannels="35"
                    />
                </div>

                <div className="col-lg-4 mb-3">
                    <Card
                        title="INTERNATIONAL"
                        price="1099"
                        SDchannels="120"
                        HDchannels="54"
                    />
                </div>
            </div>
            <p>* Channels are subject to change without prior notice</p>
        </>
    );
}

export default Plans;
