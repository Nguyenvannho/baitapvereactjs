// import Link from 'next/link'
// import React from 'react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import Layout from "../components/Layout";
import styles from '../styles/Login.module.css';




// //Controller
// // Phương thức getStaticProps có thể được sử dụng bên trong một Page để lấy dữ liệu ngay tại thời điểm xây dựng
// export function getStaticProps(context) {
//   // fetch dữ liệu từ file system, API, DB,...
//   // const data = ...

//   // Giá trị của `props` sẽ được truyền tới component `Home`
//   return {
//     props: {
//       name : 'NVA',
//       age:18
//     }
//   }
// }
// Phương thức này lấy dữ liệu mỗi khi user gửi request lên hệ thống
/*
export async function getServerSideProps(context) {
  return {
    props: {
      // Giá trị props cho component của bạn
    },
  };
}
*/


//Vỉew
// function index(props) {
//   console.log(props);
//   return (
//     <div>
//       <Header/>
//        <ul>
//                 <li>
//                 <Link href="/about"> About</Link>
//                 </li>
//                 <li>
//                 <Link href="/contact"> Contact</Link>
//                 </li>
//             </ul>
//         <h1>Home</h1>
//         <Footer/>
//     </div>
//   );
// }
// export default index;


export default function Login() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.formContent}>
        <h2 className={styles.header}>Login</h2>
        <form>
          <div className={styles.inputContainer}>
            <label htmlFor="login" className={styles.label}>Username:</label>
            <input
              className={styles.input}
              type="text"
              id="login"
              name="login"
              placeholder="Enter your username"
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="password" className={styles.label}>Password:</label>
            <input
              className={styles.input}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className={styles.button}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}


