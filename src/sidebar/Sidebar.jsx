export default function Sidebar() {
  return (
    <div className="sidebar basis-3/12 mt-5 pb-7 bg-zinc-50 rounded-xl flex flex-col items-center">
      <div className="m-5">
        {/* sidebar header */}
        <header className="flex flex-col items-center ">
          <span className="font-varela-round text-xs leading-5 text-center w-full text-gray-700 font-bold border-y-2 border-slate-400 py-1">
            ABOUT ME
          </span>
          <img
            className="mt-4"
            src="https://source.unsplash.com/random"
            alt="myPic"
          />
          <p className="py-5 font-serif">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
            corrupti temporibus. Laudantium labore
          </p>
        </header>
        {/* sidebar items */}
        <section className="flex flex-col items-center ">
          <span className="font-varela-round text-xs leading-5 text-center w-full text-gray-700 font-bold border-y-2 border-slate-400 py-1">
            CATEGORIES
          </span>
          <ul className="mb-7 font-serif">
            <li className="inline-block w-1/2 mt-4 cursor-pointer">Life</li>
            <li className="inline-block w-1/2 mt-4 cursor-pointer">Music</li>
            <li className="inline-block w-1/2 mt-4 cursor-pointer">Style</li>
            <li className="inline-block w-1/2 mt-4 cursor-pointer">Sport</li>
            <li className="inline-block w-1/2 mt-4 cursor-pointer">Tech</li>
            <li className="inline-block w-1/2 mt-4 cursor-pointer">Cinema</li>
          </ul>
        </section>
        {/* sidebar footer */}
        <footer className="flex flex-col items-center ">
          <span className="font-varela-round text-xs leading-5 text-center w-full text-gray-700 font-bold border-y-2 border-slate-400 py-1">
            FOLLOW US
          </span>
          <div className="mt-4 w-64 flex items-center justify-center text-base gap-4">
            <i className="fa-brands fa-facebook-square cursor-pointer"></i>
            <i className="fa-brands fa-twitter-square cursor-pointer"></i>
            <i className="fa-brands fa-pinterest-square cursor-pointer"></i>
            <i className="fa-brands fa-instagram-square cursor-pointer"></i>
          </div>
        </footer>
      </div>
    </div>
  );
}
