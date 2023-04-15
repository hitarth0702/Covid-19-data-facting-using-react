import React, { useEffect, useState } from 'react';

function WIP() {
    const [data, setData] = useState([]);

    const getWIPData = async () => {
        const res = await fetch('https://api.covid19api.com/summary');
        const actualData = await res.json();
        console.log(actualData.Countries);
        setData(actualData.Countries);
    }

    useEffect(() => {
        getWIPData();
    }, []);

    const head1 = {
        display: "flex",
        justifyContent: "center",
        marginTop: "50px"
    }
    return (
        <>
            <div>

                <h1 style={head1}>India Covid 19 Dashboard</h1>

                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>NewConfirmed</th>
                            <th>NewDeaths</th>
                            <th>TotalDeaths</th>
                    
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((curElem, ind) => {
                                return (
                                    <tr>
                                        <td>{curElem.Date}</td>
                                        <td>{curElem.NewConfirmed}</td>
                                        <td>{curElem.NewDeaths}</td>
                                        <td>{curElem.TotalDeaths}</td>
                                
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>

            </div>
        </>
    );

}
export default WIP;