// import Link from 'next/link'
// import React from 'react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import Layout from "../components/Layout";
// import styles from '../styles/Login.module.css';
import axios from 'axios';





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
export async function getStaticProps() {
  const response = await axios.get('https://api.covid19api.com/total/country/vietnam');
  const data = response.data;
  return {
    props: {
      data
    }
  }
}
export default function Home({ data }) {
  return (
    <div>
      <h1>COVID-19 tại Việt Nam</h1>
      <ul>
        {data.map(item => (
          <li key={item.Date}>
            <div>Ngày thống kê: {item.Date}</div>
            <div>Số ca được xác nhận: {item.Confirmed}</div>
            <div>Số ca đang điều trị: {item.Active}</div>
            <div>Số ca đã khỏi: {item.Recovered}</div>
            <div>Số ca tử vong: {item.Deaths}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}





