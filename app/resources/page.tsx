import Navbar from '../components/Navbar';
import EbookCard from '../components/resources/EbookCard';

export default function Resources() {
  const ebooks = [
    {
      title: "Introduction to Financial Markets",
      cover: "/ebooks/1.jpg",
      description: "A comprehensive guide to understanding financial markets",
      downloadUrl: "#"
    },
    // Add more ebooks
  ];

  return (
    <main>
      <Navbar />
      <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
            Resources
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ebooks.map((ebook, index) => (
              <EbookCard key={index} {...ebook} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}