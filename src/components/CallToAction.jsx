import circle from '../assets/cta-circle.svg'
import stripes from '../assets/cta-stripes.svg'
import dots from '../assets/cta-dots.svg'

export default  function CallToAction() {
  return (
    <section className="relative h-[200px] overflow-hidden bg-coral">
    
      <span className="absolute top-[100px] left-0 size-[100px] bg-police" />
      <img src={circle} alt="" className="absolute top-[100px] left-0" />
      <img src={stripes} alt="" className="absolute top-[156px] left-0" />
      <img src={dots} alt="" className="absolute top-[56px] left-0" />

      <div className="mx-auto flex h-full w-page items-center px-[98px]">
        <h2 className="text-5xl font-bold text-jungle">Ready to get started?</h2>
        <a
          href="#"
          className="btn ml-auto h-12 w-[153px] rounded-full border-2 border-jungle bg-transparent text-lg text-jungle shadow-none hover:bg-jungle hover:text-white"
        >
          contact us
        </a>
      </div>
    </section>
  )
}


