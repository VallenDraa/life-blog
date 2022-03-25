export default function Post() {
  return (
    <div className="post w-96 mx-6 mb-10">
      <img
        src="https://source.unsplash.com/random/?coding"
        className="w-full h-72 object-cover rounded-lg"
      />
      {/* post info */}
      <section className="flex flex-col items-center mt-4 gap-2">
        {/* post category */}
        <div className="font-varela-round text-xs text-orange-300 leading-5 space-x-2 cursor-pointer">
          <span>Music</span>
          <span>Life</span>
        </div>
        {/* post title */}
        <span className="font-josefin text-2xl font-bold cursor-pointer">
          Lorem ipsum dolor sit amet.
        </span>
        <hr />
        {/* post date */}
        <time
          className="font-lora italic text-sm text-gray-400"
          datetime="2022-2-2 22:22"
        >
          1 Hour Ago
        </time>
      </section>
      {/* post desc */}
      <p
        className="overflow-hidden text-ellipsis di font-varela-round text-sm text-gray-500 leading-6 mt-4"
        style={{
          display: '-webkit-box',
          webkitLineClamp: '4',
          webkitBoxOrient: 'vertical',
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        placeat, adipisci in nobis autem atque temporibus possimus, dolorem
        delectus modi alias, cumque blanditiis consectetur ad laborum! Autem
        reprehenderit dicta quod expedita officiis praesentium nobis illo
        sapiente adipisci possimus, in recusandae. Lorem ipsum dolor sit amet
      </p>
    </div>
  );
}
