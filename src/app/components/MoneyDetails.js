import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import html2canvas from "html2canvas";

export default function MoneyDetails({ money, onClick }) {
  const {
    sender,
    receiver,
    amount,
    transactionId,
    time,
    currentAmount,
    success,
  } = money;
  if (!success) {
    throw Error("Error");
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(transactionId);
    toast("সফল ভাবে কপি করেছেন");
  };
  const convertToImage = () => {
    html2canvas(document.getElementById("content")).then(function (canvas) {
      var img = canvas.toDataURL();
      var link = document.createElement("a");
      link.href = img;
      link.download = "screenshot.png";
      link.click();
    });
  };

  return (
    <div>
      <div
        className="w-[95%] md:w-[60%] lg:w-[40%] mx-auto bg-white relative"
        id="content"
      >
        <button
          className="absolute right-0 -top-9 text-white rounded bg-pink-600 p-1"
          onClick={convertToImage}
        >
          download
        </button>

        <div className="bkash-header flex justify-between p-2 md:p-5 mt-10">
          <div>
            <h2 className="text-pink-600 lg:text-2xl">
              আপনার <span className="font-bold">সেন্ড মানি</span>
            </h2>
            <h2 className="text-green-400 lg:text-2xl font-bold">সফল হয়েছে</h2>
          </div>
          <div>
            <span className="border-2 border-[#0BBA5F] rounded-full w-[60px] h-[60px] flex p-2">
              <Image src="/check.png" alt="Light" height={500} width={500} />
            </span>
          </div>
        </div>
        <div className="user-section flex items-center gap-4 p-5">
          <div className="avatar w-20">
            <Image src={"/avatar.svg"} height={500} width={500} alt="avatar" />
          </div>
          <div className="contact">
            <p className="sender-phone text-lg font-bold">{receiver}</p>
            <p className="receiver-phone text-sm lg:text-lg">{sender}</p>
          </div>
        </div>
        <div className="history grid grid-cols-2">
          <div className="flex flex-col border-t-2 border-b-2 px-5 py-3 border-r-2">
            <span className="text-[#7A7A7A] text-sm mb-2">সময়</span>
            <span className="text-black text-sm lg:text-lg font-[500]">
              {time}
            </span>
          </div>
          <div className="flex flex-col border-t-2 border-b-2 px-5 py-3">
            <span className="text-[#7A7A7A] text-sm mb-2">ট্রানজেকশন আইডি</span>
            <span className="text-black text-sm lg:text-lg font-[500] sm:flex">
              <span>{transactionId}</span>
              <span className=" md:ms-3 cursor-pointer" onClick={handleCopy}>
                <Image
                  className="w-5 h-5 lg:w-8 lg:h-8"
                  src={"/copy.svg"}
                  height={100}
                  width={100}
                  alt="copy imag"
                />
              </span>
            </span>
          </div>
          <div className="flex flex-col border-b-2 px-5 py-3 border-r-2">
            <span className="text-[#7A7A7A] text-sm mb-2">
              সর্বমোট ব্যালেন্স
            </span>
            <span className="text-black text-sm lg:text-lg font-[500]">
              ৳{amount}
            </span>
          </div>
          <div className="flex flex-col border-b-2 px-5 py-3">
            <span className="text-[#7A7A7A] text-sm mb-2">নতুন ব্যালেন্স</span>
            <span className="text-black text-sm lg:text-lg font-[500]">
              ৳{currentAmount}
            </span>
          </div>
        </div>
        <div className="footer text-center my-10 p-5">
          <div className="w-14 h-14 mx-auto">
            <svg
              className="bg-pink-500 rounded-full p-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="#fff"
              fill="#fff"
            >
              <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path>
            </svg>
          </div>
          <div>
            <h3 className="text-xl text-gray-600 mt-5">আপনি অর্জন করেছেন </h3>
            <h3 className="text-2xl text-gray-900 my-4">
              বিকাশ রিওয়ার্ড পয়েন্ট
            </h3>
            <h3 className="text-gray-600 text-xl">
              পয়েন্ট ব্যবহার করতে{" "}
              <Link
                target="_blank"
                href={"https://www.bkash.com/en/page/rewards"}
                className="text-pink-500 border-b border-pink-500"
              >
                বিকাশ রিওয়ার্ডস
              </Link>{" "}
              চেক করুন!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
