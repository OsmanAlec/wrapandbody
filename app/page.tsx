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
    <div className="w-full py-8">
      {/* Header Section */}
      <section className="text-center mb-12">
      <div className="w-full h-[calc(50vh+10rem)] -z-20 relative">
        <Image
          src="/placeholder.png"
          alt="Header Image"
          fill
          className="header-image object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-2 z-2">Welcome to Wrap and Shape</h1>
          <p className="text-lg text-gray-600 z-2">Sculpt, detox, reduce.</p>
        </div>
      </div>

      </section>

      {/* Services */}
      <section className="mb-12 py-6 text-center w-full  bg-white-smoke">
        <h2 className="text-2xl font-semibold mb-4">Treatments</h2>
        <p className="pb-5"> Our treatments deliver comprehensive results: redefined body contours, reduced bloating from excess fluid, and targeted fat loss</p>
        <div className="flex gap-6 items-center flex-col text-white-smoke">
          <a href="/services" className="card-outer">
            <h3 className="font-bold card">
              Body Wraps</h3>
          </a>
          <a href="/services" className="card-outer">
            <h3 className="font-bold card">
              Massage & Mechanical Therapies</h3>
          </a>
          <a href="/services" className="card-outer">
            <h3 className="font-bold card">
              Fat Reduction & Skin Tightening</h3>
          </a>
        </div>
      </section>

    

      {/* Reviews */}
      <section className="mb-12 m-10 p-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Client Reviews</h2>
          <ReviewSlider />
      </section>


      {/* Opening Hours */}
      <section className="mb-12 py-6 text-center w-full">
        <h2 className="text-3xl font-semibold mb-4">Opening Hours</h2>
        <div className="opening-hours-table">
          {hours.map(({ day, time }) => (
            <div className="opening-hours-row" key={day}>
              <span className="opening-hours-day">{day}</span>
              <span className="opening-hours-time">{time}</span>
            </div>
          ))}
        </div>
      </section>
    </div>

    
  );
}
