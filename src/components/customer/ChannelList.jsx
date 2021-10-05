import { Link } from "react-router-dom";

function ChannelList({ channels, isHD }) {
    return (
        <ul className="grid-list px-4">
            {channels
                ?.filter((channel) => channel.isHD ^ !isHD)
                .sort((a, b) => a.assignedNumber - b.assignedNumber)
                .map(({ _id, assignedNumber, description }, index) => {
                    return (
                        <Link
                            to={`/channel/${_id}`}
                            key={index}
                            className="border p-3 ps-4 mb-1 d-flex align-items-center"
                        >
                            <div className="d-flex flex-shrink-1">
                                {assignedNumber.toString().padStart(3, "0")}
                            </div>
                            <div className="border-start ps-3 ms-3 d-flex w-100">
                                {description}
                            </div>
                        </Link>
                    );
                })}
        </ul>
    );
}

export default ChannelList;
