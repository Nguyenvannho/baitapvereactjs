import React, { useEffect, useState } from "react";
import LayoutMaster from "../layouts/LayoutMaster";
import ProductModel from "../models/ProductModel";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_CART } from "../redux/action";
import Swal from 'sweetalert2';


function SanPhamShow(props) {
  const image = "http://127.0.0.1:8000/";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);
  const carts = useSelector((state) => state.cart);
  const formattedPrice =
    product?.price?.toLocaleString("vi-VN") || "Price not available";

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await ProductModel.find(id);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (event) => {
    setQty(event.target.value);
  };

  const handleAddToCart = async () => {
    const cart = {
      id: id,
      name: product.name,
      price: product.price,
      qty: qty,
    };
  
    try {
      const response = await fetch("http://127.0.0.1:8000/api/add_to_cart/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart),
      });
  
      const data = await response.json();
      console.log(data); // Ví dụ: { message: 'Sản phẩm đã được thêm vào giỏ hàng thành công!' }
  
      dispatch({ type: SET_CART, payload: [...carts, cart] });
  
      // Hiển thị SweetAlert thông báo thành công
      Swal.fire({
        icon: 'success',
        title: 'Thêm sản phẩm thành công',
        showConfirmButton: false,
        timer: 1500
      });
  
      navigate("/cart");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LayoutMaster>
      <div className="container-fluid bg-secondary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: 300 }}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            Shop Detail
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <a href="/">Home</a>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Shop Detail</p>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="row px-xl-5">
          <div className="col-lg-5 pb-5">
            <div
              id="product-carousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner border">
                <div className="carousel-item active">
                  <img
                    alt="website template image"
                    src={`${image}${product.image}`}
                    className="img-fluid"
                  />


                </div>
              </div>

              <a
                className="carousel-control-prev"
                href="#product-carousel"
                data-slide="prev"
              >
                <i className="fa fa-2x fa-angle-left text-dark" />
              </a>
              <a
                className="carousel-control-next"
                href="#product-carousel"
                data-slide="next"
              >
                <i className="fa fa-2x fa-angle-right text-dark" />
              </a>
            </div>
          </div>
          <div className="col-lg-7 pb-5">
            <h2 className="font-weight-semi-bold text-uppercase mb-3">
              {product.name}
            </h2>
            <p className="font-weight-semi-bold text-danger mb-3">
              {formattedPrice}
            </p>
            <p className="font-weight-semi-bold text-uppercase mb-3">
              Mô tả sản phẩm :
            </p>
            <p>{product.description}</p>
            <hr />
            <div className="d-flex">
              <p className="font-weight-semi-bold text-uppercase">Quantity:</p>
              <input
                type="number"
                className="form-control ml-3 w-25"
                value={qty}
                min={1}
                onChange={handleChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary mt-3"
              onClick={handleAddToCart}
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </LayoutMaster>
  );
}

export default SanPhamShow;    