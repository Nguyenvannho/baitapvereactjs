// import Link from 'next/link'
// import React from 'react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
import styles from "../styles/Home.module.css";
import { getStudents } from "./mock-data/data";
import Link from "next/link";

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

//Thực hành và bài tập
// import Layout from "./layout";

// function Home() {
//   return (
//     <Layout>
//       <h1>Homepage</h1>
//     </Layout>
//   );
// }


// export default Home;



export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
              <th className={styles.th}>ID</th>
              <th className={styles.th}>Name</th>
              <th className={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {getStudents().map(student => (
              <tr className={styles.tr} key={student.id}>
                <td className={styles.td}>{student.id}</td>
                <td className={styles.td}>{student.name}</td>
                <td className={styles.td}>
                  <Link href={`/student/${encodeURIComponent(student.id)}`}>
                    Show
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}