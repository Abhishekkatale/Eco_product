import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Heart, Globe, Users, Award, Recycle, Target, TreePine } from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "Environmental scientist turned entrepreneur, passionate about sustainable living.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Michael Chen",
      role: "Head of Product",
      bio: "Former tech executive dedicated to creating products that benefit the planet.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Emily Rodriguez",
      role: "Sustainability Director",
      bio: "Marine biologist working to reduce plastic waste in our oceans.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    }
  ];

  const values = [
    {
      icon: Globe,
      title: "Environmental Impact",
      description: "Every product we curate helps reduce carbon footprint and environmental damage.",
      color: "text-primary"
    },
    {
      icon: Heart,
      title: "Quality First",
      description: "We prioritize high-quality, durable products that last longer and perform better.",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Building a community of conscious consumers who care about our planet's future.",
      color: "text-accent"
    },
    {
      icon: Award,
      title: "Transparency",
      description: "Clear sustainability scores and honest product information you can trust.",
      color: "text-eco-success"
    }
  ];

  const milestones = [
    {
      year: "2022",
      title: "GreenCart Founded",
      description: "Started with a mission to make sustainable products accessible to everyone."
    },
    {
      year: "2023",
      title: "10K+ Products Sold",
      description: "Reached our first major milestone of helping customers go green."
    },
    {
      year: "2024",
      title: "Carbon Neutral",
      description: "Achieved carbon neutrality across our entire supply chain and operations."
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded to serve environmentally conscious customers worldwide."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSearchChange={() => {}} />
      
      {/* Hero Section */}
      <section className="eco-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About GreenCart</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We're on a mission to make sustainable living simple, accessible, and affordable for everyone
          </p>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-sm opacity-90">Products Sold</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-sm opacity-90">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">25T</div>
              <div className="text-sm opacity-90">CO2 Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-eco-text mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At GreenCart, we believe that small changes can make a big difference. Our carefully curated collection 
                of sustainable products helps you reduce your environmental impact without compromising on quality or style.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We partner with ethical manufacturers and eco-conscious brands to bring you products that are good for 
                you and good for the planet. Every purchase contributes to a more sustainable future.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-primary text-primary-foreground px-4 py-2">
                  <Recycle className="mr-2 h-4 w-4" />
                  Zero Waste
                </Badge>
                <Badge className="bg-secondary text-secondary-foreground px-4 py-2">
                  <TreePine className="mr-2 h-4 w-4" />
                  Carbon Neutral
                </Badge>
                <Badge className="bg-accent text-accent-foreground px-4 py-2">
                  <Target className="mr-2 h-4 w-4" />
                  Impact Driven
                </Badge>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Sustainable products"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-eco-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-eco-text mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      <Icon className={`${value.color} mx-auto h-12 w-12`} />
                    </div>
                    <h3 className="text-xl font-semibold text-eco-text mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-eco-text mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">Passionate individuals working towards a sustainable future</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-eco-text mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-eco-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-eco-text mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">Key milestones in our sustainability mission</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-semibold text-eco-text mb-3">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Leaf className="text-primary mx-auto h-16 w-16 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-eco-text mb-6">Join Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8">
            Together, we can create a more sustainable world. Every eco-friendly choice you make contributes 
            to a healthier planet for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-secondary transition-colors text-lg font-semibold inline-block">
              Shop Sustainable Products
            </a>
            <a href="/contact" className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors text-lg font-semibold inline-block">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}