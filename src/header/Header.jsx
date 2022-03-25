export default function Header() {
  return (
    <div className="header mt-16">
      <div className="flex flex-col items-center font-lora text-[#444]">
        <span className="absolute top-[10%] text-xl">React & Node</span>
        <span className="absolute top-[13%] text-8xl">Blog</span>
      </div>
      <img
        className="w-full h-[450px] mt-20 object-cover"
        src="https://source.unsplash.com/random/?bright"
        alt=""
      />
    </div>
  );
}
