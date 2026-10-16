import quoteIcon from '../assets/icon-quote.svg'
import topLeft from '../assets/testimonials-top-left.svg'
import bottomRight from '../assets/testimonials-bottom-right.svg'
import kady from '../assets/avatar-kady.png'
import aiysha from '../assets/avatar-aiysha.png'
import arthur from '../assets/avatar-arthur.png'

const testimonials = [
  {
    quote:
      '“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”',
    name: 'Kady Baker',
    role: 'Product Manager at Bookmark',
    avatar: kady,
  },
  {
    quote:
      '“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”',
    name: 'Aiysha Reese',
    role: 'Founder of Manage',
    avatar: aiysha,
  },
  {
    quote:
      '“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”',
    name: 'Arthur Clarke',
    role: 'Co-founder of MyPhysio',
    avatar: arthur,
  },
]

export default function Testimonials() {
  return (
    <section className="relative h-[745px] overflow-hidden bg-midnight">
      
      <img src={topLeft} alt="" className="absolute top-0 left-0 -scale-x-100" />
      <img src={bottomRight} alt="" className="absolute right-0 -bottom-[100px] -scale-x-100" />

      <div className="mx-auto w-page pt-[140px] text-center">
        <h2 className="mx-auto w-[932px] text-5xl leading-[48px] font-bold">
          Delivering real results for top companies. Some of our{' '}
          <span className="text-rapture">success stories.</span>
        </h2>

        
        <div className="mt-14 grid grid-cols-3 gap-[30px]">
          {testimonials.map((item) => (
            <div key={item.name} className="relative flex flex-col items-center pt-9">
             
              <img src={quoteIcon} alt="" className="absolute top-0" />

              <p className="relative text-[15px] leading-[25px] font-semibold">{item.quote}</p>
              <h3 className="mt-6 text-lg font-bold text-rapture">{item.name}</h3>
              <p className="text-[13px] italic">{item.role}</p>
              <img src={item.avatar} alt={item.name} className="mt-8 size-[66px]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


