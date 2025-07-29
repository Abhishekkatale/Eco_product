import { Recycle, Leaf, Users, Globe } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Recycle,
      value: "50,000+",
      label: "Plastic items saved",
      color: "text-primary",
      bgColor: "bg-primary bg-opacity-10"
    },
    {
      icon: Leaf,
      value: "25 tons",
      label: "CO2 emissions reduced",
      color: "text-secondary",
      bgColor: "bg-secondary bg-opacity-10"
    },
    {
      icon: Users,
      value: "10,000+",
      label: "Happy customers",
      color: "text-accent",
      bgColor: "bg-accent bg-opacity-10"
    },
    {
      icon: Globe,
      value: "100%",
      label: "Carbon neutral shipping",
      color: "text-eco-success",
      bgColor: "bg-eco-success bg-opacity-10"
    }
  ];

  return (
    <section className="bg-white py-16 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-eco-text mb-4">Our Environmental Impact</h2>
          <p className="text-gray-600 text-lg">Together, we're making a difference</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className={`${stat.bgColor} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`${stat.color} h-8 w-8`} />
                </div>
                <h3 className="text-2xl font-bold text-eco-text mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
