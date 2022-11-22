import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from "./components/Sidebar";
import './App.css';
import { Switch, Route } from "react-router-dom";




const abhi = () => {
  return (
    <>
      <Sidebar />
      <section>
<h1>hello</h1>
     {/* <Sidebar/> */}
      </section>
    </>
  );
};





const App = () => {
  return (
    
    <Switch>

      <Route exact path="/hello">
        <Home />
      </Route>

        
        
        
    </Switch>
  );
};

export default App;



// import React from 'react';
// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Dashboard from './pages/Dashboard.jsx';
// import About from './pages/About.jsx';
// import Analytics from './pages/Analytics.jsx';
// import Comment from './pages/Comment.jsx';
// import Product from './pages/Product.jsx';
// import ProductList from './pages/ProductList.jsx';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Sidebar>
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/comment" element={<Comment />} />
//           <Route path="/analytics" element={<Analytics />} />
//           <Route path="/product" element={<Product />} />
//           <Route path="/productList" element={<ProductList />} />
//         </Routes>
//       </Sidebar>
//     </BrowserRouter>
//   );
// };

// export default App;