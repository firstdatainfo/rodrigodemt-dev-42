import { Code } from "lucide-react";

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

const CodeSnippets = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {codeSnippets.map((snippet, index) => (
          <div
            key={index}
            className="bg-primary p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:bg-primary-light"
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
  );
};

export default CodeSnippets;
