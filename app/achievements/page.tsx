'use client';
import Navbar from '../components/Navbar';

export default function Achievements() {
  const achievements = [
    {
      year: "2023",
      title: "Best Finance Society Award",
      description: "Recognized as the best finance society among Delhi NCR colleges",
      organization: "Delhi University Finance Summit"
    },
    {
      year: "2022",
      title: "National Trading Competition",
      description: "First place in the national level trading competition",
      organization: "NSE India"
    },
    {
      year: "2022",
      title: "Research Excellence",
      description: "Published research paper on cryptocurrency market trends",
      organization: "International Journal of Finance"
    }
  ];

  return (
    <main>
      <Navbar />
      <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
            Our Achievements
          </h1>

          <div className="max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="mb-8 bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-bold">
                    {achievement.year}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {achievement.description}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {achievement.organization}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}