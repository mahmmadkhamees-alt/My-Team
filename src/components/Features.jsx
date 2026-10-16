import iconPerson from '../assets/icon-person.svg'
import iconCog from '../assets/icon-cog.svg'
import iconChart from '../assets/icon-chart.svg'
import featuresRight from '../assets/features-right.svg'

const features = [
  {
    icon: iconPerson,
    title: 'Experienced Individuals',
    text: 'Our network is made up of highly experienced professionals who are passionate about what they do.',
  },
  {
    icon: iconCog,
    title: 'Easy to Implement',
    text: 'Our processes have been refined over years of implementation meaning our teams always deliver.',
  },
  {
    icon: iconChart,
    title: 'Enhanced Productivity',
    text: 'Our customized platform with in-built analytics helps you manage your distributed teams.',
  },
]

export default function Features() {
  return (
    <section className="relative h-[684px] overflow-hidden bg-jungle">
      
      <img src={featuresRight} alt="" className="absolute -right-[100px] bottom-0" />

      <div className="mx-auto flex w-page justify-between pt-[140px]">
        
        <div className="w-[445px]">
          <span className="block h-1 w-[50px] bg-coral" />
          <h2 className="mt-[54px] text-5xl leading-[48px] font-bold">
            Build & manage distributed teams like no one else.
          </h2>
        </div>

        
        <ul className="mt-[58px] flex w-[540px] flex-col gap-8">
          {features.map((feature) => (
            <li key={feature.title} className="flex gap-[23px]">
             
              <div className="relative size-[72px] shrink-0">
                <span className="absolute top-4 left-4 size-14 rounded-full bg-police" />
                <div className="relative flex size-14 justify-center">
                  <img src={feature.icon} alt="" className="h-14" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-coral">{feature.title}</h3>
                <p className="mt-4 text-[15px] leading-[25px] font-semibold opacity-80">
                  {feature.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}


