import { MdNavigateNext } from "react-icons/md";

export default function Contact() {
  return (
    <div className="text-center py-10 px-5 lg:px-20 flex flex-col justify-center items-center">
      <h1
        data-aos="fade-right"
        className="text-3xl lg:text-5xl font-bold font-josefinsans mb-6"
      >
        Contact us through
      </h1>
      <div className="w-full max-w-lg bg-gray-50 shadow-lg p-8">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-start">
            <label
              data-aos="fade-left"
              htmlFor="email"
              className="text-lg font-semibold mb-2"
            >
              Email
            </label>
            <input
              data-aos="fade-left"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 outline-none"
            />
          </div>

          <div className="flex flex-col items-start">
            <label
              data-aos="fade-left"
              htmlFor="message"
              className="text-lg font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              data-aos="fade-left"
              rows={5}
              placeholder="Write your message..."
              className="w-full px-4 py-2 outline-none"
            ></textarea>
          </div>
          <button data-aos="fade-left" className="bg-black text-white text-center text-lg hover:bg-gray-800 w-full py-4 flex justify-center items-center">
            SEND
            <span>
              <MdNavigateNext size={25}/>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
