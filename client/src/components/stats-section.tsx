import { Recycle, Leaf, Users, Globe } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Recycle,
      value: "50,000+",
      label: "Plastic items saved",
      color: "text-primary",
      bgColor: "bg-gradient-to-br from-primary/10 to-primary/20"
    },
    {
      icon: Leaf,
      value: "25 tons",
      label: "CO2 emissions reduced",
      color: "text-secondary",
      bgColor: "bg-gradient-to-br from-secondary/10 to-secondary/20"
    },
    {
      icon: Users,
      value: "10,000+",
      label: "Happy customers",
      color: "text-accent",
      bgColor: "bg-gradient-to-br from-accent/10 to-accent/20"
    },
    {
      icon: Globe,
      value: "100%",
      label: "Carbon neutral shipping",
      color: "text-eco-success",
      bgColor: "bg-gradient-to-br from-eco-success/10 to-eco-success/20"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20 mt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-eco-text mb-6">Our Environmental Impact</h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">Together, we're making a difference for our planet and future generations</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className={`${stat.bgColor} rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                  <Icon className={`${stat.color} h-10 w-10 transition-transform duration-300 group-hover:scale-110`} />
                </div>
                <h3 className="text-3xl font-bold text-eco-text mb-3 transition-colors duration-300 group-hover:text-primary">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
