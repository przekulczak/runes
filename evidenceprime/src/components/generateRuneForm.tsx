import { memo } from "react";

interface GenerateRuneFormProps {
  inputValue: string;
  error: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e?: React.FormEvent) => void;
}

export const GenerateRuneForm = memo(
  ({
    inputValue,
    error,
    handleInputChange,
    handleSubmit,
  }: GenerateRuneFormProps) => {
    return (
      <div className="mb-6">
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter numbers (1-9999)"
            className="flex-1 border border-gray-300 p-2 rounded"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Generate
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <p className="text-sm text-gray-500 mt-2">
          Enter a number from 1-9999 to generate the corresponding rune symbol.
        </p>
      </div>
    );
  }
);
