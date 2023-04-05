// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Category from "./pages/Category";
// import Product from "./pages/Product";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Category />} />
//         <Route path="/product/:categoryId" element={<Product />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./pages/Category";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;