import React from 'react';
import './transHeader.css';
import 'bootstrap/dist/js/bootstrap.min';

export default function Header() {
  return (
    <div>
      <div className="transHeader">
        <nav className="header-div navbar navbar-expand-lg navbar-light px-0">
          <p>trans header test</p>

          <a className="navbar-brand me-auto" href="/">
            <h3 className='logo'>Shree Koderma Gaushala</h3>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item ml-auto">
                <a className="nav-link header-item" href="/">Home</a>
              </li>
              <li className="nav-item ml-auto">
                <a className="nav-link header-item" href="/about">About Us</a>
              </li>
              <li className="nav-item ml-auto">
                <a className="nav-link header-item" href="/contact">Contact Us</a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto px-5 ">
              <li className="nav-item ml-auto">
                <a href='/donate'><button className="btn btn-success header-btn-donate">Donate</button></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

// import React from 'react';
// import './Header.css';
// import 'bootstrap/dist/js/bootstrap.min';

// export default function Header() {
//   return (
//     <div>
//       <div className="container">
//         <nav className="header-div navbar navbar-expand-lg navbar-light px-0">

//           <a className="navbar-brand me-auto" href="/">
//             <h3 className='logo'>Shree Koderma Gaushala</h3>
//           </a>

//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
//             aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon ml-auto"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <a className="nav-link header-item" href="/">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link header-item" href="/about">About Us</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link header-item" href="/contact">Contact Us</a>
//               </li>
//               <li className="nav-item ml-auto px-5">
//                 <a href='/donate'><button className="btn btn-success header-btn-donate btn-sm">Donate</button></a>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }

 