import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BookModel from '../models/BookModel';

function BookShow(props) {
  const {id} = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    BookModel.find(id)
      .then(res => {
        setBook(res.data);
      })
      .catch(err => {
        throw err;
      });
  }, [id]);

  return (
    <div>
        <h1 style={{ color: "red", textAlign: "center" }}>Book Details</h1>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td>ID</td>
            <td>{book.id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{book.name}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BookShow;
