export default function ActivitiesSection() {
  const activities = [
    {
      title: "Trading Competitions",
      description: "Test your trading skills in simulated market environments",
      icon: "📈"
    },
    {
      title: "Workshops",
      description: "Learn from industry experts and gain practical knowledge",
      icon: "🎯"
    },
    {
      title: "Research Projects",
      description: "Conduct in-depth analysis of financial markets and trends",
      icon: "📊"
    },
    {
      title: "Guest Lectures",
      description: "Interact with professionals from the finance industry",
      icon: "🎓"
    }
  ];

  return (
    <section id="activities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">Our Activities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{activity.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
              <p className="text-gray-600">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}