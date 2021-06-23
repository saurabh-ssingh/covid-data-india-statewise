import React,{useEffect,useState} from 'react'

const StateData = () =>{

    const [data,setData]=useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }

    useEffect(() => {
        getCovidData();
    }, [])
    return(
        <>
            <div className = "container-fluid mt-5">
                
                <h1 className = "text-center mb-5">StateWise Covid19 Data <span className = "font-weight-bold">India</span></h1>
                <div className = "table-responsive">
                    <table className = "table table-hover">

                        <thead className = "thead-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                data.map((currEle,ind)=>{
                                    return(
                                        <tr key = {ind}>
                                            <th>{currEle.state}</th>
                                            <th>{currEle.confirmed}</th>
                                            <th>{currEle.recovered}</th>
                                            <th>{currEle.recovered}</th>
                                            <th>{currEle.deaths}</th>
                                            <th>{currEle.active}</th>
                                            <th>{currEle.updated}</th>
                                        </tr>
                                    )

                                })
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    )
}

export default StateData