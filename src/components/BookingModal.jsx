import { useState, useEffect, useRef } from 'react'
import { X, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { useBooking } from '../context/BookingContext'


const initialForm = {
  name: '',
  business: '',
  email: '',
  phone: '',
  message: '',
}

export default function BookingModal() {
  const { isOpen, closeModal } = useBooking()
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | submitting | success
  const [errors, setErrors] = useState({})
  const firstInputRef = useRef(null)

  // Focus first input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => firstInputRef.current?.focus(), 100)
    } else {
      setForm(initialForm)
      setErrors({})
      setStatus('idle')
    }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeModal() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeModal])

  if (!isOpen) return null

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!form.email.trim()) e.email = 'Please enter your email'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.business.trim()) e.business = 'Please enter your business name'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('submitting')

    try {
      const res = await fetch('https://formspree.io/f/xbdpkoen', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          business: form.business,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      })

      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('idle')
        alert('Something went wrong. Please try again.')
      }
    } catch {
      setStatus('idle')
      alert('Something went wrong. Please try again.')
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={closeModal}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
      >
        <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[92vh] overflow-y-auto pointer-events-auto animate-fade-in-up">
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors z-10"
            aria-label="Close"
          >
            <X size={16} />
          </button>

          {status === 'success' ? (
            /* ── Success state ── */
            <div className="flex flex-col items-center text-center px-8 py-14">
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
                <CheckCircle2 size={32} className="text-green-600" />
              </div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Thank You</h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                We've received your request and someone will reach out to you shortly.
              </p>
              <button
                onClick={closeModal}
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-7 py-3 rounded-full transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            /* ── Form ── */
            <div className="px-5 sm:px-7 pt-7 sm:pt-8 pb-7 sm:pb-8">
              {/* Header */}
              <div className="mb-7 pr-6">
                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                  Free — no commitment
                </div>
                <h2 className="text-2xl font-extrabold text-gray-900 leading-tight">
                  Book Your Free Call
                </h2>
                <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">
                  Tell us a little about your business and we'll be in touch to arrange a time.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name + Business */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    ref={firstInputRef}
                    label="Your Name"
                    name="name"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={handleChange}
                    error={errors.name}
                    required
                  />
                  <Field
                    label="Business Name"
                    name="business"
                    placeholder="Acme Ltd"
                    value={form.business}
                    onChange={handleChange}
                    error={errors.business}
                    required
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                  />
                  <Field
                    label="Phone / WhatsApp"
                    name="phone"
                    type="tel"
                    placeholder="+971 50 000 0000"
                    value={form.phone}
                    onChange={handleChange}
                    optional
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    What do you need help with?{' '}
                    <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Briefly describe your business and what you're looking to improve..."
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none transition"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg mt-1"
                >
                  {status === 'submitting' ? (
                    <><Loader2 size={18} className="animate-spin" /> Sending...</>
                  ) : (
                    <>Send Request <ArrowRight size={16} /></>
                  )}
                </button>

                <p className="text-center text-xs text-gray-400 pt-1">
                  No spam. No hard sell. We'll reach out to find a time that works for you.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

// ── Reusable field ──
import { forwardRef } from 'react'

const Field = forwardRef(function Field(
  { label, name, type = 'text', placeholder, value, onChange, error, required, optional },
  ref
) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
        {label}{' '}
        {optional && <span className="text-gray-400 font-normal">(optional)</span>}
      </label>
      <input
        ref={ref}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full rounded-xl border bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition ${
          error ? 'border-red-400 bg-red-50' : 'border-gray-200'
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
})
