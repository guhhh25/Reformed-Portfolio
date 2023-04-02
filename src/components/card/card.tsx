import Image from "next/image";

const Card = (props:any) => {

    const {image, title, description, btnClass} = props

    return (
        <div className="bg-[hsl(0,1%,16%)] h-[400px] rounded-md w-[380px] relative">
            <Image src={image} alt="img" className="rounded-md"/>

            <div className=" px-4 mt-4 text-white font-bolder uppercase text-lg">
                <p className="font-bold tracking-wider">{title}</p>
            </div>
            <div className="px-4 w-full mt-4 text-white">
                {description}
            </div>
            <div className="absolute w-full mt-4 text-white bottom-0 left-0">
                <button className={`${btnClass} px-[103.7px] py-4 lg:px-[141.7px]`}>repositorio</button>
            </div>
        </div>
    )
}


export default Card;