import React from 'react'
import Header from '../../components/header'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { HiShoppingCart, HiOutlineShoppingCart } from 'react-icons/hi';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './style.css'


const Home = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.shoes);

    const Like = (i) => {
        const action = { type: "LIKE_TASK", payload: i };
        dispatch(action);
        console.log(action.payload);
    }

    const Korzina = (i) => {
        const action = { type: "KORZINA_TASK", payload: i };
        dispatch(action);
        console.log(action.payload);
    }

    return (
        <div>
            <Header />
            <Carousel className="carusel">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e26f39f0-beaa-4a76-a6b7-ce63e3783d42/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-force-1-gtx-wnHhpN.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/y6mhh5nrdijyermvytoi/air-max-command-mens-shoe-q1wWgX.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://static.nike.com/a/images/t_PDP_1280_v1/ccca4dd5-9ded-48b3-9fda-bfdc8bf82e2a/react-vision-prm-3m%E2%84%A2-ayakkab%C4%B1s%C4%B1-7LsHZv.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://static.nike.com/a/images/t_PDP_1280_v1/ccca4dd5-9ded-48b3-9fda-bfdc8bf82e2a/react-vision-prm-3m%E2%84%A2-ayakkab%C4%B1s%C4%B1-7LsHZv.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className='container'>
                <div className="row pt-5 mt-5">
                    <h1 className="mainText">Beautiful sneakers</h1>




                    {data.map((v, i) => {
                        return <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={i}>
                            <div className='card p-1'>
                                <img src={v.img} alt="" />
                                <p className='text-success fw-bold text-center'>{v.name}</p>
                                <div className="d-flex justify-content-between">

                                    <button className='btn btn-success' onClick={() => Korzina(i)} >

                                        <span className={v.korzina ? "d-none" : "d-block"}><HiOutlineShoppingCart /></span>
                                        <span className={v.korzina ? "d-block" : "d-none"}><HiShoppingCart /></span>
                                    </button>
                                    <button className='btn btn-outline-danger' onClick={() => Like(i)} >
                                        <span className={v.like ? "d-none" : "d-block"}><AiOutlineHeart /></span>
                                        <span className={v.like ? "d-block" : "d-none"}><AiFillHeart /></span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    })}

                </div>
                <h1>home qismi</h1>
                <Link to="profile">
                    <button className='btn btn-primary'>Keyingi page ga o'tish</button>

                </Link>
            </div>

        </div>

    )
}

export default Home