import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { 
  Code,
  Cpu,
  Network,
  Github,
  Terminal,
  CircuitBoard,
  Database,
  Server,
  Codesandbox,
  PhoneCall,
  Globe,
  Instagram,
  Phone,
  Mail,
  CheckCircle2,
  Box,
  DollarSign,
  ClipboardCheck,
  Users,
  FileText,
  BarChart3,
  Ticket,
  Car,
  Receipt
} from "lucide-react";
import Features from "@/components/Features";
import NeuralNetwork from "@/components/NeuralNetwork";
import ParticlesBackground from "@/components/ParticlesBackground";
import ChipAnimation from "@/components/ChipAnimation";

const modules = [
    {
      icon: <Box className="w-6 h-6 text-blue-500" />,
      title: "Gestão de Estoque",
      description: "Controle completo de produtos, entradas, saídas e inventário"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      title: "Financeiro",
      description: "Contas a pagar, receber, fluxo de caixa e conciliação bancária"
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-purple-500" />,
      title: "Vendas",
      description: "PDV, orçamentos, pedidos e acompanhamento de vendas"
    },
    {
      icon: <Users className="w-6 h-6 text-yellow-500" />,
      title: "Recursos Humanos",
      description: "Gestão de funcionários, folha de pagamento e ponto eletrônico"
    },
    {
      icon: <FileText className="w-6 h-6 text-red-500" />,
      title: "Fiscal",
      description: "Emissão de NF-e, NFC-e, controle de impostos e obrigações"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-indigo-500" />,
      title: "Relatórios",
      description: "Dashboards e relatórios personalizados para tomada de decisão"
    }
];

const codeSnippets = [
  {
    language: "TypeScript",
    code: "interface Developer {\n  name: string;\n  skills: string[];\n  experience: number;\n}",
    title: "Clean TypeScript"
  },
  {
    language: "React",
    code: "const [state, setState] = useState<Developer>();\nuseEffect(() => {\n  // Magic happens here\n}, []);",
    title: "React Hooks"
  },
  {
    language: "React Custom Hook",
    code: "const useDevTools = () => {\n  const [isOpen, setIsOpen] = useState(false);\n  return { isOpen, setIsOpen };\n};",
    title: "Custom Hooks"
  },
  {
    language: "React Context",
    code: "export const DevContext = createContext({});\n\nexport const DevProvider = ({ children }) => {\n  return <DevContext.Provider>{children}</DevContext.Provider>;\n};",
    title: "Context API"
  },
  {
    language: "React Query",
    code: "const { data, isLoading } = useQuery({\n  queryKey: ['projects'],\n  queryFn: fetchProjects\n});",
    title: "Data Fetching"
  },
  {
    language: "Tailwind CSS",
    code: "const styles = {\n  card: 'bg-gradient-to-r from-blue-500/20 to-purple-500/20',\n  text: 'text-transparent bg-clip-text bg-gradient-primary'\n};",
    title: "Styling"
  },
  {
    language: "Flutter",
    code: "class MyApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      home: MyHomePage(),\n    );\n  }\n}",
    title: "Flutter App"
  },
  {
    language: "FlutterFlow",
    code: "// FlutterFlow Generated Code\nreturn Scaffold(\n  body: SafeArea(\n    child: Column(\n      children: [\n        CustomWidget(),\n      ],\n    ),\n  ),\n);",
    title: "FlutterFlow Build"
  },
  {
    language: "Java",
    code: "public class Main {\n  public static void main(String[] args) {\n    System.out.println('Hello Java!');\n  }\n}",
    title: "Java Development"
  }
];

