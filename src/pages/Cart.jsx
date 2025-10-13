export default function Cart() {
  return (
    <div className="max-w-[1500px] rounded-lg shadow-xl min-h-screen m-10 mx-auto flex p-10 space-x-10">
      <div className="w-[70%] rounded-lg shadow-xl min-h-full">
        <div className="flex justify-center">
          <h1 className="text-3xl lg:text-5xl font-semibold">Your Cart</h1>
        </div>
      </div>

      <div className="w-[30%] rounded-lg shadow-xl min-h-full">
        <div className="flex justify-center flex-col">
          <h1 className="text-3xl lg:text-5xl font-semibold text-center">
            Total
          </h1>
          <button className="px-4 py-2 rounded-lg bg-black text-white mx-5 my-2 hover:bg-gray-800 duration-300">
            Cash Out
          </button>
        </div>
      </div>
    </div>
  );
}
