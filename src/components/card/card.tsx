import Image from "next/image";
import Link from "next/link";

const Card = (props:any) => {

    const {image, title, description, btnClass, key, tecnologies, href} = props
    const ASPECT_RATIO = "3/2";
    return (
        <div className="flex flex-col justify-center bg-[hsl(0,1%,16%)] rounded-md h-[500px] relative mt-10 ">
        <div className="h-[50%] relative">
<Image src={image} alt="img" className="rounded-md absolute inset-0 w-full h-full "  />
        </div>
        <div className="h-[50%] px-4 mt-4 text-white max-w-[300px]">
          <div className="font-bolder uppercase text-lg">
            <p className="font-bold tracking-wider">{title}</p>
          </div>
          <div className="w-full mt-4 text-white">
            {description}
          </div>
          <div className="w-full mt-4 text-white">
            Tecnologias: {tecnologies}
          </div>
          <div className="absolute w-full mt-4 text-white bottom-0 left-0">
            <Link href={href} target="_blank">
            <button className={`${btnClass} w-full py-4`}>repositorio</button>
            </Link>
          </div>
        </div>
      </div>
    )
}


export default Card;