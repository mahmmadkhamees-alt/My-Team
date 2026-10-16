import { FaFacebookSquare, FaPinterest, FaTwitter } from 'react-icons/fa'
import logo from '../assets/logo.svg'

export default function Footer() {
  return (
    <footer className="bg-deep py-12">
      <div className="mx-auto flex h-[100px] w-page">
        
        <div className="flex w-[285px] flex-col justify-between">
          <img src={logo} alt="myteam" className="w-40" />
          <nav className="flex gap-10 text-lg font-semibold">
            <a href="#" className="hover:text-coral">home</a>
            <a href="#" className="hover:text-coral">about</a>
          </nav>
        </div>

       
        <p className="text-[15px] leading-[25px] font-semibold opacity-60">
          987 Hillcrest Lane <br />
          Irvine, CA <br />
          California 92714 <br />
          Call Us : 949-833-7432
        </p>

       
        <div className="ml-auto flex flex-col items-end justify-between">
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-coral"><FaFacebookSquare /></a>
            <a href="#" className="hover:text-coral"><FaPinterest /></a>
            <a href="#" className="hover:text-coral"><FaTwitter /></a>
          </div>
          <p className="text-[15px] font-semibold opacity-60">Copyright 2020. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
