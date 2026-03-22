import imgImage1 from "figma:asset/0dc8b5846e9f0c11192e12567b5214f0ab3ea36e.png";

function Group() {
  return (
    <div className="absolute contents left-[508px] top-[615px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[508px] not-italic text-[#3c4e2b] text-[12px] top-[615px] whitespace-nowrap">Sign up for the wait-list →</p>
      <div className="absolute bg-white border border-black border-solid h-[40px] left-[508px] rounded-[15px] top-[640px] w-[424px]" />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#f7f7ea] relative size-full" data-name="Desktop - 1">
      <div className="absolute h-[274px] left-[575px] top-[267px] w-[289px]" data-name="image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[210.71%] left-[-27.54%] max-w-none top-[-46.9%] w-[154.4%]" src={imgImage1} />
        </div>
      </div>
      <Group />
    </div>
  );
}