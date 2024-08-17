
import { AiOutlineInstagram, AiFillLinkedin, AiFillFile, AiFillGithub, } from 'react-icons/ai'
import Link from 'next/link';

export default function Footer() {
    return <>
    <footer className="py-3 md:px-8 md:py-4 text-white bg-[#0e1111] inline-block w-full">
    <div className="flex w-full justify-around">
        <Link href='./'><h1 className='ml-10 text-2xl hvr-float cursor-pointer hiddenlogo' id='logo'>BOBR34</h1></Link>
        <a href="#" className="hover:underline hidden sm:block" rel="noreferrer"><p className="block text-sm pl-[80px] pt-[7px]">© 2024 Bobr34</p></a>
    </div>
    </footer>
    </>
}