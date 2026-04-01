import { ShieldCheck } from 'lucide-react'

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
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">
            Common Questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Why This Makes Sense
          </h2>
          <p className="text-gray-500 text-lg">
            Here are the most common concerns — and why they should not stop you.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {reassurances.map(({ title, body }, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 hover:-translate-y-0.5 transition-all duration-200 flex gap-5"
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mt-0.5">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-base mb-2 leading-snug">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
