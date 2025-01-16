import { Card, CardContent } from "@/components/ui/card";
import {
  SiNodedotjs,
  SiReact,
  SiPython,
  SiFirebase,
  SiFlutter,
  SiSupabase,
  SiEspressif,
  SiJava,
  SiTypescript,
  SiFigma,
} from "react-icons/si";

const technologies = [
  { name: "Node.js", icon: SiNodedotjs },
  { name: "React", icon: SiReact },
  { name: "Python", icon: SiPython },
  { name: "Firebase", icon: SiFirebase },
  { name: "Flutter", icon: SiFlutter },
  { name: "Supabase", icon: SiSupabase },
  { name: "ESP32", icon: SiEspressif },
  { name: "Java", icon: SiJava },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Figma", icon: SiFigma },
];

const Technologies = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Tecnologias
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <Card
              key={tech.name}
              className="hover:shadow-lg transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="flex flex-col items-center justify-center p-6">
                <tech.icon className="w-12 h-12 text-primary mb-4" />
                <span className="text-sm font-medium">{tech.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;