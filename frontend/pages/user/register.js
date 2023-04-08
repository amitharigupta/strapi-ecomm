import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";

const register = () => {

  const [showPass, setShowPass] = useState({ password: false, cpassword: false });

  return (
    <div className="flex h-screen bg-blue-400">
      <div className="mx-auto mt-10 bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
        <div className={"imgStyle"}>
          <div className={"cartoonImg"}></div>
          <div className={"cloudOne"}></div>
          <div className={"cloudTwo"}></div>
        </div>
        <div className="right flex flex-col justify-evenly">
          <div className="text-center">
            <section className="w-3/4 mx-auto flex flex-col gap-10">
              <div className="title">
                <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
                <p className="w-3/4 max-auto text-center text-gray-400"></p>
              </div>
              <form className="flex flex-col gap-5">
              <div className="input-group">
                  <input type="text" name="username" placeholder="Username" className="input-text" />
                  <span className="icon flex items-center px-4"><HiOutlineUser size={25}  /></span> 
                </div>
                <div className="input-group">
                  <input type="email" name="email" placeholder="Email" className="input-text" />
                  <span className="icon flex items-center px-4"><HiAtSymbol size={25}  /></span> 
                </div>
                <div className="input-group">
                  <input type={`${showPass.password ? "text" : "password"}`} name="password" placeholder="Password" className="input-text" />
                  <span className="icon flex items-center px-4 cursor-pointer"><HiFingerPrint size={25} onClick={() => setShowPass({ ...showPass, password: !showPass.password })} /></span> 
                </div>
                <div className="input-group">
                  <input type={`${showPass.cpassword ? "text" : "password"}`} name="cpassword" placeholder="Confirm Password" className="input-text" />
                  <span className="icon flex items-center px-4 cursor-pointer"><HiFingerPrint size={25} onClick={() => setShowPass({ ...showPass, cpassword: !showPass.cpassword })} /></span> 
                </div>
                <div className="input-button">
                  <button type="submit" className="button">Register</button>
                </div>
              </form>

              <p className="text-center text-gray-400">
                Alreadt have and account, please login here ? &nbsp;
                <Link href={"/user/login"} className="text-blue-700">Sign in</Link>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default register