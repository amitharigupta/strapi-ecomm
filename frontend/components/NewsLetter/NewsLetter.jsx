import React from "react";

const NewsLetter = () => {
  return (
    <div className="pt-8 bg-black">
        <div className="w-full text-center font-medium items-center uppercase text-white hover:text-slate-400 cursor-pointer">
            <span>News Letter </span>
            <span>Sign up for latest update and offers</span>
        </div>
        <div className="flex flex-row gap-2 items-center mt-2 justify-center">
            <input type="text" className="placeholder:italic placeholder:text-slate-900 block bg-white border border-slate-700 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter you email" />
            <button className="rounded-full bg-white text-black font-medium pl-6 pr-6 py-2">Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter