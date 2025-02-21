import { GradualSpacing } from "@/components/GradualSpacing";
import ScrollLinked from "@/components/ScrollLinked";

// import { motion } from 'framer-motion';
export default function Home() {

  return (
    <div>
      <div className="flex justify-center items-center flex-col font-medium">
        <video autoPlay loop muted playsInline className="-z-10 relative">
          <source src="https://www.worldquant.com/wp-content/uploads/2022/04/Cut_M.mp4" type="video/mp4" />
        </video>
        <div className="absolute">
          <p className="text-[300px] ml-72">Future</p>
          <p className="text-[300px] -mt-36">Faster</p>
        </div>
      </div>
      {/* Section 2 */}
      <div className="flex flex-col p-20 gap-24">
        <GradualSpacing text="Everything is" className="text-[150px] font-semibold"/>
        <GradualSpacing text="information." className="text-[150px] font-semibold" />
      </div>
      <ScrollLinked/>
    </div>
  );
}
