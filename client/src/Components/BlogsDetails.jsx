import { TbCircleArrowRight } from "react-icons/tb"

const popularBlogsData=[
    {
      id:1,
      image:"https://www.boat-lifestyle.com/cdn/shop/articles/Gaming_Earbuds_for_Travel-_Compact_and_Portable_Gaming_Solutions_600x.png?v=1711005465",
      date:'21 Mar, 2024',
      title:"Gaming Earbuds for Travel: Compact and Portable Gaming Solutions",
      description:"When nothing can stop a gamer from entering the arena, we have got gaming earbuds so they can enter the arena while they travell.",
      button:"Read More "
    },
    {
      id:2,
      image:"https://www.boat-lifestyle.com/cdn/shop/articles/Gaming_Earbuds_for_Travel-_Compact_and_Portable_Gaming_Solutions_600x.png?v=1711005465",
      date:'21 Mar, 2024',
      title:"Gaming Earbuds for Travel: Compact and Portable Gaming Solutions",
      description:"When nothing can stop a gamer from entering the arena, we have got gaming earbuds so they can enter the arena while they travell.",
      button:"Read More "
    },
    {
      id:3,
      image:"https://www.boat-lifestyle.com/cdn/shop/articles/Gaming_Earbuds_for_Travel-_Compact_and_Portable_Gaming_Solutions_600x.png?v=1711005465",
      date:'21 Mar, 2024',
      title:"Gaming Earbuds for Travel: Compact and Portable Gaming Solutions",
      description:"When nothing can stop a gamer from entering the arena, we have got gaming earbuds so they can enter the arena while they travell.",
      button:"Read More "
    },
    {
      id:4,
      image:"https://www.boat-lifestyle.com/cdn/shop/articles/Gaming_Earbuds_for_Travel-_Compact_and_Portable_Gaming_Solutions_600x.png?v=1711005465",
      date:'21 Mar, 2024',
      title:"Gaming Earbuds for Travel: Compact and Portable Gaming Solutions",
      description:"When nothing can stop a gamer from entering the arena, we have got gaming earbuds so they can enter the arena while they travell.",
      button:"Read More "
    },
    
  ]

const PopularBlogs= ()=>{
    return (
        <>
        <div className='introvideo mt-5 flex justify-between gap-x-2 overflow-x-scroll w-[95%] m-auto'>
        {popularBlogsData.map((ele, ind)=> (
            <div key={ind} className="min-w-[355.3px] min-h-[377.45px] border rounded-lg bg-[#FAFAFA]">
                <img src={ele.image} alt={ele.title} className="rounded-tl-lg rounded-tr-lg" />
                <div className="px-4 bg-[#FAFAFA] flex flex-col justify-center gap-y-1.5">
                    <span className="text-[#8D8E91] text-[15px] mt-1.5">{ele.date}</span>
                    <h2 className="font-extrabold text-[18px] ">{ele.title}</h2>
                    <p className="text-[#6F8397] text-[14px]">{ele.description.slice(0, 88)+'...'}</p>
                    <button className="border h-[46px] w-full flex items-center justify-center gap-x-1 rounded-full bg-white font-extrabold text-[12px]">
                        {ele.button}
                        <TbCircleArrowRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        ))}
        </div>
        </>
    )
}

export default PopularBlogs