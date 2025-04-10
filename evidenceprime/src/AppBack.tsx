import "./App.css";
import { useState } from "react";

export const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [generatedSVGs, setGeneratedSVGs] = useState<any[]>([]);

  const runeShapes: any = {
    "1": "M10,50 L10,10 L25,10",
    "2": "M10,10 L10,50 M10,23 L25,23",
    "3": "M10,10 L10,50 M10,10 L25,25",
    "4": "M10,10 L10,50 M10,25 L27,10",
    "5": "M10,10 L10,50 M10,10 L25,25 M25,25 L10,25",
    "6": "M10,10 L10,50 M20,10 L20,20",
    "7": "M10,50 L10,10 L25,10 L25,20",
    "8": "M10,10 L10,50 M25,10 L25,19 M10,19 L25,19",
    "9": "M10,10 L10,50 M25,10 L25,19 M10,19 L25,19 M10,10 L25,10",
    "10": "M25,50 L25,10 L10,10",
    "20": "M25,10 L25,50 M25,23 L10,23",
    "30": "M25,10 L25,50 M25,10 L10,25",
    "40": "M25,10 L25,50 M25,25 L8,10",
    "50": "M25,10 L25,50 M25,10 L10,25 M10,25 L25,25",
    "60": "M25,10 L25,50 M15,10 L15,20",
    "70": "M25,50 L25,10 L10,10 L10,20",
    "80": "M25,10 L25,50 M10,10 L10,19 M25,19 L10,19",
    "90": "M25,10 L25,50 M10,10 L10,19 M25,19 L10,19 M25,10 L10,10",
    "100": "M10,50 L10,10 M10,50 L25,50",
    "200": "M10,10 L10,50 M10,37 L25,37",
    "300": "M10,10 L10,50 M10,50 L25,35",
    "400": "M10,10 L10,50 M10,35 L25,50",
    "500": "M10,10 L10,50 M10,50 L25,50 M25,50 L10,35",
    "600": "M10,10 L10,50 M20,40 L20,50",
    "700": "M10,50 L10,10 M10,50 L25,50 L25,35",
    "800": "M10,10 L10,50 M10,35 L25,35 M25,35 L25,50",
    "900": "M10,10 L10,50 M25,40 L25,50 M10,40 L25,40 M10,50 L25,50",
    "1000": "M25,50 L25,10 M10,50 L25,50",
    "2000": "M25,10 L25,50 M10,37 L25,37",
    "3000": "M25,10 L25,50 M10,35 L25,50",
    "4000": "M25,10 L25,50 M25,35 L10,50",
    "5000": "M25,10 L25,50 M10,50 L25,50 M25,35 L10,50",
    "6000": "M25,10 L25,50 M10,40 L10,50",
    "7000": "M25,10 L25,50 M25,50 L10,50 L10,35",
    "8000": "M25,10 L25,50 M10,35 L25,35 M10,35 L10,50",
    "9000": "M25,10 L25,50 M10,40 L10,50 M10,40 L25,40 M10,50 L25,50",
  };

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const generateSVGs = () => {
    const chars = inputValue.split("");
    const svgs = chars
      .map((char) => {
        // Only use digits 1-9
        if (/[1-9]/.test(char)) {
          return char;
        }
        return null;
      })
      .filter(Boolean);

    setGeneratedSVGs(svgs);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Rune Symbol Generator</h1>

      <div className="mb-6">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter digits (1-9)"
            className="flex-1 border border-gray-300 p-2 rounded"
          />
          <button
            onClick={generateSVGs}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Generate
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Enter a sequence of digits from 1-9 to generate the corresponding rune
          symbols.
        </p>
      </div>

      {generatedSVGs.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Generated Runes</h2>
          <div className="flex flex-wrap gap-4">
            {generatedSVGs.map((digit, index) => (
              <div
                key={index}
                className="border border-gray-200 p-4 rounded bg-gray-50"
              >
                <svg
                  width="50"
                  height="60"
                  viewBox="0 0 50 60"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d={runeShapes[digit]}
                    stroke="black"
                    strokeWidth="2"
                    fill="none"
                  />
                  <text x="25" y="58" fontSize="12" textAnchor="middle">
                    {digit}
                  </text>
                </svg>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 border-t pt-4">
        <h2 className="text-xl font-semibold mb-4">Reference Guide</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Single Digits (1-9) */}
          <div>
            <h3 className="text-lg font-medium mb-2">Single Digits (1-9)</h3>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
                <div
                  key={digit}
                  className="border border-gray-200 p-2 rounded bg-gray-50"
                >
                  <svg
                    width="50"
                    height="60"
                    viewBox="0 0 50 60"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d={runeShapes[digit.toString()]}
                      stroke="black"
                      strokeWidth="2"
                      fill="none"
                    />
                    <text x="25" y="58" fontSize="12" textAnchor="middle">
                      {digit}
                    </text>
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Tens (10-90) */}
          <div>
            <h3 className="text-lg font-medium mb-2">Tens (10-90)</h3>
            <div className="grid grid-cols-3 gap-2">
              {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((digit) => (
                <div
                  key={digit}
                  className="border border-gray-200 p-2 rounded bg-gray-50"
                >
                  <svg
                    width="50"
                    height="60"
                    viewBox="0 0 50 60"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d={runeShapes[digit.toString()]}
                      stroke="black"
                      strokeWidth="2"
                      fill="none"
                    />
                    <text x="25" y="58" fontSize="12" textAnchor="middle">
                      {digit}
                    </text>
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Hundreds (100-900) */}
          <div>
            <h3 className="text-lg font-medium mb-2">Hundreds (100-900)</h3>
            <div className="grid grid-cols-3 gap-2">
              {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((digit) => (
                <div
                  key={digit}
                  className="border border-gray-200 p-2 rounded bg-gray-50"
                >
                  <svg
                    width="50"
                    height="60"
                    viewBox="0 0 50 60"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d={runeShapes[digit.toString()] || runeShapes["100"]}
                      stroke="black"
                      strokeWidth="2"
                      fill="none"
                    />
                    <text x="25" y="58" fontSize="12" textAnchor="middle">
                      {digit}
                    </text>
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Thousands (1000-9000) */}
          <div>
            <h3 className="text-lg font-medium mb-2">Thousands (1000-9000)</h3>
            <div className="grid grid-cols-3 gap-2">
              {[1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000].map(
                (digit) => (
                  <div
                    key={digit}
                    className="border border-gray-200 p-2 rounded bg-gray-50"
                  >
                    <svg
                      width="50"
                      height="60"
                      viewBox="0 0 50 60"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d={runeShapes[digit.toString()] || runeShapes["100"]}
                        stroke="black"
                        strokeWidth="2"
                        fill="none"
                      />
                      <text x="25" y="58" fontSize="12" textAnchor="middle">
                        {digit}
                      </text>
                    </svg>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
