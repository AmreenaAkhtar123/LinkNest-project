import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const handle = (await params).handle
  const client = await clientPromise;
  const db = client.db("linknest")
  const collection = db.collection("links")

  const item = await collection.findOne({ handle: handle })
  if (!item) {
    return notFound()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-purple-200 to-purple-500">
      <div className="relative max-w-md w-full bg-white/40 backdrop-blur-xl border border-yellow-200 shadow-2xl rounded-3xl p-8 flex flex-col items-center text-center space-y-6">
        
        {/* Decorative border effect */}
        <div className="absolute inset-0 rounded-3xl border-2 border-yellow-300/60 pointer-events-none"></div>

        {/* Profile Pic */}
        <div className="relative">
          <img
            src={item.pic}
            alt={item.handle}
            className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400 shadow-xl"
          />
          <div className="absolute inset-0 rounded-full border-2 border-purple-600/40 animate-pulse"></div>
        </div>

        {/* Handle + Desc */}
        <div>
          <h1 className="text-2xl font-extrabold text-purple-800 drop-shadow">@{item.handle}</h1>
          <p className="mt-2 text-sm text-gray-800 italic">{item.desc || "No description provided."}</p>
        </div>

        <hr className="w-2/3 border-t-2 border-yellow-400/50 my-4" />

        {/* Links */}
        <div className="w-full space-y-4">
          {item.links.map((linkItem, index) => (
            <Link key={index} href={linkItem.link} target="_blank">
              <div className="group bg-gradient-to-r from-purple-100 to-yellow-100 text-purple-900 font-semibold py-4 px-6 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer">
                <span className="group-hover:text-purple-700">{linkItem.linktext}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Accent */}
        <span className="text-xs text-gray-600 mt-4 italic">
          ✨ Powered by LinkNest ✨
        </span>
      </div>
    </div>
  )
}
