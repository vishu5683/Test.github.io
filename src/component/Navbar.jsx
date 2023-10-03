import React from 'react'

const Navbar = () => {
  return (
    <>
     {/* navbar start */}
     <nav class="navbar navbar-expand-lg">
     <div class="container-fluid">
         <a class="navbar-brand" href="#">
             <img
                 src="/images/logo.png"
                 alt="Logo"
                 width="30"
                 height="24"
                 class="d-inline-block align-text-top"
             />
             Sternet Smart
         </a>
         <button
             class="navbar-toggler"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#navbarNavDropdown"
             aria-controls="navbarNavDropdown"
             aria-expanded="false"
             aria-label="Toggle navigation"
         >
             <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNavDropdown">
             <ul class="navbar-nav">
                 <li class="nav-item dropdown">
                     <a
                         class="nav-link dropdown-toggle"
                         href="#"
                         role="button"
                         data-bs-toggle="dropdown"
                         aria-expanded="false"
                     >
                         Products
                     </a>
                     <ul class="dropdown-menu">
                         <li>
                             <a class="dropdown-item" href="#">
                                 Action
                             </a>
                         </li>
                         <li>
                             <a class="dropdown-item" href="#">
                                 Another action
                             </a>
                         </li>
                         <li>
                             <a class="dropdown-item" href="#">
                                 Something else here
                             </a>
                         </li>
                     </ul>
                 </li>
                 <li class="nav-item">
                     <a class="nav-link" href="#">
                         App
                     </a>
                 </li>
                 <li class="nav-item">
                     <a class="nav-link" href="#">
                         Support
                     </a>
                 </li>
                 <li class="nav-item">
                     <a class="nav-link " aria-current="page" href="#">
                         About Us
                     </a>
                 </li>
             </ul>
         </div>
     </div>
 </nav>
 {/* navbar end */}
 </> 
 )
  
}

export default Navbar
