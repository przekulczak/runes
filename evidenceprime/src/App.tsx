import "./App.css";
import { useCreateRune } from "./hooks/useCreateRune";
import { handleSvgDownload } from "./helpers/handleSvgDownload";
import { GenerateRuneForm } from "./components/generateRuneForm";
import { GeneratedRune } from "./components/generatedRune";

export const App = () => {
  const { inputValue, generatedSVG, handleInputChange, error, handleSubmit } =
    useCreateRune();

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Rune Symbol Generator</h1>
      <GenerateRuneForm
        inputValue={inputValue}
        error={error}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <GeneratedRune
        generatedSVG={generatedSVG}
        inputValue={inputValue}
        handleSvgDownload={handleSvgDownload}
      />
    </div>
  );
};

export default App;
