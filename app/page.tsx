import Image from "next/image";
import ReviewSlider from './components/reviewslider';

const hours = [
  { day: "Monday", time: "10:00 - 20:00" },
  { day: "Tuesday", time: "10:00 - 20:00" },
  { day: "Wednesday", time: "10:00 - 20:00" },
  { day: "Thursday", time: "10:00 - 20:00" },
  { day: "Friday", time: "10:00 - 20:00" },
  { day: "Saturday", time: "10:00 - 18:00" },
  { day: "Sunday", time: "10:00 - 18:00" },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] overflow-hidden animate-fade-in-down">
        <Image
          src="/body.jpg"
          alt="Header Image"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-navy bg-opacity-50 flex flex-col items-center justify-center z-10">
          <h1 className="text-4xl md:text-6xl text-rose-gold font-bold mb-4 drop-shadow-lg animate-fade-in-up">Welcome to Wrap and Shape</h1>
          <p className="text-lg md:text-2xl text-off-white mb-8 animate-fade-in-up">Sculpt, detox, reduce.</p>
          <a href="/services" className="inline-block px-8 py-3 rounded-full bg-rose-gold text-dark-green font-bold shadow-lg hover:bg-dark-green hover:text-rose-gold transition-colors animate-fade-in-up">
            View Treatments
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="px-[10vw] flex flex-col md:flex-row items-center justify-center min-h-[80vh] gap-10 py-12 bg-white-smoke animate-fade-in-down">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left animate-fade-in-left">
          <h2 className="text-3xl font-semibold mb-4 text-rose-gold">Why Choose Us?</h2>
          <p className="mb-6 max-w-xl text-dark-green">
            At Wrap and Shape, we combine advanced body sculpting techniques with a holistic approach to wellness. Our experienced therapists use the latest technology and natural products to help you achieve your dream silhouette, boost confidence, and feel your best.
          </p>
          <ul className="list-disc list-inside text-dark-green space-y-2 mb-6">
            <li>Personalized treatment plans</li>
            <li>Certified, friendly staff</li>
            <li>Modern, relaxing environment</li>
            <li>Visible results and client satisfaction</li>
          </ul>
          <a href="/contact" className="inline-block px-8 py-3 rounded-full bg-dark-green text-rose-gold font-bold shadow hover:bg-rose-gold hover:text-dark-green transition-colors">
            Book a Consultation
          </a>
        </div>
        <div className="flex-1 flex flex-col gap-6 items-center animate-fade-in-right">
          <Image
            src="/body.jpg"
            alt="Therapist at work"
            width={400}
            height={300}
            className="rounded-xl shadow-lg object-cover"
          />
          <Image
            src="/body.jpg"
            alt="Spa interior"
            width={400}
            height={300}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Treatments Section */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center bg-off-white animate-fade-in-down">
        <h2 className="text-3xl font-semibold mb-4 text-rose-gold animate-fade-in-up">Treatments</h2>
        <p className="pb-5 max-w-[500px] text-dark-green animate-fade-in-up">
          Our treatments deliver comprehensive results: redefined body contours, reduced bloating from excess fluid, and targeted fat loss.
        </p>
        <div className="flex flex-col md:flex-row gap-8 items-center animate-fade-in-up">
          <div className="card-outer animate-fade-in-up">
            <a href="/services">
              <div className="min-h-[200px]">
                <Image src="/body.jpg" alt="Body Wraps" fill className=" object-cover" />
              </div>
              <h3 className="font-bold card">Body Wraps</h3>
            </a>
          </div>
          <div className="card-outer animate-fade-in-up">
            <a href="/services">
            <div className="min-h-[200px]">
              <Image src="/body.jpg" alt="Massage & Mechanical Therapies" fill className=" object-cover" />
            </div>
              <h3 className="font-bold card">Massage & Mechanical Therapies</h3>
            </a>
          </div>
          <div className="card-outer animate-fade-in-up">
            <a href="/services">
              <div className="min-h-[200px]">
                <Image src="/body.jpg" alt="Fat Reduction & Skin Tightening" fill  className="object-cover" />
              </div>
              <h3 className="font-bold card">Fat Reduction & Skin Tightening</h3>
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center bg-white-smoke animate-fade-in-down">
        <h2 className="text-3xl font-semibold mb-4 text-rose-gold animate-fade-in-up">Client Reviews</h2>
        <div className="w-full max-w-3xl animate-fade-in-up">
          <ReviewSlider />
        </div>
      </section>

      {/* Opening Hours Section */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center bg-off-white animate-fade-in-down">
        <div className="pt-6 text-center w-full">
          <h2 className="text-3xl font-semibold mb-4">Opening Hours</h2>
          <div className="opening-hours-table">
            {hours.map(({ day, time }) => (
              <div className="opening-hours-row" key={day}>
                <span className="opening-hours-day">{day}</span>
                <span className="opening-hours-time">{time}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 text-dark-green animate-fade-in-up pb-15">
          <p className="font-semibold">Location:</p>
          <p>Rath Cross Business Park, Ashbourne, Co. Meath, Ireland</p>
          <p className="font-semibold mt-2">Contact:</p>
          <p>
            <a href="mailto:info@wrapandshape.com" className="underline hover:text-rose-gold transition-colors">info@wrapandshape.com</a>
            {" | "}
            <a href="tel:+353123456789" className="underline hover:text-rose-gold transition-colors">+353 1 234 56789</a>
          </p>
        </div>
      </section>

    </div>
  );
}
