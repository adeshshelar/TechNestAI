import { useState } from "react";
import axios from "axios";
import { Copy } from "lucide-react";

const QuestionGenerator = () => {
  const [technology, setTechnology] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [generatedQuestions, setGeneratedQuestions] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:8080/api/questions/generate",
        {
          technology,
          difficulty,
        }
      );
      setGeneratedQuestions(
        typeof response.data === "string"
          ? response.data
          : JSON.stringify(response.data, null, 2)
      );
    } catch (error) {
      setError("Failed to generate interview questions. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center p-2">
      <div className="rounded-lg w-full h-full p-5">
        <h1 className="text-3xl font-bold mb-2 text-center">
          Interview Question Generator
        </h1>
        <h2 className="text-base text-gray-600 mb-7 text-center">
          Generate tailored interview questions based on technology and difficulty level.
        </h2>

        {/* Technology Input */}
        <input
          type="text"
          className="w-full border border-gray-300 bg-gray-50 rounded-2xl p-3 mb-4 focus:outline-none"
          placeholder="Enter Technology (e.g., Java, React, Python)"
          value={technology}
          onChange={(e) => setTechnology(e.target.value)}
        />

        {/* Difficulty Selection */}
        <select
          className="w-full border border-gray-300 bg-gray-50 rounded-2xl p-3 mb-4 focus:outline-none"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="">Select Difficulty Level</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        {/* Generate Button */}
        <div className="flex justify-end mt-2">
          <button
            onClick={handleSubmit}
            disabled={!technology || !difficulty || loading}
            className={`bg-gray-600 hover:bg-black text-white font-semibold py-3 px-6 rounded-lg ${
              loading || !technology || !difficulty
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            {loading ? "Generating..." : "Generate Questions"}
          </button>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 mt-3">{error}</p>}

        {/* Generated Questions Output */}
        {generatedQuestions && (
          <div className="mt-3">
            <h2 className="text-xl font-semibold mb-2">Generated Questions:</h2>
            <div
              className="relative bg-gray-100 rounded-xl p-4 max-h-[500px] overflow-y-auto shadow-lg mb-10"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                <code>{generatedQuestions}</code>
              </pre>
              <button
                onClick={() => navigator.clipboard.writeText(generatedQuestions)}
                className="absolute top-2 right-2 p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-all"
              >
                <Copy size={18} className="text-white" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionGenerator;
