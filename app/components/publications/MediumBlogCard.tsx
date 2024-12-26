export default function MediumBlogCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Medium Blog</h2>
      <p className="text-lg text-gray-700 mb-6">
        Explore our latest insights, analysis, and research on finance and economics.
      </p>
      <a 
        href="https://medium.com/@finsoc-nsut" 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors"
      >
        Visit Our Blog
      </a>
    </div>
  );
}