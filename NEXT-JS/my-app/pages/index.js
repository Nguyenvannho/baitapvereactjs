// import Link from 'next/link'
// import React from 'react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
import Layout from "../components/Layout";


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

export default function Home() {
  return (
    <Layout>
      <h1>Homepage</h1>
    </Layout>
  );
}

