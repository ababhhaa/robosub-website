import React, { useState, useEffect } from 'react';
import { Menu, X, Trophy, Users, Target, Zap, Award, Star, ChevronRight, Mail, Phone, MapPin, Wrench, Code, Cpu, ArrowLeft, Download, ExternalLink, Camera, FileText } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeTeam, setActiveTeam] = useState<string | null>(null);
  const [activeCompetition, setActiveCompetition] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teams = [
    {
      id: 'mechanical',
      name: "Mechanical Team",
      description: "Designing and manufacturing the submarine's hull, propulsion systems, and mechanical components for optimal underwater performance.",
      icon: <Wrench className="w-8 h-8" />,
      achievements: ["Innovative Hull Design", "Advanced Propulsion System"],
      members: 2,
      responsibilities: ["Hull Design & Manufacturing", "Propulsion Systems", "Mechanical Integration", "Waterproofing Solutions"],
      founders: [
        {
          name: "Jack McCaffrey",
          role: "Mechanical Team Lead",
          bio: "Sophomore in Mechanical Engineering with expertise in structures vehicle design and manufacturing. Led the development of our innovative hull design and propulsion system integration.",
          image: "/images/jack.png"
        },
        {
          name: "Neil Zhu",
          role: "Mechanical Team Lead",
          bio: "Freshman in Mechanical Engineering specializing in advanced manufacturing techniques and systems intergration between all areas.",
          image: "/images/neil copy.png"
        },
        {
          name: "Grant Gao",
          role: "Mechanical Team Lead",
          bio: "Freshman in Mechanical Engineering specializing in advanced manufacturing techniques and systems intergration between all areas.",
          image: "/images/grant.jpg"
        }
      ]
    },
    {
      id: 'software',
      name: "Software Team",
      description: "Developing autonomous navigation algorithms, computer vision systems, and mission control software for underwater tasks.",
      icon: <Code className="w-8 h-8" />,
      achievements: ["Advanced Computer Vision", "Autonomous Navigation"],
      members: 1,
      responsibilities: ["Computer Vision", "Path Planning", "Mission Control", "Simulation & Testing"],
      founders: [
        {
          name: "Aarav Agrawal",
          role: "Software Team Lead",
          bio: "Computer Science major with focus on robotics and AI. Developed our autonomous navigation system and computer vision algorithms for underwater object detection.",
          image: "/images/aarav.png"
        }
      ]
    },
    {
      id: 'electrical',
      name: "Electrical Team",
      description: "Creating robust electrical systems, sensor integration, and power management for reliable underwater operations.",
      icon: <Cpu className="w-8 h-8" />,
      achievements: ["Waterproof Electronics", "Sensor Integration"],
      members: 1,
      responsibilities: ["Circuit Design", "Sensor Integration", "Power Management", "Underwater Electronics"],
      founders: [
        {
          name: "N/A",
          role: "Electrical Team Lead",
          bio: "Electrical Engineering student specializing in underwater electronics and sensor systems. Designed our power management system and sensor integration architecture.",
          image: ""
        }
      ]
    }
  ];

  const competitions = [
    {
      id: 'robosub',
      name: "RoboSub Competition",
      description: "International autonomous underwater vehicle competition where teams design and build robots to navigate underwater courses and complete complex tasks.",
      date: "August",
      status: "Competing",
      details: "Teams must complete tasks including navigation through gates, object detection and manipulation, torpedo firing, and marker dropping - all autonomously underwater.",
      gallery: [
        {
          image: "/images/robosub5.jpg",
          caption: "Our submarine during pool testing"
        },
        {
          image: "/images/robosub6.jpg",
          caption: "Team working on hull assembly"
        },
        {
          image: "/images/robosub7.jpg",
          caption: "Electronics integration and testing"
        },
        {
          image: "/images/robosub8.jpg",
          caption: "Competition day preparation"
        }
      ],
      achievements: [
        "2025: Founded RoboSub",
        //"2023: Qualified for Semi-Finals",
        //"2022: Best Newcomer Award",
        //"2024: Advanced Autonomous Navigation Recognition"
      ]
    }
  ];

  const sponsors = [
    //{ name: "UW-Madison Engineering", level: "Platinum", logo: "🏛️" },
    //{ name: "Badger Robotics Lab", level: "Gold", logo: "🔬" },
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const TeamDetailView = ({ team }: { team: any }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="bg-red-100 p-3 rounded-full text-red-600">
                {team.icon}
              </div>
              <h2 className="text-3xl font-bold text-gray-900">{team.name}</h2>
            </div>
            <button
              onClick={() => setActiveTeam(null)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">{team.description}</p>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Team Founders</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {team.founders.map((founder: any, index: number) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{founder.name}</h4>
                      <p className="text-red-600 font-semibold mb-3">{founder.role}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{founder.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Target className="w-5 h-5 text-red-500 mr-2" />
                Key Responsibilities
              </h3>
              <ul className="space-y-2">
                {team.responsibilities.map((responsibility: string, idx: number) => (
                  <li key={idx} className="text-gray-600 flex items-center">
                    <ChevronRight className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Star className="w-5 h-5 text-red-500 mr-2" />
                Recent Achievements
              </h3>
              <ul className="space-y-2">
                {team.achievements.map((achievement: string, idx: number) => (
                  <li key={idx} className="text-gray-600 flex items-center">
                    <ChevronRight className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const CompetitionDetailView = ({ competition }: { competition: any }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900">{competition.name}</h2>
            <button
              onClick={() => setActiveCompetition(null)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">{competition.description}</p>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Camera className="w-6 h-6 text-red-500 mr-2" />
              Competition Gallery
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {competition.gallery.map((item: any, index: number) => (
                <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-gray-600 text-sm">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-red-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <Target className="w-5 h-5 text-red-500 mr-2" />
                Competition Tasks
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <ChevronRight className="w-3 h-3 text-red-500 mr-2" />
                  Gate Navigation
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-3 h-3 text-red-500 mr-2" />
                  Object Detection & Classification
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-3 h-3 text-red-500 mr-2" />
                  Torpedo Firing
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-3 h-3 text-red-500 mr-2" />
                  Marker Dropping
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-3 h-3 text-red-500 mr-2" />
                  Surface Recovery
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <Award className="w-5 h-5 text-red-500 mr-2" />
                Our Achievements
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {competition.achievements.map((achievement: string, idx: number) => (
                  <li key={idx} className="flex items-center">
                    <Star className="w-3 h-3 text-green-500 mr-2" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Trophy className="w-8 h-8 text-red-600" />
              <span className="text-xl font-bold text-gray-900">RoboSub - UW-Madison</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-red-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('teams')} className="text-gray-700 hover:text-red-600 transition-colors">Teams</button>
              <button onClick={() => scrollToSection('competition')} className="text-gray-700 hover:text-red-600 transition-colors">Competition</button>
              <button onClick={() => scrollToSection('sponsors')} className="text-gray-700 hover:text-red-600 transition-colors">Sponsors</button>
              <button onClick={() => scrollToSection('contact')} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">Contact</button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600">Home</button>
              <button onClick={() => scrollToSection('teams')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600">Teams</button>
              <button onClick={() => scrollToSection('competition')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600">Competition</button>
              <button onClick={() => scrollToSection('sponsors')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600">Sponsors</button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-red-50 via-white to-gray-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <Trophy className="w-16 h-16 text-red-600 mb-6" />
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  RoboSub <span className="text-red-600">UW-Madison</span>
                </h1>
              </div>
              
              <div className="mb-12">
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                  Building autonomous underwater vehicles to compete in the international RoboSub competition, 
                  pushing the boundaries of underwater robotics and marine technology.
                </p>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To design, build, and program cutting-edge autonomous underwater vehicles that can navigate 
                    complex underwater environments, complete challenging tasks, and advance the field of marine robotics 
                    while providing hands-on engineering experience to UW-Madison students.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('teams')}
                  className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-200 flex items-center space-x-2 shadow-lg"
                >
                  <span>Meet Our Teams</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-200"
                >
                  Join Our Team
                </button>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/robosub4.png"
                  alt="Underwater robotics testing"
                  className="rounded-2xl shadow-lg object-cover h-48 w-full"
                />
                <img
                  src="/images/robosub3.png"
                  alt="Team building submarine"
                  className="rounded-2xl shadow-lg object-cover h-48 w-full mt-8"
                />
                <img
                  src="/images/robosub2.png"
                  alt="Electronics and programming"
                  className="rounded-2xl shadow-lg object-cover h-48 w-full -mt-8"
                />
                <img
                  src="/images/robosub1.png"
                  alt="Competition preparation"
                  className="rounded-2xl shadow-lg object-cover h-48 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section id="teams" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Engineering Teams</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our multidisciplinary teams work together to create innovative underwater vehicles, 
              combining mechanical engineering, software development, and electrical systems expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {teams.map((team, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 p-3 rounded-full text-red-600 mr-4">
                    {team.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{team.name}</h3>
                    <p className="text-gray-500">{team.members} Active Members</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {team.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Target className="w-4 h-4 text-red-500 mr-2" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {team.responsibilities.slice(0, 3).map((responsibility, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center text-sm">
                        <ChevronRight className="w-3 h-3 text-red-500 mr-2 flex-shrink-0" />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button
                  onClick={() => setActiveTeam(team.id)}
                  className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>View Team Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Section */}
      <section id="competition" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Award className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">RoboSub Competition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The premier international competition for autonomous underwater vehicles, 
              challenging teams to design robots that can navigate and perform tasks completely underwater.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {competitions.map((comp, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-gray-50 rounded-2xl p-8 border border-red-100 hover:shadow-lg transition-all duration-300 mb-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold text-gray-900">{comp.name}</h3>
                  <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">
                    {comp.status}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {comp.description}
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {comp.details}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <Target className="w-5 h-5 text-red-500 mr-2" />
                      Competition Tasks
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <ChevronRight className="w-3 h-3 text-red-500 mr-2" />
                        Gate Navigation
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="w-3 h-3 text-red-500 mr-2" />
                        Object Detection & Classification
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="w-3 h-3 text-red-500 mr-2" />
                        Torpedo Firing
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="w-3 h-3 text-red-500 mr-2" />
                        Marker Dropping
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="w-3 h-3 text-red-500 mr-2" />
                        Surface Recovery
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <Zap className="w-5 h-5 text-red-500 mr-2" />
                      Technical Challenges
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <ChevronRight className="w-3 h-3 text-red-500 mr-2" />
                        Autonomous Navigation
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="w-3 h-3 text-red-500 mr-2" />
                        Underwater Computer Vision
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="w-3 h-3 text-red-500 mr-2" />
                        Waterproof Electronics
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="w-3 h-3 text-red-500 mr-2" />
                        Real-time Decision Making
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="w-3 h-3 text-red-500 mr-2" />
                        Robust System Integration
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500">
                    <Award className="w-4 h-4 mr-2" />
                    <span className="font-semibold">{comp.date}</span>
                  </div>
                  <button
                    onClick={() => setActiveCompetition(comp.id)}
                    className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
                  >
                    <Camera className="w-4 h-4" />
                    <span>View Gallery & Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Star className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Sponsors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're grateful for the support of our amazing sponsors who make our 
              underwater robotics research and competition participation possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center border border-gray-100">
                <div className="text-4xl mb-4">{sponsor.logo}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{sponsor.name}</h3>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  sponsor.level === 'Platinum' ? 'bg-gray-100 text-gray-700' :
                  sponsor.level === 'Gold' ? 'bg-yellow-100 text-yellow-700' :
                  sponsor.level === 'Silver' ? 'bg-gray-100 text-gray-600' :
                  'bg-red-100 text-red-700'
                }`}>
                  {sponsor.level} Sponsor
                </span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Become a Sponsor</h3>
              <p className="text-gray-600 mb-6">
                Support cutting-edge underwater robotics research and help UW-Madison students 
                gain hands-on experience in marine technology and autonomous systems.
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-red-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors"
              >
                Partner With Us
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="w-6 h-6 text-red-500 mr-2" />
                Sponsorship Information
              </h3>
              <p className="text-gray-600 mb-6">
                Download our comprehensive sponsorship packet to learn about partnership opportunities, 
                benefits, and how your organization can support our mission.
              </p>
              <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download Sponsor Packet</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Interested in joining our team or learning more about our underwater robotics program? 
              We'd love to hear from you and discuss opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-red-100">wiscorobosub@gmail.com</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-red-100">651 425 0477</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-red-100">UW-Madison<br />Engineering Hall</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Trophy className="w-8 h-8 text-red-400" />
              <span className="text-xl font-bold">RoboSub - UW-Madison</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">Advancing underwater robotics technology</p>
              <p className="text-sm text-gray-500">© 2024 RoboSub UW-Madison. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Team Detail Modal */}
      {activeTeam && (
        <TeamDetailView team={teams.find(t => t.id === activeTeam)} />
      )}

      {/* Competition Detail Modal */}
      {activeCompetition && (
        <CompetitionDetailView competition={competitions.find(c => c.id === activeCompetition)} />
      )}
    </div>
  );
}

export default App;
