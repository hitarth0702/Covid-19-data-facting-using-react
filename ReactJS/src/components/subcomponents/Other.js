import React, { useEffect, useState } from 'react';

function Other(){
    const [data, setData] = useState([]);
    const getOtherData = async () => {
        const res = await fetch('https://api.covid19api.com/summary');
        const actualData = await res.json();
        console.log(actualData.Countries);
        setData(actualData.Countries);
    }

    useEffect(() => {
        getOtherData();
    }, []);

    const head1 = {
        display: "flex",
        justifyContent:"center",
        marginTop:"50px"
    }

    return(
        <>
            <div>

                <h1 style={head1}>India Covid 19 Dashboard</h1>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Country</th>
                            <th>Slug</th>
                            <th>Date</th>
                            <th>TotalDeaths</th>
                            <th>CountryCode</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((curElem, ind) => {
                                return (
                                    <tr>
                                        <td>{curElem.ID}</td>
                                        <td>{curElem.Country}</td>
                                        <td>{curElem.Slug}</td>
                                        <td>{curElem.Date}</td>
                                        <td>{curElem.TotalDeaths}</td>
                                        <td>{curElem.CountryCode}</td>
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

export default Other;