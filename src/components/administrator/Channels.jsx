import { useEffect, useRef, useState } from "react";

import axios from "axios";

import ChannelTable from "./ChannelTable";
import Pagination from "../Pagination";
import Page from "../Page";
import ItemCountSelector from "../ItemCountSelector";
import SearchBar from "../SearchBar";
import SearchError from "../SearchError";
import Spinner from "../Spinner";
import AddButton from "../AddButton";

import AddChannelModal from "./AddChannelModal";
import EditChannelModal from "./EditChannelModal";
import DeleteChannelModal from "./DeleteChannelModal";

function Plans() {
    const [channels, setChannels] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [channelsPerPage, setChannelsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const _isMounted = useRef(true);
    const [channel, setChannel] = useState("");

    const [addShow, setAddShow] = useState(false);
    const [editShow, setEditShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);

    const handleAddShow = () => setAddShow(true);
    const handleAddClose = () => setAddShow(false);

    const handleEditShow = () => setEditShow(true);
    const handleEditClose = () => setEditShow(false);

    const handleDeleteShow = () => setDeleteShow(true);
    const handleDeleteClose = () => setDeleteShow(false);

    const indexOfLastChannel = currentPage * channelsPerPage;
    const indexOfFirstChannel = indexOfLastChannel - channelsPerPage;
    const currentChannels = channels
        .filter((channel) => {
            const { description } = channel;
            if (searchTerm === "") return channel;
            else if (description.includes(searchTerm.toUpperCase()))
                return channel;
            return null;
        })
        .slice(indexOfFirstChannel, indexOfLastChannel);

    const cols = [
        "CHANNEL ID",
        "CHANNEL NAME",
        "CHANNEL ASSIGNED NUMBER",
        "ACTIONS",
    ];

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        const fetchChannels = async () => {
            if (_isMounted.current) {
                setIsLoading(true);
                const res = await axios.get(
                    "https://lcctv-backend.herokuapp.com/api/channels"
                );
                setChannels([...res.data]);
                setIsLoading(false);
            }
        };

        fetchChannels();

        return () => {
            _isMounted.current = false;
        };
    }, []);

    return (
        <>
            <div className="row">
                <div className="col">
                    {isLoading ? (
                        <Spinner name="admin" />
                    ) : (
                        <>
                            <div className="row">
                                <ItemCountSelector
                                    itemsPerPage={channelsPerPage}
                                    setItemsPerPage={setChannelsPerPage}
                                    name="channels"
                                    setCurrentPage={setCurrentPage}
                                />
                                <AddButton
                                    name="CHANNEL"
                                    click={handleAddShow}
                                />
                                <SearchBar
                                    searchTerm={searchTerm}
                                    setSearchTerm={setSearchTerm}
                                    placeholder="Search name ..."
                                />
                            </div>

                            <div className="row mt-3">
                                <div className="col">
                                    {channels.length === 0 ? (
                                        "No channels in DB"
                                    ) : "" && currentChannels.length === 0 ? (
                                        <SearchError searchTerm={searchTerm} />
                                    ) : (
                                        <ChannelTable
                                            currentChannels={currentChannels}
                                            cols={cols}
                                            setChannel={setChannel}
                                            handleEditShow={handleEditShow}
                                            handleDeleteShow={handleDeleteShow}
                                        />
                                    )}
                                </div>
                            </div>
                            {!searchTerm && (
                                <div className="row mt-3">
                                    <div className="col-auto">
                                        <Page
                                            indexOfFirstItem={
                                                indexOfFirstChannel
                                            }
                                            indexOfLastItem={indexOfLastChannel}
                                            totalItems={channels.length}
                                        />
                                    </div>
                                    <div className="col-auto ms-auto">
                                        <Pagination
                                            itemsPerPage={channelsPerPage}
                                            totalItems={channels.length}
                                            paginate={paginate}
                                            currentPage={currentPage}
                                        />
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
            <AddChannelModal
                show={addShow}
                channels={channels}
                setChannels={setChannels}
                handleClose={handleAddClose}
            />
            <EditChannelModal
                show={editShow}
                channels={channels}
                setChannels={setChannels}
                handleClose={handleEditClose}
                channelID={channel}
            />
            <DeleteChannelModal
                show={deleteShow}
                channels={channels}
                setChannels={setChannels}
                handleClose={handleDeleteClose}
                channelID={channel}
            />
        </>
    );
}

export default Plans;
