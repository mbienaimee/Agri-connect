// import React,{useState} from 'react'
// import { Link, NavLink } from 'react-router-dom';

// import {
//   faCartShopping,
//   faMagnifyingGlass,
//   faUser,
//   faBars,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";

// const Header = () => {
//      const [navBar, setNavBar] = useState(false);
//      const showNavbar = () => {
//        setNavBar(!navBar);
//      };
//   return (
//     <div className="font-bold flex justify-between px-[10%] py-4 items-center text-lg">
//       <Link>
//         <p className="text-4xl ">
//           <span className="text-[#45AB49]">AGRI</span>sales
//         </p>
//       </Link>
//       <ul className="flex items-center gap-3">
//         {/* <li>
//           <NavLink to="/search">
//             <FontAwesomeSvgIcon icon={faMagnifyingGlass} className="w-[20px]" />
//           </NavLink>
//         </li> */}
//         {/* <li>
//           <NavLink to="/cart">
//             <FontAwesomeSvgIcon icon={faCartShopping} className="w-[20px]" />
//           </NavLink>
//         </li> */}
//         <li>
//           <NavLink to="/Profile">
//             <FontAwesomeSvgIcon icon={faUser} className="w-[20px]" />
//           </NavLink>
//         </li>
//         <li>
//           {open ? (
//             <NavLink onClick={showNavbar}>
//               <FontAwesomeSvgIcon
//                 icon={faBars}
//                 className="w-[20px] md:hidden"
//               />
//             </NavLink>
//           ) : null}
//         </li>
//         <li>
//           <NavLink
//             to="/Post"
//             className="md:flex sm:hidden py-2 px-2 bg-[#45AB49] text-white font-medium rounded"
//           >
//             Farmer
//           </NavLink>
//         </li>
//       </ul>

//       {/* <ul className="flex gap-4 flex-col absolute  w-full items-center justify-center top-28 md:flex-row md:top-8">
//         <li className="hover:text-[#56A918] duration-300">
//           <a href="">About_us</a>
//         </li>
//         <li className="hover:text-[#56A918] duration-300">
//           <a href="">Contact_us</a>
//         </li>
//         <li className="hover:text-[#56A918] duration-300">
//           <a href="">Shop</a>
//         </li>
//       </ul> */}
//     </div>
//   );
// }

// export default Header
