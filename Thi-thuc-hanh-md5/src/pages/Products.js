import React, { useEffect, useState } from "react";
import ProductModel from "../models/ProductModel";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Products(props) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductModel.getAll()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Bạn có chắc muốn xóa sản phẩm này không?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Có",
      cancelButtonText: "Không",
    }).then((result) => {
      if (result.isConfirmed) {
        ProductModel.delete(id)
          .then((res) => {
            setProducts(products.filter((product) => product.id !== id));
            Swal.fire({
              icon: "success",
              title: "Xóa sản phẩm thành công",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Lỗi khi xóa sản phẩm",
              text: err.message,
            });
          });
      }
    });
  };

  return (
    <div> <hr/>
      <Link to={"/products/create"} className="btn btn-warning">
        Thêm sản phẩm
      </Link>
      <br />
      <table border={1} width={"100%"} style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th> Stt(#) </th>
            <th> Tên sản phẩm </th>
            <th>Giá(đ)</th>
            <th>Tồn kho</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, key) => (
            <tr key={key}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.inventory}</td>
              <td>
                <Link to={"/products/" + product.id} className="btn btn-success mr-2">Xem</Link>
                <Link to={"/products/" + product.id + "/edit"} className="btn btn-primary mr-2">Cập nhật</Link>
                <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>Xóa</button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
