import { CheckCircle2, ArrowRight } from 'lucide-react'
import { useBooking } from '../../context/BookingContext'
import { useInView } from '../../hooks/useInView'

const plans = [
  {
    name: 'Starter System',
    price: 'From $400',
    desc: 'Ideal for businesses that need a clean landing page and basic lead capture setup.',
    features: [
      'High-converting landing page',
      'Lead capture form setup',
      'Basic CRM integration',
      'Contact / enquiry flow',
      'Mobile-responsive design',
    ],
    popular: false,
    cta: 'Book a Free Call',
  },
  {
    name: 'Growth System',
    price: 'From $1,350',
    desc: 'Best for businesses that want bookings, automation, and a stronger backend system.',
    features: [
      'Everything in Starter',
      'Booking system setup',
      'Automated follow-up flows',
      'WhatsApp or email automation',
      'Lead tracking dashboard',
      'CRM pipeline view',
    ],
    popular: true,
    cta: 'Book a Free Call',
  },
  {
    name: 'Custom System',
    price: 'Custom Quote',
    desc: 'For businesses that need tailored internal tools, portals, or more advanced workflows.',
    features: [
      'Everything in Growth',
      'Custom internal dashboards',
      'Client portal setup',
      'Advanced automation flows',
      'API / third-party integrations',
      'Ongoing support plan',
    ],
    popular: false,
    cta: 'Book a Free Call',
  },
]

export default function Pricing() {
  const { openModal } = useBooking()
  const [headerRef, headerInView] = useInView()

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        <div
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-14 reveal ${headerInView ? 'in-view' : ''}`}
        >
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Simple Pricing Options
          </h2>
          <p className="text-gray-500 text-lg">
            Choose the level that fits your business now, with room to scale later.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map(({ name, price, desc, features, popular, cta }, i) => {
            const [ref, inView] = useInView()
            return (
            <div
              key={i}
              ref={ref}
              className={`reveal ${inView ? 'in-view' : ''} relative rounded-2xl p-8 flex flex-col border transition-all duration-300 ${
                popular
                  ? 'bg-blue-700 border-blue-700 shadow-2xl md:scale-[1.02]'
                  : 'bg-white border-gray-100 shadow-card hover:shadow-card-lg hover:-translate-y-1'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-blue-700 text-[11px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                  Most Popular
                </span>
              )}

              <div className="mb-6">
                <p className={`text-sm font-bold uppercase tracking-widest mb-2 ${popular ? 'text-blue-200' : 'text-gray-400'}`}>
                  {name}
                </p>
                <p className={`text-3xl font-extrabold ${popular ? 'text-white' : 'text-gray-900'}`}>
                  {price}
                </p>
                <p className={`text-sm mt-3 leading-relaxed ${popular ? 'text-blue-100' : 'text-gray-500'}`}>
                  {desc}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${popular ? 'text-blue-200' : 'text-blue-600'}`} />
                    <span className={`text-sm ${popular ? 'text-blue-50' : 'text-gray-600'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={openModal}
                className={`inline-flex items-center justify-center gap-2 font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 ${
                  popular
                    ? 'bg-white text-blue-700 hover:bg-gray-100 hover:shadow-md'
                    : 'bg-blue-700 text-white hover:bg-blue-800 hover:shadow-md'
                }`}
              >
                {cta}
                <ArrowRight size={15} />
              </button>
            </div>
            )
          })}
        </div>

        <p className="text-center text-gray-400 text-sm mt-10">
          Monthly support, updates, and improvement plans can also be offered after launch.
        </p>
      </div>
    </section>
  )
}
