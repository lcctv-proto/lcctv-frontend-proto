import { useState, useEffect, useRef } from "react";
import axios from "axios";

function Channel() {
    const [isLoading, setIsLoading] = useState(true);
    const _isMounted = useRef(true);

    const [channel, setChannel] = useState("");

    useEffect(() => {
        const fetchChannel = async () => {
            if (_isMounted.current) {
                setIsLoading(true);
                const res = await axios.get(
                    "https://lcctv-backend.herokuapp.com/api/channels/6140b439db30692694cb9358"
                );
                setChannel(res.data);
                setIsLoading(false);
            }
        };

        fetchChannel();

        return () => {
            _isMounted.current = false;
        };
    }, []);

    return (
        !isLoading && (
            <div>
                <div className="row">
                    <div className="col">
                        <img
                            className="border border-warning border-4 border-top-0 border-start-0 border-end-0 image-responsive"
                            src={channel.bannerImageURL}
                            alt="Cartoon Logo"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col bg-navy">
                        <h1 className="py-4 text-white text-center fw-bolder">
                            {channel.assignedNumber} - {channel.description} -{" "}
                            {channel.isHD ? "HD" : "SD"}
                        </h1>
                    </div>
                </div>

                <div className="row py-4 justify-content-center d-flex">
                    {channel.channelImages.map((value, index) => {
                        return (
                            <div className="col-md-12 col-lg-3">
                                <img
                                    className="image-responsive"
                                    src={value}
                                    alt="Adventure Time"
                                    key={index}
                                />
                            </div>
                        );
                    })}
                </div>

                <div className="row bg-navy justify-content-center">
                    <div
                        className="col-4 m-5 ratio ratio-4x3"
                        style={{ width: 750 }}
                    >
                        <iframe
                            width="720"
                            height="480"
                            src={channel.videoURL}
                            title="YouTube video player"
                        ></iframe>
                    </div>
                    <div className="col-4 ms-4 m-5 text-light">
                        <div className="row">
                            <div className="col">
                                <h3 className="fw-bolder text-gold">
                                    {channel.description} INFORMATION
                                </h3>

                                <p className="fs-5 text-wrap text-justify">
                                    {channel.label}
                                </p>

                                <h3 className="mt-5 fw-bolder text-gold">
                                    {channel.description} IS AVAILABLE IN:
                                </h3>
                                <ul className="fs-5">
                                    {channel.packages.map((value, index) => {
                                        return (
                                            <li key={index}>
                                                {value.description}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default Channel;
