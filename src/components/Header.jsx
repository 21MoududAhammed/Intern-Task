import bgImg from "../assets/bg_header.png";
export default function Header() {
  return (
    <div
      className="h-[450px] mb-32 bg-no-repeat bg-top bg-contain pt-40 "
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className='flex items-center justify-center gap-10'>
        <div className="w-[300px] h-[300px] bg-[#C02424] transition-transform duration-300 hover:scale-125"></div>
        <div className="w-[260px] h-[260px] bg-[#146FE8] transition-transform duration-300 hover:scale-125"></div>
        <div className="w-[300px] h-[300px] bg-[#E76666] transition-transform duration-300 hover:scale-125"></div>
        <div className="w-[260px] h-[260px] bg-[#A0FCD9] transition-transform duration-300 hover:scale-125"></div>
      </div>
    </div>
  );
}
