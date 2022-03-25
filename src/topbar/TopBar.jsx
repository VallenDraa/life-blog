export default function TopBar() {
  return (
    <div className="w-full py-2 bg-white fixed top-0 flex items-center font-josefin top-bar z-[9999]">
      {/* left */}
      <div className="text-xl basis-1/3 flex items-center justify-center gap-3">
        <i className="fa-brands fa-facebook-square"></i>
        <i className="fa-brands fa-twitter-square"></i>
        <i className="fa-brands fa-pinterest-square"></i>
        <i className="fa-brands fa-instagram-square"></i>
      </div>
      {/* center */}
      <div className="basis-2/3 ">
        <ul className="flex items-center justify-center gap-5 font-light cursor-pointer ml-3">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li>WRITE</li>
          <li>LOGOUT</li>
        </ul>
      </div>
      {/* right */}
      <div className="basis-1/3 flex items-center justify-center gap-4">
        <i className="cursor-pointer text-[#444] text-lg fa-solid fa-magnifying-glass"></i>
        <img
          className="w-10 h-10 rounded-full object-cover"
          src="https://source.unsplash.com/random/50x50"
          alt="profile"
        />
      </div>
    </div>
  );
}
