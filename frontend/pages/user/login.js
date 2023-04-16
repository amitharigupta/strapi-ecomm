import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { signIn, signOut } from "next-auth/react";
import { makePostRequest } from "@/utils/api";
import { toast } from "react-toastify"; 
import { useRouter } from "next/router";

const toastOptions = {
  position: "bottom-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  }

const login = () => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const router = useRouter();

  async function handleGoogleSignin () {
    signIn('google', { callbackUrl: "https://orange-psychiatrist-sijty.ineuron.app:3000" })
  }

  async function handleGithubSignin () {
    signIn('github', { callbackUrl: "https://orange-psychiatrist-sijty.ineuron.app:3000"  })
  }

  const loginHandler = async (e) => {
    e.preventDefault();
    if(!email && !password) {
      alert("Please enter email or password");
      return;
    }
    const { data } = await makePostRequest(`/api/auth/local`, JSON.stringify({ identifier: email, password }));
    // console.log(data);
    const { jwt: token, user } = data;
    
    if(data && data != undefined && data != null && token && user) {
      localStorage.setItem("userLoginDetails", JSON.stringify(data.user));
      localStorage.setItem("token", token);
      // console.log("User Logged in successfully");
      toast(`User Logged in successfully`, toastOptions);
      // useRouter.push("/");
      router.push("/");
    } else {
      toast(`User credentails not matched`, toastOptions);
      router.push("/user/login");
    }
  }


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
                <h1 className="text-gray-800 text-4xl font-bold py-4">Login</h1>
                <p className="w-3/4 max-auto text-center text-gray-400"></p>
              </div>
              <form className="flex flex-col gap-5" onSubmit={loginHandler}>
                <div className="input-group">
                  <input type="email" name="email" placeholder="Email" className="input-text" onChange={(e) => setEmail(e.target.value)} />
                  <span className="icon flex items-center px-4"><HiAtSymbol size={25}  /></span> 
                </div>
                <div className="input-group">
                  <input type={`${showPass ? "text" : "password"}`} name="password" placeholder="Password" className="input-text" onChange={(e) => setPassword(e.target.value)} />
                  <span className="icon flex items-center px-4 cursor-pointer"><HiFingerPrint size={25} onClick={() => setShowPass(!showPass)} /></span> 
                </div>
                <div className="input-button">
                  <button type="submit" className="button">Login</button>
                </div>
                <div className="input-button">
                  <button type="button" onClick={handleGoogleSignin} className="button_custom">Sign in with Google <Image src={`/assets/img/google.svg`} width={"20"} height={"20"} /></button>
                </div>
                <div className="input-button">
                  <button type="button" onClick={handleGithubSignin} className="button_custom">Sign in with Github <Image src={`/assets/img/github.svg`} width={"25"} height={"25"} /></button>
                </div>
              </form>

              <p className="text-center text-gray-400">
                Does not have any account yet ? &nbsp;<br / >
                <Link href={"/user/register"} className="text-blue-700">Sign Up</Link>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default login