import { ShieldCheck } from 'lucide-react'
import { useInView } from '../../hooks/useInView'

const reassurances = [
  {
    title: 'You do not need a big tech team',
    body: "Everything is built and handed to you ready to use. I handle the technical side so you don't have to.",
  },
  {
    title: 'You do not need to figure it all out yourself',
    body: 'We start with a free call to understand your business — then I map out exactly what needs to be built.',
  },
  {
    title: 'Everything is built around your workflow',
    body: "This is not a generic template. It's a system designed around how your specific business operates.",
  },
  {
    title: 'The goal is simplicity, not complexity',
    body: "I build the minimum system that creates the maximum impact — clean, easy to use, and easy to manage.",
  },
]

export default function Objections() {
  const [headerRef, headerInView] = useInView()

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-14 reveal ${headerInView ? 'in-view' : ''}`}
        >
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Why This Makes Sense
          </h2>
          <p className="text-gray-500 text-lg">
            Here are the most common concerns — and why they should not stop you.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {reassurances.map(({ title, body }, i) => {
            const [ref, inView] = useInView()
            return (
              <div
                key={i}
                ref={ref}
                className={`reveal ${inView ? 'in-view' : ''} bg-white rounded-2xl p-7 border border-gray-100 shadow-card hover:shadow-card-lg hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 flex gap-5`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mt-0.5 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-base mb-2 leading-snug">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
