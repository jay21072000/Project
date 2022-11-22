import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import './App.css';
import { Switch, Route } from "react-router-dom";
import { BrowserRouter, Routes } from 'react-router-dom';
import Analytics from './pages/Analytics.jsx';
import Supplier from "./components/Supplier";
import Manufacture from "./components/Manufacture";
import Transporter from "./components/Transporter";



const Home = () => {
  return (
    <>
      <Navbar />
       
   <div class="container-fluid">
  <div class="row">
    <div class="col">
    <Sidebar/> 
    </div>
    <div class="col">
      <h1>hello</h1>
    </div>
   </div>
</div>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      
   <div class="container-fluid">
  <div class="row">
    <div class="col">
    <Manufacture/> 
    </div>
    <div class="col">
      <h1>hello</h1>
    </div>
   </div>
</div>
    </>
  );
};


const Service = () => {
  return (
    <>
      <Navbar />
  
      <div class="container-fluid">
  <div class="row">
    <div class="col">
    <Supplier/> 
    </div>
    <div class="col">
      <h1>hello</h1>
    </div>
   </div>
</div>
    </>
  );
};
const Hello = () => {
  return (
    <>
      <Navbar />
     
   <div class="container-fluid">
  <div class="row">
    <div class="col">
    <Sidebar/> 
    </div>
    <div class="col">
      <h1>hello mam</h1>
    </div>
   </div>
</div>





     
    </>
  );
};






 











const Contact = () => {
  return (
    <>
      <Navbar />
   
      <div class="container-fluid">
  <div class="row">
    <div class="col">
    <Transporter/> 
    </div>
    <div class="col">
      <h1>hello world</h1>
    </div>
   </div>
</div>
    </>
  );
};



const Request = () => {
  return (
    <>
      <Navbar />
   
      <div class="container-fluid">
  <div class="row">
    <div class="col">
    <Manufacture/> 
    </div>
    <div class="col">
      <h1>hello sir</h1>
    </div>
   </div>
</div>
    </>
  );
};



const App = () => {
  return (
    
    <Switch>

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/About">
        <About />
      </Route> 

      <Route path="/service">
        <Service />
      </Route>
      <Route path="/hello">
      <Hello />
      </Route>

      <Route path="/Request">
      <Request />
      </Route>


      {/* <Route path="/hello">
      <Hello />
      </Route>


      <Route path="/hello">
      <Hello />
      </Route>


      <Route path="/hello">
      <Hello />
      </Route> */}



      

      <Route path="/contact">
        <Contact />
      </Route>
      <BrowserRouter>
      <Sidebar>
        
        
          <Route path="/analytics" element={<Analytics />} />
          
        
      </Sidebar>
    </BrowserRouter>
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