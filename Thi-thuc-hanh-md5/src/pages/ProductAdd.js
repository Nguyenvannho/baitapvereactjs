import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Swal from 'sweetalert2';
import ProductModel from '../models/ProductModel';

const rules = Yup.object().shape({
  name: Yup.string().required('Vui lòng nhập tên sản phẩm').min(3, 'Tên sản phẩm phải có ít nhất 3 kí tự').max(255, 'Tên sản phẩm tối đa 255 kí tự'),
  price: Yup.number().required('Vui lòng nhập giá sản phẩm').positive('Giá sản phẩm phải lớn hơn 0'),
  inventory: Yup.number().required('Vui lòng nhập số lượng sản phẩm').positive('Số lượng sản phẩm phải lớn hơn 0'),
  description: Yup.string().max(1000, 'Mô tả sản phẩm tối đa 1000 kí tự')

});

function ProductAdd() {
  const navigate = useNavigate();

  const formData = {
    name: '',
    price: '',
    inventory: '',
    description: ''
  };

  const handleSubmit = (values) => {
    ProductModel.store(values)
      .then((res) => {
        navigate("/");
        handleAddSuccess();
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Có lỗi xảy ra khi thêm sản phẩm!',
          text: err.message,
        });
      });
  };
  const handleAddSuccess = () => {
    Swal.fire({
      icon: 'success',
      title: 'Thêm sản phẩm thành công!',
      showConfirmButton: false,
      timer: 1500
    });
  };
  
  return (
    <div className="container mt-3">
    <h1>Thêm mới sản phẩm</h1>
    <Formik
      enableReinitialize={true}
      initialValues={formData}
      validationSchema={rules}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="form-group">
            <label>Tên sản phẩm</label>
            <Field className={`form-control ${touched.name && errors.name ? 'is-invalid' : ''}`} name="name" type="text" />
            <ErrorMessage name="name" component="div" className="invalid-feedback" />
          </div>
          <div className="form-group">
            <label>Giá (đ)</label>
            <Field className={`form-control ${touched.price && errors.price ? 'is-invalid' : ''}`} name="price" type="number" />
            <ErrorMessage name="price" component="div" className="invalid-feedback" />
          </div>
          <div className="form-group">
            <label>Tồn kho</label>
            <Field className={`form-control ${touched.inventory && errors.inventory ? 'is-invalid' : ''}`} name="inventory" type="number" />
            <ErrorMessage name="inventory" component="div" className="invalid-feedback" />
          </div>
          <div className="form-group">
            <label>Mô tả sản phẩm</label>
            <Field className={`form-control ${touched.description && errors.description ? 'is-invalid' : ''}`} name="description" type="text" />
            <ErrorMessage name="description" component="div" className="invalid-feedback" />
          </div>
          <div className="form-group text-center">
            <button type="submit" className="btn btn-primary">Thêm mới</button>
            <Link to="/" className="btn btn-success">Quay lại</Link>
          </div>
        </Form>
      )}
    </Formik>
  </div>
  );
}

export default ProductAdd;
