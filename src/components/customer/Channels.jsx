import { Link } from "react-router-dom";

function Channels() {
    const channels = {
        sd_channels: [
            { assigned_number: "001", description: "PREVIEW / PPV CHANNEL" },
            { assigned_number: "002", description: "ABS-CBN" },
            { assigned_number: "003", description: "COMMUNITY TV3" },
            { assigned_number: "004", description: "PTV4" },
            { assigned_number: "005", description: "TV5" },
            { assigned_number: "006", description: "UFM 105.5" },
            { assigned_number: "007", description: "GMA 7" },
            { assigned_number: "008", description: "PINOY BOX OFFICE" },
            { assigned_number: "009", description: "CNN PHILIPPINES" },
            { assigned_number: "010", description: "UNTV" },
            { assigned_number: "011", description: "GMA NEWS TV" },
            { assigned_number: "012", description: "KNOWLEDGE TV" },
            { assigned_number: "013", description: "IBC13" },
            { assigned_number: "014", description: "CHANNEL V" },
            { assigned_number: "015", description: "ABS-CBN SPORTS+ACTION" },
            { assigned_number: "016", description: "CIN" },
            { assigned_number: "017", description: "NET25" },
            { assigned_number: "018", description: "DZMM TELERADYO" },
            { assigned_number: "019", description: "CINEMA ONE" },
            { assigned_number: "020", description: "EWTN" },
            { assigned_number: "021", description: "EURO NEWS" },
            { assigned_number: "022", description: "SONY CHANNEL" },
            { assigned_number: "023", description: "INC TV" },
            { assigned_number: "024", description: "CHANNEL NEW ASIA" },
            { assigned_number: "025", description: "NBA PREMIUM PAY" },
            { assigned_number: "026", description: "MYX" },
            { assigned_number: "027", description: "2ND AVENUE" },
            { assigned_number: "028", description: "CNN" },
            { assigned_number: "029", description: "ETC" },
            { assigned_number: "030", description: "FOX SPORTS" },
            { assigned_number: "031", description: "HBO" },
            { assigned_number: "032", description: "JACK TV" },
            { assigned_number: "033", description: "IBC13" },
            { assigned_number: "034", description: "FOX SPORTS" },
            { assigned_number: "035", description: "CCTV" },
            { assigned_number: "036", description: "FOX MOVIES" },
            { assigned_number: "037", description: "CARTOON NETWORK" },
            { assigned_number: "038", description: "DISCOVERY CHANNEL" },
            { assigned_number: "039", description: "VIVA" },
            { assigned_number: "040", description: "TRAVEL AND LIVING" },
            { assigned_number: "041", description: "ANC" },
            { assigned_number: "042", description: "ABS-CBN 2" },
            { assigned_number: "043", description: "DIVA UNIVERSAL" },
            { assigned_number: "044", description: "ABS-CBN PAM" },
            { assigned_number: "045", description: "HERO" },
            { assigned_number: "046", description: "HYPER SD" },
            { assigned_number: "047", description: "JEEPNEY TV" },
            { assigned_number: "048", description: "FOX CHANNEL" },
            { assigned_number: "049", description: "BABY FIRST TV" },
            { assigned_number: "050", description: "CT" },
            { assigned_number: "051", description: "RADIO MARIA" },
            { assigned_number: "052", description: "TV MARIA" },
            { assigned_number: "053", description: "IBC13" },
            { assigned_number: "054", description: "EI" },
            { assigned_number: "055", description: "LIFETIME ASIA" },
            { assigned_number: "056", description: "CIN" },
            { assigned_number: "057", description: "AKSYON TV" },
            { assigned_number: "058", description: "FOX FILIPINO" },
            { assigned_number: "059", description: "NAT GEO WILD" },
            { assigned_number: "060", description: "LIGHT NETWORK" },
            { assigned_number: "061", description: "SMNI" },
            { assigned_number: "062", description: "HISTORY CHANNEL" },
            { assigned_number: "063", description: "GNN" },
            { assigned_number: "064", description: "FASHION TV" },
            { assigned_number: "065", description: "NICKELODEON" },
            { assigned_number: "066", description: "DISNEY CHANNEL" },
            { assigned_number: "067", description: "AXN" },
            { assigned_number: "068", description: "STAR CHANNEL JAPAN" },
            { assigned_number: "069", description: "FOX NEWS" },
            { assigned_number: "070", description: "ANIMAL PLANET" },
            { assigned_number: "071", description: "BASKETBALL TV" },
            { assigned_number: "072", description: "CRIME INVESTIGATION" },
            { assigned_number: "073", description: "SOLAR SPORTS" },
            { assigned_number: "074", description: "BLOOMBERG" },
            { assigned_number: "075", description: "HLN" },
            { assigned_number: "076", description: "FYI" },
            { assigned_number: "077", description: "PBA RUSH" },
            { assigned_number: "078", description: "TRU TV" },
            { assigned_number: "079", description: "FOX ACTION MOVIES" },
            { assigned_number: "080", description: "EUROSPORT SD" },
            { assigned_number: "081", description: "DISCOVERY SCIENCE" },
            { assigned_number: "082", description: "WARNER TV" },
            { assigned_number: "083", description: "OUTDOOR CHANNEL" },
            { assigned_number: "084", description: "ANIMAX" },
            { assigned_number: "085", description: "DISCOVERY WORLD SD" },
            { assigned_number: "086", description: "COMEDY CENTRAL" },
            { assigned_number: "087", description: "HISTORY" },
            { assigned_number: "088", description: "MY CINEMA" },
            { assigned_number: "089", description: "NAT GEO PEOPLE" },
            { assigned_number: "090", description: "RTL CBS ENTERTAINMENT" },
            { assigned_number: "091", description: "DISNEY JUNIOR" },
            { assigned_number: "092", description: "KIX" },
            { assigned_number: "093", description: "LIFESTYLE CHANNEL" },
            { assigned_number: "094", description: "DWTV" },
            { assigned_number: "095", description: "PHOENIX CHINESE CHANNEL" },
            { assigned_number: "096", description: "CTV (TAIWAN)" },
            { assigned_number: "097", description: "TTV (TAIWAN)" },
            { assigned_number: "098", description: "STAR CHINESE MOVIE" },
            { assigned_number: "099", description: "XING KONG (CHINA)" },
            { assigned_number: "100", description: "BS PREMIUM (JAPAN)" },
            { assigned_number: "101", description: "C TS (TAIWAN)" },
            { assigned_number: "102", description: "TV5 MONDE AISE" },
            { assigned_number: "103", description: "TVE (SPAIN)" },
            { assigned_number: "104", description: "YTN (KOREA)" },
            { assigned_number: "105", description: "STAR UTSAV" },
            { assigned_number: "106", description: "KALAGNAR TV" },
            { assigned_number: "107", description: "CCTV NEWS" },
            { assigned_number: "108", description: "ARIRANG (KOREA)" },
            { assigned_number: "109", description: "SAUDI ARABIAN" },
            { assigned_number: "110", description: "AUSTRALIA PLUS" },
            { assigned_number: "111", description: "ALIZEERA" },
            { assigned_number: "112", description: "PINOY EXTREME" },
            { assigned_number: "113", description: "SCREEN RED" },
            { assigned_number: "114", description: "TMC" },
            { assigned_number: "115", description: "FUJI TV" },
            { assigned_number: "116", description: "NHK WORLD" },
            { assigned_number: "117", description: "THRILL" },
            { assigned_number: "118", description: "CHANNEL M" },
            { assigned_number: "119", description: "BST JAPAN" },
            { assigned_number: "120", description: "FUJI AN" },
        ],
        hd_channels: [
            { assigned_number: "001", description: "FOX SPORTS 3 HD" },
            { assigned_number: "002", description: "FOX FAMILY MOVIES HD" },
            { assigned_number: "003", description: "NATIONAL GEOGRAPHIC HD" },
            { assigned_number: "004", description: "NAT GEO WILD" },
            { assigned_number: "005", description: "NAT GEO PEOPLE HD" },
            { assigned_number: "006", description: "OUTDOOR CHANNEL HD" },
            { assigned_number: "007", description: "FOX CRIME" },
            { assigned_number: "008", description: "FX HD" },
            { assigned_number: "009", description: "BABY TV" },
            { assigned_number: "010", description: "CI HD" },
            { assigned_number: "011", description: "RTL CBS ENTERTAINMENT" },
            { assigned_number: "012", description: "CNN HD" },
            { assigned_number: "013", description: "COMEDY CENTRAL" },
            { assigned_number: "014", description: "COLOURS HD" },
            { assigned_number: "015", description: "NHK WORLD HD" },
            {
                assigned_number: "016",
                description: "PHOENIX CHINESE CHANNEL HD",
            },
            { assigned_number: "017", description: "NHK WORLD 2 HD" },
            { assigned_number: "018", description: "FOX MOVIES" },
            { assigned_number: "019", description: "FOX SPORTS HD" },
            { assigned_number: "020", description: "CTV3 HD" },
            { assigned_number: "021", description: "BOOMERANG" },
            { assigned_number: "022", description: "CLASSICA HD" },
            { assigned_number: "023", description: "MTV LIVE HD" },
            { assigned_number: "024", description: "HBO HD" },
            { assigned_number: "025", description: "NBA PREMIUM HD" },
            { assigned_number: "026", description: "AMC HD" },
            { assigned_number: "027", description: "SUNDANCE CHANNEL" },
            { assigned_number: "028", description: "CINIMAX HD" },
            { assigned_number: "029", description: "FOX SPORTS 2 HD" },
            { assigned_number: "030", description: "CHANNEL NEWS HD" },
            { assigned_number: "031", description: "DISCOVERY CHANNEL HD" },
            { assigned_number: "032", description: "TLC HD" },
            { assigned_number: "033", description: "NICKELODEON HD" },
            { assigned_number: "034", description: "FYI" },
            { assigned_number: "035", description: "HISTORY HD" },
            { assigned_number: "036", description: "MOTORVISION" },
            { assigned_number: "037", description: "HBO HITS" },
            { assigned_number: "038", description: "HBO SIGNATURE" },
            { assigned_number: "039", description: "HBO FAMILY" },
            { assigned_number: "040", description: "RTL CBS EXTREME HD" },
            { assigned_number: "041", description: "FIGHT SPORTS" },
            { assigned_number: "042", description: "FOX ACTION MOVIES HD" },
            { assigned_number: "043", description: "RED HD" },
            { assigned_number: "044", description: "WARNER TV HD" },
            { assigned_number: "045", description: "TRU TV HD" },
            { assigned_number: "046", description: "ANIMAL PLANET" },
            { assigned_number: "047", description: "HYPER HD" },
            { assigned_number: "048", description: "FTV ASIA HD" },
            { assigned_number: "049", description: "HITS HD" },
            { assigned_number: "050", description: "PBA RUSH ID" },
            { assigned_number: "051", description: "EURO SPORTS HD" },
            { assigned_number: "052", description: "STAR CHINESE MOVIES HD" },
            { assigned_number: "053", description: "BS FUJI HD" },
            { assigned_number: "054", description: "BS 1 HD" },
        ],
    };

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
                    <ul className="grid-list px-4">
                        {channels.sd_channels.map(
                            ({ assigned_number, description }, index) => {
                                return (
                                    <Link
                                        to="/channel"
                                        key={index}
                                        className="border p-3 ps-4 mb-1 d-flex align-items-center"
                                    >
                                        <div className="d-flex flex-shrink-1">
                                            {assigned_number}
                                        </div>
                                        <div className="border-start ps-3 ms-3 d-flex w-100">
                                            {description}
                                        </div>
                                    </Link>
                                );
                            }
                        )}
                    </ul>

                    <p className="fs-4 text-navy">HIGH DEFINITION CHANNELS</p>
                    <ul className="grid-list px-4">
                        {channels.hd_channels.map(
                            ({ assigned_number, description }, index) => {
                                return (
                                    <Link
                                        to="/channel"
                                        key={index}
                                        className="border p-3 ps-4 mb-1 d-flex align-items-center"
                                    >
                                        <div className="d-flex flex-shrink-1">
                                            {assigned_number}
                                        </div>
                                        <div className="border-start ps-3 ms-3 d-flex w-100">
                                            {description}
                                        </div>
                                    </Link>
                                );
                            }
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Channels;
