import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../components/header'
import Axios from "axios";
import "swiffy-slider/css"
import "./style.css"



import { swiffyslider } from 'swiffy-slider'
import All from '../components/all';
window.swiffyslider = swiffyslider;

const Profile = () => {
    const [data, setData] = useState();

    useEffect(async () => {
        try {
            let response = await Axios.get(`https://reqres.in/api/users`);
            setData(response);
            console.log(response.data.data[incomigNumber], "date is coming");
        } catch (err) {
            console.log('date is not coming');
        }
    }, []);

    let location = useLocation();
    // incomigNumber
    let incomigNumber = location.state.productName;


    window.addEventListener("load", () => {
        window.swiffyslider.init();
    });

    return (
        (data) ? (
            <All>
                <div className='container'>
                    <div className="row pt-5">
                        <div className="col-lg-4 col-sm-3 offset-lg-2">
                            <img src={data.data.data[incomigNumber].avatar} alt="Person picture" cclassName="userPicture" />
                        </div>
                        <div className="col-lg-4 col-sm-9">
                            <h1>ID: {data.data.data[incomigNumber].id}</h1>
                            <h1>Name: {data.data.data[incomigNumber].first_name}</h1>
                            <h1>Email: {data.data.data[incomigNumber].email}</h1>
                        </div>
                    </div>
                </div>
            </All>
        ) : (
            <All>
                <div className='container'>
                    <div className="row">
                        <div className="col-4 offset-4">
                                <h1 className="text-center">Error</h1>
                        </div>
                    </div>
                </div>
            </All>
        )
    )
}

export default Profile