import Image from "next/image"

type LogoItemsProps = {
    logo: string
    title?: string
}
const LogoItems = ({logo, title}:LogoItemsProps) => {
    return (
        <div className="logo-item-container flex align-center flex-wrap m-auto md:col-span-1 grayscale">
            <Image 
                src={logo}
                width="110"
                height="100"
                alt={title}
            />
        </div>
    )
}

export default LogoItems