import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

import ProductModel from '../models/ProductModel';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Trường yêu cầu').min(3, 'Tối thiểu 3 kí tự').max(255, 'Tối đa 255 kí tự'),
  price: Yup.number().required('Vui lòng nhập giá sản phẩm').positive('Giá sản phẩm phải lớn hơn 0'),
  inventory: Yup.number().required('Vui lòng nhập số lượng sản phẩm').positive('Số lượng sản phẩm phải lớn hơn 0'),
  description: Yup.string().required('Trường yêu cầu'),
});

function ProductUpdate() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    inventory: '',
    description: '',

  });

  useEffect(() => {
    ProductModel.find(id)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleSubmit = (values) => {
    ProductModel.update(id, values)
      .then((res) => {
        navigate("/");
        handleEditSuccess();
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Có lỗi xảy ra khi chỉnh sửa!',
          text: err.message,
        });
      });
  };

  const handleEditSuccess = () => {
    Swal.fire({
      icon: 'success',
      title: 'Cập nhật sản phẩm thành công!',
      showConfirmButton: false,
      timer: 1500
    });
  };
  return (
    <div>
      <h1>Cập nhật sản phẩm</h1>
      <Formik
        enableReinitialize={true}
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-field">
              <label>Tên sản phẩm</label>
              <Field
                name="name"
                type="text"
                className={`${errors.name && touched.name ? 'is-invalid' : ''
                  }`}
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="form-field">
              <label>Giá (đ)</label>
              <Field
                name="price"
                type="number"
                className={`${errors.price && touched.price ? 'is-invalid' : ''
                  }`}
              />
              <ErrorMessage name="price" component="div" className="error" />
            </div>
            <div className="form-field">
              <label>Tồn kho</label>
              <Field
                name="inventory"
                type="number"
                className={`${errors.inventory && touched.inventory ? 'is-invalid' : ''
                  }`}
              />
              <ErrorMessage
                name="inventory"
                component="div"
                className="error"
              />
            </div>
            <div className="form-field">
              <label>Mô tả</label>
              <Field
                name="description"
                type="text"
                className={`${errors.description && touched.description ? 'is-invalid' : ''
                  }`}
              />
              <ErrorMessage name="description" component="div" className="error" />
            </div>
            <button type="submit" className="btn btn-primary">Lưu lại</button>
            <Link to="/" className="btn btn-success">Quay lại</Link>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ProductUpdate;
