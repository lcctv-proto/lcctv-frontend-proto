//module imports
import { Receipt, Tools, Pen } from "react-bootstrap-icons";

// component imports
import Button from "../Button";
import NavbarPortal from "../NavbarPortal";

function Home() {
    const buttons = [
        {
            icon: <Receipt color="white" size="8rem" className="mb-2" />,
            title: "APPLICATIONS",
            name: "front",
            path: "/frontdesk/applications",
            count: 3,
        },
        {
            icon: <Tools color="white" size="8rem" className="mb-2" />,
            title: "INQUIRIES",
            name: "front",
            path: "/frontdesk/inquiries",
            count: 3,
        },
        {
            icon: <Pen color="white" size="8rem" className="mb-2" />,
            title: "ACCOUNTS",
            name: "front",
            path: "/frontdesk/accounts",
            count: 1,
        },
    ];
    return (
        <>
            <NavbarPortal title="FRONT DESK" name="front" user="FrontDesk123" />
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col">
                        <div className="row my-4 pt-4 px-4 justify-content-center">
                            {buttons.map(
                                ({ icon, title, name, path, count }, index) => {
                                    return (
                                        <Button
                                            icon={icon}
                                            title={title}
                                            name={name}
                                            path={path}
                                            count={count}
                                            key={index}
                                        />
                                    );
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
