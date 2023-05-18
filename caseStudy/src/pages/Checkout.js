import LayoutMaster from '../layouts/LayoutMaster';
import React, { useState } from 'react';
import axios from 'axios';

function Checkout() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Gửi thông tin đơn hàng lên server
      const response = await axios.post('/order', {
        formData,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <LayoutMaster>
      <div className="container-fluid bg-secondary mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 300 }}>
          <h1 className="font-weight-semi-bold text-uppercase mb-3">Checkout</h1>
          <div className="d-inline-flex">
            <p className="m-0"><a href="/">Home</a></p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Checkout</p>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div className="col-lg-8">
            <div className="mb-4">
              <h4 className="font-weight-semi-bold mb-4">Địa chỉ giao hàng</h4>
              <div className="row">
                <form onSubmit={handleSubmit} className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Họ và tên:</label>
                    <input type="text" id="name" name="name" className="form-control" onChange={handleInputChange} value={formData.name} />
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" className="form-control" onChange={handleInputChange} value={formData.email} />
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="phone">Số điện thoại:</label>
                    <input type="text" id="phone" name="phone" className="form-control" onChange={handleInputChange} value={formData.phone} />
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="address">Địa chỉ:</label>
                    <input type="text" id="address" name="address" className="form-control" onChange={handleInputChange} value={formData.address} />
                  </div>

                  <div className="form-group col-md-12">
                    <div className="d-flex justify-content-end">
                      <button type="submit" className="btn btn-primary">Đặt hàng</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutMaster>

  );
}

export default Checkout;