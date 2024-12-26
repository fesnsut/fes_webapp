'use client';
import { useState } from 'react';

export default function PublicationsList() {
  const [expandedPublication, setExpandedPublication] = useState<number | null>(null);

  const publications = [
    {
      title: "Latest Market Analysis",
      description: "An in-depth analysis of current market trends and their implications on various industries. The market analysis covers multiple sectors including technology, finance, and healthcare.",
      link: "#"
    },
    {
      title: "Tech Innovations in 2024",
      description: "A comprehensive look at the most anticipated technology innovations of 2024, including AI advancements, blockchain developments, and emerging trends in the tech world.",
      link: "#"
    },
    {
      title: "Economic Outlook for Emerging Markets",
      description: "This publication provides an overview of the economic situation in emerging markets, covering key indicators such as GDP growth, inflation, and government policies.",
      link: "#"
    },
  ];

  const toggleDescription = (index: number) => {
    setExpandedPublication(expandedPublication === index ? null : index);
  };

  return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Publications</h2>
          <div className="space-y-8">
            {publications.map((publication, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold">{publication.title}</h3>
                  <p className="text-gray-600 mt-2">
                    {expandedPublication === index
                        ? publication.description
                        : `${publication.description.substring(0, 100)}...`}
                  </p>
                  <button
                      onClick={() => toggleDescription(index)}
                      className="text-primary mt-4 inline-block"
                  >
                    {expandedPublication === index ? 'Show Less' : 'Read More'}
                  </button>
                  <div className="mt-4">
                    <a href={publication.link} className="text-primary hover:text-primary-light">
                      Read Full Article
                    </a>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}
