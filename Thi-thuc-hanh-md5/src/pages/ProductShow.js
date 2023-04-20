import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductModel from '../models/ProductModel';

function ProductShow(props) {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    ProductModel.find(id).then(res => {
      setProduct(res.data);
    }).catch(err => {
      throw err;
    });
  }, [id]);

  return (
    <div>
      <h1>Xem Chi Tiết Sản Phẩm</h1>
      <form>
        <div className="mb-3">
          <label className="form-label product-table__header">Id(#)</label>
          <input type="text" className="form-control" value={product.id} readOnly />
        </div>
        <div className="mb-3">
          <label className="form-label product-table__header">Tên sản phẩm :</label>
          <input type="text" className="form-control" value={product.name} readOnly />
        </div>
        <div className="mb-3">
          <label className="form-label product-table__header">Giá(đ) :</label>
          <input type="text" className="form-control" value={product.price} readOnly />
        </div>
        <div className="mb-3">
          <label className="form-label product-table__header">Tồn kho :</label>
          <input type="text" className="form-control" value={product.inventory} readOnly />
        </div>
        <div className="mb-3">
          <label className="form-label product-table__header">Mô tả sản phẩm :</label>
          <textarea className="form-control" value={product.description} readOnly />
        </div>
        <Link to="/" className="btn btn-info">Quay lại</Link>

      </form>
    </div>
  );
}

export default ProductShow;
