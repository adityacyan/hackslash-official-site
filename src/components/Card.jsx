// import Image from "next/image";
// import './card.css'

// function Card() {
//   return (
//     <>
//     <div className='card'>
//     <div className="w-[369] h-[7.5px]  rounded-t-[10px] bg-[#00FF9D]"></div>

//         <div className='card-image'>
//             <Image src={'/event.png'} alt="event poster" width={300} height={300} className='w-full h-full object-cover'/>
//          </div>
//          <div className="rounded-b-[10px] bg-[#223345] p-[18px] width-[369] height-[250] ">
//             <h2 className='text-2xl mb-1'>Delta Winter of Code</h2>
//             <p className='text-sm text-[#FFFFFAD5]'>
//             DWOC or Delta Winter of Code is a winter long program organised to support and improve the culture of open source software around us. It serves as a platform for young student developers (and even beginners!) to hone their technical skills by working on projects that tackle real world issues and are of their interests.

//             </p>
//             <button type="button" class="text-transparent-900 mx-9 bg-[#223345] border border-white-400 focus:outline-none font-medium rounded-2xl text-sm px-20 py-2 me-2 my-5  hover:bg-gray-700  ">SESSION DETAILS</button>
//          </div>      
//     </div>
//     </>
//   )
// }

// export default Card
import Image from "next/image";
import './card.css'

function Card({ imgSrc, title, description, buttonText }) {
  return (
    <>
      <div className='card'>
        {/* Top Green Line */}
        <div className="w-[369px] h-[7.5px] rounded-t-[10px] bg-[#00FF9D]"></div>

        {/* Card Image */}
        <div className='card-image'>
          <Image src={imgSrc} alt="event poster" width={300} height={300} className='w-full h-full object-cover'/>
        </div>

        {/* Card Content */}
        <div className="rounded-b-[10px] bg-[#223345] p-[18px] w-[369px] h-[250px]">
          <h2 className='text-2xl text-white mb-1'>{title}</h2>
          <p className='text-sm text-[#FFFFFAD5]'>
            {description}
          </p>
          <button type="button" className="text-transparent-900 text-white mx-9 bg-[#223345] border border-white-400 focus:outline-none font-medium rounded-2xl text-sm px-20 py-2 me-2 my-5 hover:bg-gray-700">
            {buttonText}
          </button>
        </div>      
      </div>
    </>
  );
}

export default Card;
