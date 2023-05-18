import React, { useEffect, useState } from "react";
import CartModel from "../models/CartModel";
import LayoutMaster from "../layouts/LayoutMaster";
import Swal from "sweetalert2";



function Cart(props) {
  const image = "http://127.0.0.1:8000/";
  const [products, setProducts] = useState([]);
  const totalAll = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  const totalCount = products.reduce((count, product) => {
    return count + product.quantity;
  }, 0);

  useEffect(() => {
    CartModel.getAll()
      .then((res) => {
        setProducts(res);
        // console.log(res);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  const handleQty = (e, key) => {
    const updatedProducts = [...products];
    updatedProducts[key].quantity = parseInt(e.target.value);
    setProducts(updatedProducts);
  };
  const handleRemove = (id) => {
    Swal.fire({
      title: 'Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
    }).then((result) => {
      if (result.isConfirmed) {
        CartModel.remove(id)
          .then((res) => {
            setProducts(res);
            console.log(res);
          })
          .catch((err) => {
            throw err;
          });
        Swal.fire({
          title: 'Sản phẩm đã được xóa khỏi giỏ hàng',
          icon: 'success',
        });
      }
    });
  };
  
  return (
    <LayoutMaster>

      <main id="MainContent" className="content-for-layout">
        <div className="cart-page mt-100">
          <div className="container">
            <div className="cart-page-wrapper">
              <div className="row">
                <div className="col-lg-7 col-md-12 col-12">
                  <table className="cart-table w-100">
                    <thead>
                      <tr>
                        <th className="cart-caption heading_18">Sản phẩm </th>
                        <th className="cart-caption heading_18" />
                        <th className="cart-caption text-center heading_18 d-none d-md-table-cell">
                          Số lượng
                        </th>

                        <th className="cart-caption text-end heading_18">
                          Tên sản phẩm và Giá tiền
                        </th>
                        <th className="cart-caption text-center heading_18 d-none d-md-table-cell">
                          Tổng tiền
                        </th>
                        <th className="cart-caption text-center heading_18 d-none d-md-table-cell">
                          Thao tác
                        </th>

                        <td>

                        </td>
                      </tr>
                    </thead>
                    {products.map((product, key) => (
                      <tbody>
                        <tr className="cart-item">
                          <td className="cart-item-media">
                            <div className="mini-img-wrapper">
                              <img
                                src={`${image}${product.image}`}
                                alt="img"
                                width="80"
                                height="80"
                              />

                            </div>
                          </td>
                          <h2 className="product-title custom-title" style={{ color: 'black', fontSize: '1.2rem', textAlign: 'center', marginTop: '10px', fontWeight: '400' }}>
                          </h2>


                          <td className="cart-item-quantity">
                            <input
                              className="form-control text-center me-3"
                              type="number"
                              value={product.quantity}
                              onChange={(e) => handleQty(e, key)}
                            />
                          </td>
                          <td className="cart-item-details">
                            <h2 className="product-title custom-title" style={{ color: "black", fontSize: "14px" }}>
                              {product.name} - {product.price.toLocaleString()} VNĐ
                            </h2>
                          </td>

                          <td className="cart-item-price text-end">
                            <div className="product-price">{(product.price * product.quantity).toLocaleString('vi-VN')} VNĐ</div>

                          </td>
                          <td className="text-center">
                            <button className="btn btn-sm btn-danger" onClick={() => handleRemove(product.id)}
>
                              <i className="fas fa-trash-alt"></i> Xóa
                            </button>
                          </td>
                        </tr>

                      </tbody>
                    ))}
                  </table>
                </div>
                <div className="col-lg-5 col-md-12 col-12">
                  <div className="cart-total-area">
                    <h3 className="cart-total-title d-none d-lg-block mb-0">
                      Tổng số giỏ hàng : {totalCount} Sản phẩm
                    </h3>
                    <div className="cart-total-box mt-4">
                      <div className="subtotal-item subtotal-box">
                        <h4 className="subtotal-title">Tổng phụ :</h4>
                        <p className="subtotal-value">465.00 VNĐ</p>
                      </div>
                      <div className="subtotal-item shipping-box">
                        <h4 className="subtotal-title">Phí ship hàng:</h4>
                        <p className="subtotal-value">10.0000 VNĐ</p>
                      </div>
                      <div className="subtotal-item discount-box">
                        <h4 className="subtotal-title">Giảm giá :</h4>
                        <p className="subtotal-value">100.0000 VNĐ</p>
                      </div>
                      <hr />
                      <div className="subtotal-item discount-box">
                        <h4 className="subtotal-title">Tổng tiền:</h4>
                        <p className="subtotal-value"><span class="vn-currency"> {totalAll.toLocaleString()}</span> VNĐ</p>
                      </div>
                      <p className="shipping_text">
                        Vận chuyển và thuế được tính khi tính toán . <br />
                        Cảm ơn bạn đã ủng hộ sản phẩm tại cửa hàng của chúng tôi .<br />
                        Chúc bạn có 1 ngày mới vui vẻ và tốt lành !!!
                      </p>
                      <div className="d-flex justify-content-center mt-4">
                        <a
                          href="/checkout"
                          className="position-relative btn-primary text-uppercase"
                        >
                          Đi đến phần tiến hành kiểm tra .
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </LayoutMaster>
  );
}

export default Cart;