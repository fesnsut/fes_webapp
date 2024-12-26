import Navbar from '../components/Navbar';
import AlumniScroll from '../components/alumni/AlumniScroll';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function About() {
  const teamMembers = [
    {
      name: "Ranvijay Rathore",
      role: "President",
      image: "images/team/ranvijay.jpeg",
      linkedin: "https://www.linkedin.com/in/ranvijay-rathore-2b8ab8248",
      mail: "mailto:ranvijay@gmail.com",
      instagram: "https://www.instagram.com/rannvijayy07/",
    },
    {
      name: "Kinshuk Kumar",
      role: "Vice President",
      image: "images/team/kinshuk.jpg",
      linkedin: "https://linkedin.com/in/kinshuk-kumar-1632892a0",
      mail: "mailto:kinshuk@gmail.com",
      instagram: "https://www.instagram.com/kinshukk22/",
    },
  ];

  return (
      <main>
        <Navbar />
        <div className="pt-20 min-h-screen">
          <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
                About Us
              </h1>
              <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-6">
                <p>
                  The Finance and Economics Society of NSUT is dedicated to fostering financial literacy
                  and economic understanding among students through practical learning experiences.
                </p>
                {/* Add more content */}
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-primary mb-12 text-center">Our Team</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                      <div className="aspect-square relative">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${member.image})` }}
                        />
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                        <p className="text-primary mb-4">{member.role}</p>

                        <div className="flex justify-center space-x-4 text-primary">
                          <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-2xl transition-transform transform hover:scale-110 hover:text-primary-dark"
                          >
                            <FaLinkedin />
                          </a>
                          <a
                              href={member.mail}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-2xl transition-transform transform hover:scale-110 hover:text-primary-dark"
                          >
                            <FaEnvelope />
                          </a>
                          <a
                              href={member.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-2xl transition-transform transform hover:scale-110 hover:text-primary-dark"
                          >
                            <FaInstagram />
                          </a>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-primary mb-12 text-center">Our Alumni</h2>
              <AlumniScroll />
            </div>
          </section>
        </div>
      </main>
  );
}
