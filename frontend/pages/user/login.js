import React from "react";
import Link from "next/link";

const login = () => {
  return (
    <div className="flex h-screen bg-blue-400">
      <div className="mx-auto mt-10 bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
        <div className={"imgStyle"}>
          <div className={"cartoonImg"}></div>
          <div className={"cloudOne"}></div>
          <div className={"cloudTwo"}></div>
        </div>
        <div className="right flex flex-col justify-evenly">
          <div className="text-center py-10">
            <section className="w-3/4 mx-auto flex flex-col gap-10">
              <div className="title">
                <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
                <p className="w-3/4 max-auto text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, official ?</p>
              </div>
              <form className="flex flex-col gap-5">
                <div className="input-group">
                  <input type="email" name="email" placeholder="Email" className="input-text" />
                </div>
                <div className="input-group">
                  <input type="password" name="password" placeholder="Password" className="input-text" />
                </div>
                <div className="input-button">
                  <button type="submit">Login</button>
                </div>
                <div className="input-button">
                  <button type="submit">Sign in with Google</button>
                </div>
                <div className="input-button">
                  <button type="submit">Sign in with Github</button>
                </div>
              </form>

              <p className="text-center text-gray-400">
                Does not have any account yet ? 
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