import {
    PieChart,
    Journals,
    Nut,
    People,
    Person,
    Receipt,
    Grid3x3Gap,
    Tv,
} from "react-bootstrap-icons";
import Button from "../Button";
import NavbarPortal from "../NavbarPortal";

function Home() {
    return (
        <>
            <NavbarPortal title="ADMIN" name="admin" />
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col">
                        <div className="row my-4 pt-4 px-4 justify-content-center">
                            <Button
                                icon={
                                    <People
                                        color="white"
                                        size="8rem"
                                        className="mb-2"
                                    />
                                }
                                title="TEAMS"
                                name="admin"
                                path="/admin/teams"
                            />
                            <Button
                                icon={
                                    <Person
                                        color="white"
                                        size="8rem"
                                        className="mb-2"
                                    />
                                }
                                title="EMPLOYEES"
                                name="admin"
                                path="/admin/employees"
                            />
                            <Button
                                icon={
                                    <Receipt
                                        color="white"
                                        size="8rem"
                                        className="mb-2"
                                    />
                                }
                                title="APPLICATION"
                                name="admin"
                                path="/admin/applications"
                            />
                            <Button
                                icon={
                                    <Tv
                                        color="white"
                                        size="8rem"
                                        className="mb-2"
                                    />
                                }
                                title="CHANNELS"
                                name="admin"
                                path="/admin/channels"
                            />
                            <Button
                                icon={
                                    <PieChart
                                        color="white"
                                        size="8rem"
                                        className="mb-2"
                                    />
                                }
                                title="REPORTS"
                                name="admin"
                                path="/admin/reports"
                            />
                            <Button
                                icon={
                                    <Nut
                                        color="white"
                                        size="8rem"
                                        className="mb-2"
                                    />
                                }
                                title="EQUIPMENTS"
                                name="admin"
                                path="/admin/equipments"
                            />
                            <Button
                                icon={
                                    <Grid3x3Gap
                                        color="white"
                                        size="8rem"
                                        className="mb-2"
                                    />
                                }
                                title="PLANS"
                                name="admin"
                                path="/admin/plans"
                            />
                            <Button
                                icon={
                                    <Journals
                                        color="white"
                                        size="8rem"
                                        className="mb-2"
                                    />
                                }
                                title="MY NOTES"
                                name="admin"
                                path="/admin/notes"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
