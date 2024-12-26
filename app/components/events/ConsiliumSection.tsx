export default function ConsiliumSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">Consilium</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-[url('/events/consilium.jpg')] bg-cover bg-center transform hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Our Flagship Event</h3>
            <p className="text-lg text-gray-700">
              Consilium is our annual flagship event that brings together finance enthusiasts, industry experts, and students for a week-long celebration of finance and economics.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary">✦</span>
                <span>Trading competitions with real-market scenarios</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✦</span>
                <span>Panel discussions with industry leaders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✦</span>
                <span>Workshops on emerging financial technologies</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}