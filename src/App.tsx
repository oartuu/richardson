import { ArrowRight, Library, Notebook } from "lucide-react";

export default function App() {
  return (
    <div className="bg-secondary h-screen w-screen flex flex-col items-center justify-center">
      <h1>Hello, World!</h1>
      <div className="bg-indigo-950 p-4 flex items-center justify-center gap-3 rounded-xl">
        <div className="flex items-center text-slate-50">
          <select
            className=" bg-indigo-950 text-slate-50 font-bold appearance-none p-2 border border-gray-300 rounded-md shadow-sm outline-none border-none"
            name="assunto"
            id=""
          >
            <option value="MATÉRIA" disabled>
              Matéria
            </option>
            <option value="Biologia">Biologia</option>
            <option value="Matemática">Matemática</option>
            <option value="Física">Física</option>
            <option value="Química">Química</option>
          </select>
          <span>
            <Notebook />
          </span>
        </div>

        <div className="flex items-center text-slate-50">
          <select
            className=" bg-indigo-950 text-slate-50 font-bold appearance-none p-2 border border-gray-300 rounded-md shadow-sm outline-none border-none"
            name="assunto"
            id=""
          >
            <option value="assunto" disabled>
              ASSUNTO
            </option>
            <option value="Biologia">Biologia</option>
            <option value="Matemática">Matemática</option>
            <option value="Física">Física</option>
            <option value="Química">Química</option>
          </select>
          <span>
            <Library />
          </span>
        </div>

        <button className="bg-primary px-4 py-1 text-slate-50 font-bold rounded-md flex items-center justify-center gap-2">
          ESTUDAR
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
