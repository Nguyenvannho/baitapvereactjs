import React, { useState } from 'react';
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import * as Yup from "yup";
import BookModel from '../models/BookModel';

const rules = Yup.object().shape({
    name: Yup.string().required('Truong yeu cau').min(3, 'Toi thieu 3 ky tu').max(255, 'Toi da 255'),
  });
  function BookEdit(props) {
    const navigate = useNavigate();
  
    const [formData, setFormData] = useState({
      name: ''
    })
     
        const [books, setBooks] = useState([]);
        const [formErrors, setFormErrors] = useState([]);

        const handleSubmit = (values) => {
          BookModel.store(values)
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
              
          // Làm rỗng formik
        };
        
        const handleAddSuccess = () => {
          Swal.fire({
            icon: 'success',
            title: 'Chỉnh sửa sản phẩm thành công!',
            showConfirmButton: false,
            timer: 1500
          });
        };
          
          return (
            <div>
              <h1>Chỉnh sửa sách</h1>
              <Formik
                initialValues={formData}
                validationSchema={rules}
                onSubmit={(values) => handleSubmit(values)}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="form-group">
                      <label htmlFor="name">Chỉnh sửa sách</label>
                      <Field name="name" className="form-control" />
                      {errors.name && touched.name ? (
                        <div className="text-danger">{errors.name}</div>
                      ) : null}
                    </div>
                    <button type="submit" className="btn btn-primary">Lưu</button>
                  </Form>
                )}
              </Formik>
            </div>
          );
        }
        
        export default BookEdit;