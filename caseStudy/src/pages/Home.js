import React, { useEffect, useState } from "react";
import ProductModel from "../models/ProductModel";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../includes/Header";
import LayoutHome from '../layouts/LayoutHome';

function Home(props) {
    const image = "http://127.0.0.1:8000/";
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        ProductModel.getAll()
            .then((res) => {
                setProducts(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                throw err;
            });
    }, []);
    return (
        <LayoutHome>
            <>
                <div className="container-fluid pt-5">
                    <div className="text-center mb-4">
                        <h2 className="section-title px-5">
                            <span className="px-2">Sản phẩm thời trang </span>
                        </h2>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 px-xl-5 pb-3">
                        {products.map((product, key) => (
                            <div className="col" key={key}>
                                <div className="card product-item border-0 mb-4 h-100">
                                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                        <img className="img-fluid h-100 w-100 object-fit-cover" src={image + product.image} alt="" />
                                    </div>
                                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                        <h6 className="text-truncate mb-3">{product.name}</h6>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <h6>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}</h6>
                                        </div>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between bg-light border">

                                        <Link
                                            to={"/sanpham/" + product.id}
                                            className="fas fa-shopping-cart text-primary mr-1"
                                        >
                                            View Detail
                                        </Link>
                                        <Link
                                            to={"/cart"}
                                            className="fas fa-shopping-cart text-primary mr-1"
                                        >
                                             Add To Cart
                                        </Link>
                                        
                                        {/* <a href="" className="btn btn-sm text-dark p-0">
                                            <i className="fas fa-shopping-cart text-primary mr-1" />
                                            Add To Cart
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        </LayoutHome>
    );
}

export default Home;
