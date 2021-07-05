import {
    ClipboardCheck,
    Journals,
    Nut,
    People,
    Person,
    Receipt,
    Grid3x3Gap,
    Tv,
} from "react-bootstrap-icons";
import Button from "../Button";

function Home() {
    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col">
                    <div className="row my-4 pt-4 px-4">
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
                            path="teams"
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
                            path="employees"
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
                            path="applications"
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
                            path="channels"
                        />
                        <Button
                            icon={
                                <ClipboardCheck
                                    color="white"
                                    size="8rem"
                                    className="mb-2"
                                />
                            }
                            title="REPORTS"
                            name="admin"
                            path="reports"
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
                            path="equipments"
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
                            path="plans"
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
                            path="notes"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
