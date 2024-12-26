interface EbookProps {
  title: string;
  cover: string;
  description: string;
  downloadUrl: string;
}

export default function EbookCard({ title, cover, description, downloadUrl }: EbookProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1">
      <div className="aspect-[3/4] relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${cover})` }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a 
          href={downloadUrl}
          className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download
        </a>
      </div>
    </div>
  );
}