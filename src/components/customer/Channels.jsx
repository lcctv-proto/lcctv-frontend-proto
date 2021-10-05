import { useEffect, useState } from "react";

import axios from "axios";

import Spinner from "../Spinner";
import ChannelList from "./ChannelList";

function Channels() {
    const [channels, setChannels] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchChannels = async () => {
            setIsLoading(true);
            const res = await axios.get(
                "https://lcctv-backend.herokuapp.com/api/channels"
            );
            setChannels(res.data);
            setIsLoading(false);
        };

        fetchChannels();
    }, []);
    return (
        <div className="container py-5">
            <div className="row my-3">
                <div className="col">
                    <h1 className="pb-4 text-navy border-gold-3">
                        CHANNEL OFFERINGS
                    </h1>
                </div>
            </div>

            <div className="row my-3">
                <div className="col">
                    <p className="fs-4 text-navy">
                        STANDARD DEFINITION CHANNELS
                    </p>
                    {isLoading ? (
                        <Spinner small name="gold">
                            Loading
                        </Spinner>
                    ) : (
                        <ChannelList channels={channels} isHD={false} />
                    )}

                    <p className="fs-4 text-navy">HIGH DEFINITION CHANNELS</p>
                    {isLoading ? (
                        <Spinner small name="gold">
                            Loading
                        </Spinner>
                    ) : (
                        <ChannelList channels={channels} isHD={true} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Channels;
