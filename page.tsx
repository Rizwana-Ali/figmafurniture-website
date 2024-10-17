import Image from "next/image";
function Home(){
    return(
        <div className="flex justify-around bg-red-200">
        <div className="ml-10 pt-40">
            {/* Right side */}
           <Image src="/Group 110.png" width={500} height={500} alt="furniture"></Image>

        </div>

        <div className="pt-24 ml-96 absolute mr-60">
            {/* left side */}
          
        <Image src="/Funiro Landing Page 4.png" width={500} height={500} alt="furniture"></Image>
        </div>
        <div className="mr-40 pb-10">
        <Image src="/Funiro Landing Page 3.png" width={500} height={200} alt="furniture"></Image>
        
        </div>
        </div>
        
        

    )
}
export default Home
