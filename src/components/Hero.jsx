import Header from './Header'
import heroLeft from '../assets/hero-left.svg'
import heroRight from '../assets/hero-right.svg'

export default function Hero() {
  return (
    <section className="relative h-[700px] overflow-hidden bg-myrtle">
      
      
      <img src={heroLeft} alt="" className="absolute top-[250px] -left-[100px] -scale-x-100" />
      <img src={heroRight} alt="" className="absolute right-[165px] -bottom-[100px]" />

      <Header />

      <div className="mx-auto flex w-page justify-between pt-[129px]">
        <h1 className="text-[100px] leading-[100px] font-bold">
          Find the <br />
          best <span className="text-coral">talent</span>
        </h1>

        <div className="w-[445px]">
          <span className="block h-1 w-[50px] bg-rapture" />
          <p className="mt-[79px] text-lg leading-7 font-semibold">
            Finding the right people and building high performing teams can be hard. Most companies
            aren’t tapping into the abundance of global talent. We’re about to change that.
          </p>
        </div>
      </div>
    </section>
  )
}

