import about from "../../assets/Images/Customer/about.jpg";
import building from "../../assets/Images/Customer/building.png";
import fam from "../../assets/Images/Customer/fam.png";

function About() {
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-xxl-6">
                    <p className="h1 py-3 text-navy border-gold-3">ABOUT US</p>
                    <p className="fs-5" style={{ textAlign: "justify" }}>
                        <span className="ms-5"> Lake Community Cable TV</span>
                        Multi-purpose Cooperative started operating as a small
                        business in February, 1998. It was founded by Mr. Raul
                        C. De Vera, current Chief-Executive Officer. It has
                        three branches of its office. The main building was
                        built near the plaza of San Pablo City, the largest
                        among municipalities that the company is operating from,
                        while the remaining two are Calauan Office 1999 and the
                        recently built Victoria Office August, 2020.
                    </p>
                </div>
                <div className="col-xxl-5 d-none d-xxl-flex ms-3 d-flex align-items-center">
                    <img
                        src={building}
                        className="rounded rounded-5 shadow"
                        alt="..."
                        height="350"
                        width="500"
                    />
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-xxl-5 d-none d-xxl-block">
                    <img
                        src={about}
                        className="rounded rounded-5 shadow"
                        alt="..."
                        height="350"
                        width="500"
                    />
                </div>
                <div className="col-xxl-6 ms-3">
                    <p className="h1 py-3 border-gold-3"></p>
                    <p className="fs-5" style={{ textAlign: "justify" }}>
                        <span className="ms-5">The</span> company has
                        subscribers on these four adjacent municipalities of
                        Laguna, namely, Alaminos with thirteen (13) barangays,
                        San Pablo with a total of seventy-five (75) barangays,
                        Calauan with sixteen (16) barangays, and Victoria with
                        nine (9) barangays. The company has an approximate
                        number of 15,000 active subscribers currently.
                    </p>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-xxl-6">
                    <p className="h1 py-3 border-gold-3"></p>
                    <p className="fs-5" style={{ textAlign: "justify" }}>
                        <span className="ms-5">For</span> the past 23 years,
                        Lake Community Cable TV has been the number one cable
                        service provider for those who want quality, and
                        localized service. The Lake Community Cable TV has
                        become the companion of every family within their homes.
                    </p>
                </div>
                <div className="col-xxl-5 d-none d-xxl-block ms-3">
                    <img
                        src={fam}
                        className="rounded rounded-5 shadow"
                        alt="..."
                        height="350"
                        width="500"
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