const SistemaErp = () => {
  const { toast } = useToast();

  const handleDemoRequest = () => {
    toast({
      title: "Solicitação Recebida!",
      description: "Em breve nossa equipe entrará em contato.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-primary-light to-secondary">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
        {/* Logo moved down with padding-top */}
        <div className="absolute top-20 left-4 z-50">
          <div className="flex items-center gap-2 bg-white/10 p-3 rounded-lg backdrop-blur-md">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-white">RD</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-2xl font-bold text-white">Rodrigo Dev</span>
              <span className="text-sm text-white/80 -mt-1">MT</span>
            </div>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <NeuralNetwork />
          <ChipAnimation />
        </div>
        <div className="absolute inset-0 z-10">
          <ParticlesBackground />
        </div>

        <div className="container relative z-20 px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="relative inline-block mb-8 mt-16">
                <div className="text-5xl md:text-7xl font-bold text-white relative z-10 tracking-tight">
                  Rodrigo Dev
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl rounded-full" />
              </div>

              {/* Tech Icons Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
                {[Github, Terminal, CircuitBoard, Database, Server, Codesandbox, Cpu, Network, Code].map((Icon, index) => (
                  <div
                    key={index}
                    className="bg-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
                  >
                    <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                  </div>
                ))}
              </div>

              {/* Code Snippets Grid - Updated with new layout and additional cards */}
              <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {codeSnippets.map((snippet, index) => (
                    <div
                      key={index}
                      className="glass-card p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        <Code className="w-5 h-5" />
                        {snippet.title}
                      </h3>
                      <div className="bg-black/40 rounded-lg p-4">
                        <pre className="text-sm text-blue-300 overflow-x-auto">
                          <code>{snippet.code}</code>
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 w-full sm:w-auto text-lg px-8 py-6 shadow-lg"
                  onClick={handleDemoRequest}
                >
                  <Code className="w-5 h-5 mr-2" />
                  Começar Agora
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/20 text-white hover:bg-white/10 w-full sm:w-auto text-lg px-8 py-6 backdrop-blur-sm"
                >
                  <Cpu className="w-5 h-5 mr-2" />
                  Ver Tecnologias
                </Button>
              </div>
            </div>

            {/* Right side animation */}
            <div className="flex-1 relative">
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <Network className="w-48 h-48 text-white animate-float" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white drop-shadow-lg">
            Módulos Principais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {module.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-200 transition-colors">
                  {module.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Contact Section - Updated styling */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-900/80 via-blue-800/80 to-purple-900/80 rounded-2xl p-8 lg:p-12 backdrop-blur-xl border border-white/20 shadow-2xl">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Pronto para Começar?
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white font-semibold">
              Agende uma demonstração gratuita e descubra como nosso sistema pode
              transformar sua empresa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 font-bold text-lg px-8 py-6"
                onClick={handleDemoRequest}
              >
                <PhoneCall className="w-5 h-5 mr-2" />
                Solicitar Contato
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/20 text-white hover:bg-white/10 font-bold text-lg px-8 py-6"
              >
                <CheckCircle2 className="w-5 h-5 mr-2" />
                Ver Planos
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white text-left max-w-3xl mx-auto bg-white/5 p-6 rounded-xl backdrop-blur-sm">
              <div className="space-y-4">
                <p className="flex items-center gap-3 text-lg hover:text-blue-200 transition-colors">
                  <Globe className="w-6 h-6" />
                  firstsistemas.acess.app
                </p>
                <p className="flex items-center gap-3 text-lg hover:text-blue-200 transition-colors">
                  <Instagram className="w-6 h-6" />
                  first_developer_mt
                </p>
                <p className="flex items-center gap-3 text-lg hover:text-blue-200 transition-colors">
                  <Phone className="w-6 h-6" />
                  (66) 99248-0993
                </p>
                <p className="flex items-center gap-3 text-lg hover:text-blue-200 transition-colors">
                  <Phone className="w-6 h-6" />
                  (66) 99225-8469
                </p>
              </div>
              <div className="space-y-4">
                <p className="flex items-center gap-3 text-lg hover:text-blue-200 transition-colors">
                  <Mail className="w-6 h-6" />
                  rodrigodev@yahoo.com
                </p>
                <p className="flex items-center gap-3 text-lg hover:text-blue-200 transition-colors">
                  <Mail className="w-6 h-6" />
                  rodrigodev@firstsistemas.com.br
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SistemaErp;
