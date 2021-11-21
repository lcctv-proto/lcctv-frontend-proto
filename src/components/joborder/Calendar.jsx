import { useEffect, useState } from "react";

import api from "../../api/api";

function Calendar() {
    const [jos, setJOs] = useState([]);
    const nov = {
        third_week: [
            { date: "11/14/2021", jos: [] },
            { date: "11/15/2021", jos: [] },
            { date: "11/16/2021", jos: [] },
            { date: "11/17/2021", jos: [] },
            { date: "11/18/2021", jos: [] },
            { date: "11/19/2021", jos: [] },
            { date: "11/20/2021", jos: [] },
        ],
        fourth_week: [
            { date: "11/21/2021", jos: [] },
            { date: "11/22/2021", jos: [] },
            { date: "11/23/2021", jos: [] },
            { date: "11/24/2021", jos: [] },
            { date: "11/25/2021", jos: [] },
            { date: "11/26/2021", jos: [] },
            { date: "11/27/2021", jos: [] },
        ],
    };

    useEffect(() => {
        const fetchJobOrders = async () => {
            const res = await api.jo.get("");
            setJOs(
                res.data.map((jo) => {
                    return new Date(jo.jobDate).toLocaleDateString();
                })
            );

            for (let index = 0; index < nov.third_week.length; index++) {
                for (let jindex = 0; jindex < jos.length; jindex++) {
                    if (nov.third_week[index].date === jos[jindex])
                        nov.third_week[index].jos.push(jos[jindex]);
                }
            }

            for (let index = 0; index < nov.fourth_week.length; index++) {
                for (let jindex = 0; jindex < jos.length; jindex++) {
                    if (nov.fourth_week[index].date === jos[jindex])
                        nov.fourth_week[index].jos.push(jos[jindex]);
                }
            }

            // nov.third_week.map((val) => {
            //     val.jos.map((jo) => {
            //         console.log(jo);
            //     });
            // });
        };

        fetchJobOrders();
    }, [jos, nov.fourth_week, nov.third_week]);

    return (
        <>
            <table className="border calendar mx-auto fs-5">
                <thead>
                    <tr className="text-center text-light bg-navy">
                        <th className="bg-delete">SUN</th>
                        <th>MON</th>
                        <th>TUE</th>
                        <th>WED</th>
                        <th>THU</th>
                        <th>FRI</th>
                        <th className="bg-gold">SAT</th>
                    </tr>
                </thead>
                <tbody className="align-top">
                    {/* <a
                                class="d-block badge bg-danger mb-3"
                                href="#joborder"
                                data-bs-toggle="modal"
                                data-bs-target="#joborder"
                            >
                                <span class="d-block pb-1">TEAM C</span>
                                <span class="d-block border-top pt-1">
                                    RELOCATION
                                </span>
                            </a> */}
                    <tr>
                        <td className="not-this-month">31</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                    </tr>
                    <tr>
                        {jos &&
                            nov.third_week.map((val, index) => {
                                return (
                                    <td key={index}>
                                        {index + 14}

                                        {val.jos.map((jo) => {
                                            console.log("asd");
                                            return <>{jo}</>;
                                        })}
                                    </td>
                                );
                            })}
                    </tr>

                    <tr>
                        {nov.fourth_week.map((val, index) => {
                            return <td key={index}>{index + 21}</td>;
                        })}
                    </tr>

                    <tr>
                        <td>28</td>
                        <td>29</td>
                        <td>30</td>
                        <td class="not-this-month">1</td>
                        <td class="not-this-month">2</td>
                        <td class="not-this-month">3</td>
                        <td class="not-this-month">4</td>
                    </tr>
                </tbody>
            </table>
            <ul>
                {/* {jos.map((jo) => {
                    return (
                        <li>{`${jo.prefix}${jo.jo_ctr
                            .toString()
                            .padStart(3, "0")}`}</li>
                    );
                })} */}
            </ul>
        </>
    );
}

export default Calendar;
