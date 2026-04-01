import OfferNavbar from '../components/offer/OfferNavbar'
import OfferHero from '../components/offer/OfferHero'
import WhoItsFor from '../components/offer/WhoItsFor'
import OfferProblem from '../components/offer/OfferProblem'
import CoreOffer from '../components/offer/CoreOffer'
import Outcomes from '../components/offer/Outcomes'
import OfferProcess from '../components/offer/OfferProcess'
import Pricing from '../components/offer/Pricing'
import Objections from '../components/offer/Objections'
import OfferCTA from '../components/offer/OfferCTA'
import OfferFooter from '../components/offer/OfferFooter'

export default function OfferPage() {
  return (
    <div className="bg-white text-gray-900 antialiased">
      <OfferNavbar />
      <main>
        <OfferHero />
        <WhoItsFor />
        <OfferProblem />
        <CoreOffer />
        <Outcomes />
        <OfferProcess />
        <Pricing />
        <Objections />
        <OfferCTA />
      </main>
      <OfferFooter />
    </div>
  )
}
