import { memo } from "react";

interface GeneratedRuneProps {
  generatedSVG: string;
  inputValue: string;
  handleSvgDownload: (svgContent: string, value: number) => void;
}

export const GeneratedRune = memo(
  ({ generatedSVG, inputValue, handleSvgDownload }: GeneratedRuneProps) => {
    if (generatedSVG.length === 0) {
      return null;
    }

    const svgContent = `<svg width="50" height="60" viewBox="0 0 50 60" xmlns="http://www.w3.org/2000/svg">
    <path d="${generatedSVG}" stroke="black" strokeWidth="2" fill="none"/>
    <text x="25" y="58" fontSize="12" textAnchor="middle"></text>
  </svg>`;

    return (
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Generated Rune</h2>
        <div className="flex flex-wrap gap-4">
          <div className="border border-gray-200 p-4 rounded bg-gray-50 flex flex-col items-center">
            <svg
              width="50"
              height="60"
              viewBox="0 0 50 60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={generatedSVG}
                stroke="black"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <button
              onClick={() =>
                handleSvgDownload(svgContent, parseInt(inputValue))
              }
              className="mt-2 text-sm bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
            >
              Download
            </button>
          </div>
        </div>
      </div>
    );
  }
);
