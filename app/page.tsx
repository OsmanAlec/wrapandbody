import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full mt-20 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Welcome to Wrap and Shape</h1>
        <p className="text-lg text-gray-600">Body shaping, reducing water weight and fat loss. </p>
      </section>

      {/* Services */}
      <section className="mb-12 py-6 text-center w-full  bg-white-smoke">
        <h2 className="text-2xl font-semibold mb-4">Treatments</h2>
        <div className="flex gap-6 items-center flex-col text-white-smoke">
          <div className="card-outer">
            <h3 className="font-bold card">
              <a href="/services">Body Wraps</a></h3>
          </div>
          <div className="card-outer">
            <h3 className="font-bold card">
              <a href="/services">Massage & Mechanical Therapies</a></h3>
          </div>
          <div className="card-outer">
            <h3 className="font-bold card">
              <a href="/services">Fat Reduction & Skin Tightening</a></h3>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="mb-12 m-10">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p>
          Iwan Boutique Salon is dedicated to providing a personalized and luxurious experience. 
          Our team of professionals is passionate about beauty and committed to making you look and feel your best.
        </p>
      </section>

      {/* Reviews */}
      <section className="mb-12 m-5">
        <h2 className="text-2xl font-semibold mb-4">Client Reviews</h2>
        <div className="space-y-4">
          <blockquote className="border-l-4 pl-4 italic text-gray-700">
            "Absolutely loved my new hairstyle! The staff is so friendly and talented." – Sarah K.
          </blockquote>
          <blockquote className="border-l-4 pl-4 italic text-gray-700">
            "A relaxing atmosphere and top-notch service every time." – Maria L.
          </blockquote>
        </div>
      </section>
    </div>
  );
}
