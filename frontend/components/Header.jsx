import Link from "next/link";
import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight, BiLogIn } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { fetchDataFromApi } from "@/utils/api";
import { useSelector } from "react-redux";

import { useSession } from "next-auth/react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState([]);
  const { data: session } = useSession();

  // console.log("session : ", session);
  const { cartItems } = useSelector((state) => {
    return state.cart;
  });

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  function logoutHandler () {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("userLoginDetails");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data } = await fetchDataFromApi(`/api/categories?populate=*`);
    setCategories(data);
  };

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className={"h-[60px] flex justify-between items-center"}>
        <Link href={"/"}>
          <img
            src="/assets/img/logo.svg"
            alt="logo"
            className="w-[40px] md:w-[60px]"
          />
        </Link>
        <Menu
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          categories={categories}
        />
        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
            categories={categories}
          />
        )}

        <div className="flex items-center gap-2 text-black">
          <div className="w-8 md:w-12 h-8 md:h12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
              51
            </div>
          </div>
          <Link href={"/cart"}>
            <div className="w-8 md:w-12 h-8 md:h12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              <BsCart className="text-[15px] md:text-[20px]" />
              {cartItems.length > 0 && (
                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                  {cartItems.length}
                </div>
              )}
            </div>
          </Link>

          {
            session?.user?.name && session?.user?.email ? <>
              <div className="w-8 font-medium text-[20px] md:w-12 h-8 md:h12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative" onMouseEnter={() => setShowUserMenu(true)} onMouseLeave={() => setShowUserMenu(false)}>
                {(session.user.name).split(" ")[0][0]}{(session.user.name).split(" ")[1][0]}
                {
                  showUserMenu &&
                  <li className="cursor-pointer flex items-center gap-2 relative">
                    <ul className="bg-white absolute top-4 right-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                      <Link href={`/user/profile`}>
                        <li className="h-12 flex justify-between items-center px-3 :hover-bg-black/[0.03] rounded-md ">
                          <span className="opacity-50 text-sm">Profile</span>
                        </li>
                      </Link>
                      <Link href={`/user/order`}>
                        <li className="h-12 flex justify-between items-center px-3 :hover-bg-black/[0.03] rounded-md">
                          <span className="opacity-50 text-sm">My Orders</span>
                        </li>
                      </Link>
                      <li className="h-12 flex justify-between items-center px-3 :hover-bg-black/[0.03] rounded-md" onClick={logoutHandler}>
                        <span className="opacity-50 text-sm">Logout</span>
                      </li>
                    </ul>
                  </li>
                }
              </div>
            </> :
              <>
                <Link href={"/user/login"}>
                  <div className="w-8 md:w-12 h-8 md:h12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                    <BiLogIn className="text-[24px] md:text-[25px]" />
                  </div>
                </Link>
              </>
          }

          <div className="w-8 md:w-12 h-8 md:h12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => {
                  setMobileMenu(false);
                }}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => {
                  setMobileMenu(true);
                }}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
