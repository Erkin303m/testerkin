import React, { useEffect, useState } from 'react';
import Header from '../../components/header'
import Axios from "axios";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";


let studentData = [
    {
        username: "string",
        password: "string",
        email: "string",
        roles: [
            "admin"
        ],
        profile: {
            firstname: "string",
            secondname: "string",
            lastname: "string",
            birthDate: "2022-03-01",
            phoneNumber: "string",
            gender: "string",
            passportData: "string"
        }
    }
]


const Login = () => {
    const navigate = useNavigate();

    const [data2, setData2] = useState();
    const [details, setDetails] = useState({ login: "", password: "" });
    let fullData = [];
    let number;


    const submitHandler = e => {
        e.preventDefault();
        Login(details);
        // console.log(e.target.value);
    }
    const onChangeFun = (value, type) => {
        console.log("value", value)
        studentData[type] = value
        // console.log("studentData", studentData)

    }

    useEffect(async () => {
        try {
            let response = await Axios.get(`https://reqres.in/api/users`);
            setData2(response);
        } catch (err) {
            console.log('error');
        }
    }, []);

    


    const Tekshirish = () => {
        for (let i = 0; i < data2.data.data.length; i++) {
            if (studentData.login == data2.data.data[i].first_name && studentData.password == data2.data.data[i].id) {
                console.log("password va login oxshadi");
                navigate('/profile', {
                    state: { productName: i }
                })

                Swal.fire({
                    title: 'Muvaffaqiyatli kirish!',
                    text: "Siz tizimga muvaffaqiyatli kirdingiz !",
                    icon: 'success',
                    timer: 2000,
                });

            } else {
                console.log("error")
            }



        }
    }

    return (
        <div>
            <Header />
            <div className='container'>
                <h1>Login qismi</h1>

                <div className="row">
                    <div className="col-lg-4 col-offset-4">

                        <input
                            placeholder="Name"
                            type="text"
                            id="ism"
                            defaultValue={fullData.login}
                            onChange={(i) => { onChangeFun(i.target.value, "login") }}
                            className="form-control" />

                        <input
                            placeholder="ID"
                            type="text"
                            id="password"
                            defaultValue={fullData.password}
                            onChange={(i) => { onChangeFun(i.target.value, "password") }}
                            className="form-control"

                        />

                        <button onClick={() => Tekshirish()} className="btn btn-primary">Tekshirish</button>

                    </div>
                </div>



            </div>
        </div>
    )
}

export default Login