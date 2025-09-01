"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation';

const Generate = () => {
  const searchParams = useSearchParams()
  const [links, setLinks] = useState([{ link: "", linktext: "" }])
  const [handle, sethandle] = useState(searchParams.get('handle'))
  const [pic, setpic] = useState("")
  const [desc, setdesc] = useState("")

  const handleChange = (index, link, linktext) => {
    setLinks((initialLinks) =>
      initialLinks.map((item, i) =>
        i === index ? { link, linktext } : item
      )
    )
  }

  const addLink = () => {
    setLinks([...links, { link: "", linktext: "" }])
  }

  const submitLinks = async () => {
    const raw = JSON.stringify({
      links, handle, pic, desc
    });

    const r = await fetch("http://localhost:3000/api/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: raw
    })

    const result = await r.json()
    if (result.success) {
      toast.success(result.message)
      setLinks([{ link: "", linktext: "" }])
      setpic("")
      sethandle("")
    } else {
      toast.error(result.message)
    }
  }

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-pink-200 via-purple-200 to-purple-400">
      {/* Left Form Section */}
      <div className="flex justify-center items-center p-8">
        <div className="w-full max-w-lg bg-white/30 backdrop-blur-lg shadow-2xl rounded-2xl p-8 border border-white/40">
          <h1 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Create your Bittree
          </h1>

          {/* Step 1 */}
          <div className="mb-6">
            <h2 className="font-semibold text-xl mb-2">Step 1: Claim your Handle</h2>
            <input
              value={handle || ""}
              onChange={e => sethandle(e.target.value)}
              className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-pink-500 focus:outline-none shadow-sm"
              type="text"
              placeholder="Choose a Handle"
            />
          </div>

          {/* Step 2 */}
          <div className="mb-6">
            <h2 className="font-semibold text-xl mb-2">Step 2: Add Links</h2>
            {links.map((item, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  value={item.linktext || ""}
                  onChange={e => handleChange(index, item.link, e.target.value)}
                  className="flex-1 border border-gray-300 px-3 py-2 rounded-xl focus:ring-2 focus:ring-pink-500 focus:outline-none shadow-sm"
                  type="text"
                  placeholder="Enter link text"
                />
                <input
                  value={item.link || ""}
                  onChange={e => handleChange(index, e.target.value, item.linktext)}
                  className="flex-1 border border-gray-300 px-3 py-2 rounded-xl focus:ring-2 focus:ring-pink-500 focus:outline-none shadow-sm"
                  type="text"
                  placeholder="Enter link"
                />
              </div>
            ))}
            <button
              onClick={addLink}
              className="mt-2 px-5 py-2 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-full shadow-md hover:scale-105 transition"
            >
              + Add Link
            </button>
          </div>

          {/* Step 3 */}
          <div>
            <h2 className="font-semibold text-xl mb-2">Step 3: Add Picture and Description</h2>
            <input
              value={pic || ""}
              onChange={e => setpic(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 mb-3 rounded-xl focus:ring-2 focus:ring-pink-500 focus:outline-none shadow-sm"
              type="text"
              placeholder="Enter link to your Picture"
            />
            <input
              value={desc || ""}
              onChange={e => setdesc(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 mb-3 rounded-xl focus:ring-2 focus:ring-pink-500 focus:outline-none shadow-sm"
              type="text"
              placeholder="Enter description"
            />
            <button
              disabled={!pic || !handle || !links[0].linktext}
              onClick={submitLinks}
              className="w-full mt-3 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:scale-105 disabled:opacity-50 transition"
            >
              🚀 Create your BitTree
            </button>
          </div>
        </div>
      </div>

      {/* Right Illustration Section */}
      <div className="col2 w-full h-screen flex justify-center items-center bg-gradient-to-tr from-purple-300 via-pink-200 to-purple-400">
  <img
    src="/generate.png"
    alt="Generate your links"
    className="w-full h-full object-contain drop-shadow-2xl"
  />
</div>


      <ToastContainer />
    </div>
  )
}

export default Generate
