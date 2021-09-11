
function Channel() {
    

    return (
        <div className="">
            <div className="row">
                <div className="col">
                    <img src="Images/Cartoon1.jpg" alt="" /> {/*How to insert image*/}
                </div>
            </div>
            <div className="row">
                <div className="col bg-navy">
                    <h1 className="m-4 text-white text-center fw-bolder">37 - Cartoon Network</h1>
                </div>
            </div>

            <div className="row">
                <div className="colpan-4">
                    <img src="Images/AT.jpg" alt="" />
                </div>
                <div className="colpan-4">
                    <img src="Images/PPG.jpg" alt="" />
                </div>
                <div className="colpan-4">
                    <img src="Images/WBB.jpg" alt="" />
                </div>
            </div>

            <div className="row bg-navy">
                <div className="m-5 colspan-6 ratio ratio-4x3" style={{width: 700}}>
                    <iframe width="720" height="480" src="https://www.youtube.com/embed/0ZNsLy2IwcY" title="YouTube video player"></iframe>
                </div>
                <div className="colspan-6">

                </div>
            </div>
        </div>
    );

};

export default Channel;
