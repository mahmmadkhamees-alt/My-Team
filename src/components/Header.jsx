import logo from '../assets/logo.svg'

export default function Header() {
  return (
    <header className="relative z-10 mx-auto flex w-page items-center pt-[73px]">
      <img src={logo} alt="myteam" />

      <nav className="ml-20 flex gap-10 text-lg font-semibold">
        {/* hover: بيغير اللون لما الماوس يمر فوق اللينك */}
        <a href="#" className="hover:text-coral">home</a>
        <a href="#" className="hover:text-coral">about</a>
      </nav>

      {/* btn كلاس جاهز من daisyUI، والباقي Tailwind */}
      <a
        href="#"
        className="btn ml-auto h-12 w-[153px] rounded-full border-2 border-white bg-transparent text-lg text-white shadow-none hover:bg-white hover:text-myrtle"
      >
        contact us
      </a>
    </header>
  )
}

