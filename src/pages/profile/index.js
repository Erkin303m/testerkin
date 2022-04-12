import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
// import All from '../../components/all'
import Header from '../../components/header'
import Axios from "axios";
import "swiffy-slider/css"



import { swiffyslider } from 'swiffy-slider'
window.swiffyslider = swiffyslider;

const Profile = () => {
    const [data, setData] = useState();

    useEffect(async () => {
        try {
            let response = await Axios.get(`https://reqres.in/api/users`);
            setData(response);
            console.log(response.data.data[incomigNumber].email, "date is coming");
        } catch (err) {
            console.log('date is not coming');
        }
    }, []);

    let location = useLocation();
    let incomigNumber = location.state.productName;

    // let mainData = data.data.data[incomigNumber];

    window.addEventListener("load", () => {
        window.swiffyslider.init();
    });

    return (
        (data) ? (
            <div>

                <Header />
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-4 col-sm-3">
                            <img src="" alt="Person picture" />
                        </div>
                        <div className="col-lg-8 col-sm-9">
                            <h1>{data.data.data[incomigNumber].id}</h1>
                            <h1>{data.data.data[incomigNumber].email}</h1>
                        </div>
                    </div>
                   
                </div>
            </div>
        ) : (
            <div>
                <Header />
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-4 col-sm-3">
                            <img src="" alt="Person picture" />
                        </div>
                        <div className="col-lg-8 col-sm-9">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptas unde autem suscipit provident omnis! Quae consectetur exercitationem nobis recusandae eos enim corrupti quod minus porro veniam, optio sunt reiciendis.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default Profile