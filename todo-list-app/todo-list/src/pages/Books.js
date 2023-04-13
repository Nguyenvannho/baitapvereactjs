import React, { useEffect, useState } from "react";
import BookModel from "../models/BookModel";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function Books(props) {
  
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    useEffect(() => {
      
      
      BookModel.getAll()
        .then((res) => {
        setBooks(res.data);
        })
        .catch((err) => {
          throw err;
        });
    }, []);
    const handleDelete = (id) => {
        Swal.fire({
          title: 'Bạn có chắc muốn xóa không?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Có',
          cancelButtonText: 'Không',
        }).then((result) => {
          if (result.isConfirmed) {
            BookModel.delete(id)
              .then((res) => {
                Swal.fire({
                  icon: 'success',
                  title: 'Xóa thành công!',
                  showConfirmButton: false,
                  timer: 1500
                });
                setBooks(books.filter((book) => book.id !== id));
              })
              .catch((err) => {
                console.log(err);
                alert("Đã có lỗi xảy ra!");
              });
          }
        });
      };
      return (
        <div>
        <Link to={"/book/create"} className="btn btn-warning">Thêm mới</Link><br />
          <table border={1} width={"100%"} class="table">
            
            <thead>
              
              <tr>
                
                <th> Mã sách </th>
                <th> Tên sách </th>
                <th> Action </th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, key) => (
                <tr key={key}>
                  <td>{book.id}</td>
                  <td>{book.name}</td>
                  <td>
                    <Link to={"/book/" + book.id} className="btn btn-success">Xem</Link>|
                    <Link to={"/book/" + book.id + "/edit"} className="btn btn-primary">Sửa</Link>
                    <button className="btn btn-danger" onClick={() => handleDelete(book.id)}>Xóa</button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    
    export default Books;
