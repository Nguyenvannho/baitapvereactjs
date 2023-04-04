import React, { useState } from 'react';
import { Formik } from 'formik';
import './App.css';

// const REGEX = {
//   email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
// };

// function App() {
//   const [form, setForm] = useState({});
//   const [errors, setErrors] = useState({});

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setForm((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleValidate = (values) => {
//     const newErrors = {};

//     if (!values.name) {
//       newErrors.name = 'Required';
//     }

//     if (!values.email) {
//       newErrors.email = 'Required';
//     } else if (!REGEX.email.test(values.email)) {
//       newErrors.email = 'Invalid email address';
//     }

//     if (!values.phone) {
//       newErrors.phone = 'Required';
//     }

//     return newErrors;
//   };

//   const handleSubmit = () => {
//     alert('Liên hệ đã được gửi đi!');
//   };

//   return (
//     <div>
//       <Formik
//         initialValues={form}
//         validate={handleValidate}
//         onSubmit={handleSubmit}
//       >
//         {({ values, errors, touched, handleSubmit, handleChange }) => (
//           <form onSubmit={handleSubmit}>
//             <label>
//               Name:
//               <input
//                 type="text"
//                 name="name"
//                 value={values.name || ''}
//                 onChange={handleChange}
//               />
//               {errors.name && touched.name && <div>{errors.name}</div>}
//             </label>
//             <label>
//               Email:
//               <input
//                 type="email"
//                 name="email"
//                 value={values.email || ''}
//                 onChange={handleChange}
//               />
//               {errors.email && touched.email && <div>{errors.email}</div>}
//             </label>
//             <label>
//               Phone:
//               <input
//                 type="tel"
//                 name="phone"
//                 value={values.phone || ''}
//                 onChange={handleChange}
//               />
//               {errors.phone && touched.phone && <div>{errors.phone}</div>}
//             </label>
//             <button type="submit">Submit</button>
//           </form>
//         )}
//       </Formik>
//     </div>
//   );
// }

//bt 3
// export default App;
// function App() {
//   const REGEX = {
//     email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//   };
//   const [form, setForm] = useState({});
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setForm({ ...form, [name]: value });
//   };
//   const handleValidate = (values) => {
//     const errors = {};
//     let hasEmail = false;
//     if (values.email) {
//       hasEmail = true;
//       if (!REGEX.email.test(values.email)) {
//         errors.email = 'Invalid email address';
//       }
//     } else {
//       errors.email = 'Required';
//     }
//     if (!values.title) {
//       errors.title = 'Required';
//     }
//     return errors;
//   };
//   const [errors, setErrors] = useState({});
//   const handleSubmit = (values) => {
//     alert('Contact added successfully!');
//   };

//   return (
//     <div className="App">
//       <h1>Contact Form</h1>
//       <Formik initialValues={form} onSubmit={handleSubmit} validate={handleValidate}>
//         {({ values, handleSubmit, handleChange, errors }) => (
//           <form onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="email">Email:</label>
//               <input type="email" id="email" name="email" onChange={handleChange} value={values.email || ''} />
//               {errors.email && <div>{errors.email}</div>}
//             </div>
//             <div>
//               <label htmlFor="title">Title:</label>
//               <input type="text" id="title" name="title" onChange={handleChange} value={values.title || ''} />
//               {errors.title && <div>{errors.title}</div>}
//             </div>
//             <button type="submit">Submit</button>
//           </form>
//         )}
//       </Formik>
//     </div>
//   );
// }

// export default App;

// bt 4
function App() {
  const SEX_LIST = [
    { label: 'Nam', value: 'male' },
    { label: 'Nữ', value: 'female' },
  ];
  const [form, setForm] = useState({});
  const handleChange = (event) => {
    const value = event.target.type === 'checkbox' ? !form[event.target.name] : event.target.value;
    setForm({ ...form, [event.target.name]: value });
  };
  const handleValidate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.number) {
      errors.number = 'Required';
    }
    if (!values.author) {
      errors.author = 'Required';
    }
    if (!values.sex) {
      errors.sex = 'Required';
    }
    return errors;
  };
  const [errors, setErrors] = useState({});
  const handleSubmit = (values) => {
    alert('Book added successfully!');
  };

  return (
    <div className="App">
      <h1>Book Form</h1>
      <Formik initialValues={form} onSubmit={handleSubmit} validate={handleValidate}>
        {({ values, handleSubmit, handleChange, errors }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" onChange={handleChange} value={values.name || ''} />
              {errors.name && <div className="error">{errors.name}</div>}
            </div>
            <div>
              <label htmlFor="number">Number:</label>
              <input type="text" id="number" name="number" onChange={handleChange} value={values.number || ''} />
              {errors.number && <div className="error">{errors.number}</div>}
            </div>
            <div>
              <label htmlFor="author">Author:</label>
              <input type="text" id="author" name="author" onChange={handleChange} value={values.author || ''} />
              {errors.author && <div className="error">{errors.author}</div>}
            </div>
            <div>
              <label htmlFor="sex">Sex:</label>
              {SEX_LIST.map((option) => (
                <label key={option.value}>
                  <input
                    type="radio"
                    name="sex"
                    value={option.value}
                    checked={values.sex === option.value}
                    onChange={handleChange}
                  />
                  {option.label}
                </label>
              ))}
              {errors.sex && <div className="error">{errors.sex}</div>}
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
      <h2>Book List</h2>
      {/* Render the list of books */}
    </div>
  );
}

export default App;



