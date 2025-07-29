import { Recycle, Leaf, Globe } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="eco-gradient text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover Sustainable Living</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Find eco-friendly products that make a difference for you and the planet
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex items-center bg-white bg-opacity-20 rounded-lg px-6 py-3">
            <Recycle className="text-accent mr-3 h-6 w-6" />
            <span className="text-lg">100% Eco-Certified</span>
          </div>
          <div className="flex items-center bg-white bg-opacity-20 rounded-lg px-6 py-3">
            <Leaf className="text-accent mr-3 h-6 w-6" />
            <span className="text-lg">Plastic-Free Options</span>
          </div>
          <div className="flex items-center bg-white bg-opacity-20 rounded-lg px-6 py-3">
            <Globe className="text-accent mr-3 h-6 w-6" />
            <span className="text-lg">Carbon Neutral</span>
          </div>
        </div>
      </div>
    </section>
  );
}
