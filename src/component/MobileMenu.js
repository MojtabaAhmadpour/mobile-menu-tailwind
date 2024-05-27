import style from "@/component/Mobile.module.css"
const MobileMenu = () => {
  return (
    <div className="bg-[#f9f9f9] m-0 p-0">
      <div className="mt-[50px] flex items-center justify-center">
        <div className="bg-[#36383F] w-[300px] h-[600px] flex justify-center items-center">
          <div className="border-[#36383F] border-2 border-solid rounded-[20px] w-[94%] h-[91%] bg-[#F5F6FA] overflow-hidden">
            <nav className="bg-[#1E1E23] h-[65px]">
              <div className="flex flex-col relative top-[25px] left-[25px] z-10 select-none">
                <input type="checkbox" className={style.input} />
                <span className={style.span}></span>
                <span className={style.span}></span>
                <span className={style.span}></span>
                <ul className={style.menu}>
                  <li className="pt-[10px] pr-[0px] pl-6 delay-[2s]">
                    <a href="#" className="text-[#1e1e23] text-sm font-normal transition-transform ease-in-out delay-150 hover:opacity-50">1</a>
                  </li>
                  <li className="pt-[10px] pr-[0px] pl-6 delay-[2s]">
                    <a href="#" className="text-[#1e1e23] text-sm font-normal transition-transform ease-in-out delay-150 hover:opacity-50">2</a>
                  </li>
                  <li className="pt-[10px] pr-[0px] pl-6 delay-[2s]">
                    <a href="#" className="text-[#1e1e23] text-sm font-normal transition-transform ease-in-out delay-150 hover:opacity-50">3</a>
                  </li>
                  <li className="pt-[10px] pr-[0px] pl-6 delay-[2s]">
                    <a href="#" className="text-[#1e1e23] text-sm font-normal transition-transform ease-in-out delay-150 hover:opacity-50">4</a>
                  </li>
                  <li className="pt-[10px] pr-[0px] pl-6 delay-[2s]">
                    <a href="#" className="text-[#1e1e23] text-sm font-normal transition-transform ease-in-out delay-150 hover:opacity-50">5</a>
                  </li>
                  <li className="pt-[10px] pr-[0px] pl-6 delay-[2s]">
                    <a href="#" className="text-[#1e1e23] text-sm font-normal transition-transform ease-in-out delay-150 hover:opacity-50">6</a>
                  </li>
                  <li className="pt-[10px] pr-[0px] pl-6 delay-[2s]">
                    <a href="#" className="text-[#1e1e23] text-sm font-normal transition-transform ease-in-out delay-150 hover:opacity-50">7</a>
                  </li>
                  <li className="pt-[10px] pr-[0px] pl-6 delay-[2s]">
                    <a href="#" className="text-[#1e1e23] text-sm font-normal transition-transform ease-in-out delay-150 hover:opacity-50">8</a>
                  </li>
                  <li className="pt-[10px] pr-[0px] pl-6 delay-[2s]">
                    <a href="#" className="text-[#1e1e23] text-sm font-normal transition-transform ease-in-out delay-150 hover:opacity-50">9</a>
                  </li>
                  <li className="pt-[10px] pr-[0px] pl-6 delay-[2s]">
                    <a href="#" className="text-[#1e1e23] text-sm font-normal transition-transform ease-in-out delay-150 hover:opacity-50">10</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
