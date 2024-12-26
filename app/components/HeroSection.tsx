export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center">
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="container mx-auto px-4 relative z-10 text-white">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
                    The Finance and <br />
                    Economics Society
                </h1>
                <h2 className="text-2xl md:text-3xl mb-8 opacity-90 animate-fade-in-up">
                    Netaji Subhas University of Technology
                </h2>
                <a
                    href="/about"
                    className="inline-block bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 transform"
                >
                    Join Us
                </a>
            </div>
        </section>
    );
}
