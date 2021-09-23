import { useState } from "react";

import TemplateModal from "./TemplateModal";

function Daily() {
    const [show, setShow] = useState("");

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <button className="btn btn-primary" onClick={handleShow}>
                Show Template Modal
            </button>
            <TemplateModal show={show} handleClose={handleClose} />
        </>
    );
}

export default Daily;
