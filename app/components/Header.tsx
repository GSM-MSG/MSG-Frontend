import Link from "next/link";
import MsgIcon from "./icons/msg";

export default function Header (){
    return (
        <header className="py-5 px-12 border-gray-950 fixed w-full flex items-center">
            <div className="flex gap-x-4">
                <Link href={'/'}><MsgIcon width={50} height={50} /></Link>
            </div>
            <div className="ml-auto flex gap-x-7 text-lg font-semibold title">
                <Link href={'/team'}><p>team</p></Link>
                <Link href={'/source'}><p>source</p></Link>
                <Link href={'/project'}><p>project</p></Link>
            </div>
        </header>
    )
}