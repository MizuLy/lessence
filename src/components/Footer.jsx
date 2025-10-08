export default function Footer() {
  return (
    <div className="w-full bg-black text-white flex flex-wrap py-10">
      <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-start px-6 mb-6 md:mb-0">
        <h1 className="text-3xl font-josefinsans mb-3">
          <span className="font-bold">M</span>izu
        </h1>
        <p>Entry Level Web Developer</p>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-start px-6 mb-6 md:mb-0">
        <h1 className="text-3xl font-josefinsans mb-3">Company</h1>
        <div className="flex flex-col space-y-2">
          <p className="cursor-pointer hover:text-blue-500">Facebook</p>
          <p className="cursor-pointer hover:text-yellow-400">Amazon</p>
          <p className="cursor-pointer hover:text-gray-100/50">Apple</p>
          <p className="cursor-pointer hover:text-red-500">Netflix</p>
          <p className="cursor-pointer hover:text-green-500">Google</p>
        </div>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-start px-6 mb-6 md:mb-0">
        <h1 className="text-3xl font-josefinsans mb-3">Price</h1>
        <p>Contact for more info</p>
        <p className="cursor-pointer mt-2">senglysea12@gmail.com</p>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-start px-6">
        <h1 className="text-3xl font-josefinsans mb-3">About</h1>
        <p className="cursor-pointer">Terms & Conditions</p>
        <p className="cursor-pointer mt-2">Privacy Policy</p>
      </div>
    </div>
  );
}
