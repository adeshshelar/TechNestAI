import { useState } from "react";
import axios from "axios";
import { Copy } from "lucide-react";

const CodeGenerator = () => {
  const [question, setQuestion] = useState("");
  const [language, setLanguage] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:8080/api/code/generate",
        {
          question,
          language,
        }
      );
      setGeneratedCode(
        typeof response.data === "string"
          ? response.data
          : JSON.stringify(response.data)
      );
    } catch (error) {
      setError("Failed to generate code. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" min-h-screen flex justify-center p-2">
    <div className=" rounded-lg w-full h-full p-5">
      <h1 className="text-3xl font-bold mb-2 text-center">
          Code Snippet Generator
     </h1>
     <h2 className="text-base text-gray-600 mb-4 text-center">
         Generate code snippets instantly based on your description and language.
     </h2>

        {/* Description Input */}
        <textarea
          className="w-full h-20 border border-gray-300 bg-gray-50 rounded-3xl p-3 mb-4 focus:outline-none"
          placeholder="Enter description for code..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />


        {/* Language Selection */}
        <select
          className="w-full border border-gray-300 bg-gray-50 rounded-2xl p-3 mb-4 focus:outline-none"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="">Select Language</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="C++">C++</option>
        </select>

        {/* Generate Button */}
        <div className="flex justify-end mt-2">
          <button
            onClick={handleSubmit}
            disabled={!question || !language || loading}
            className={`bg-gray-600 hover:bg-black text-white font-semibold py-3 px-6 rounded-lg ${
              loading || !question || !language
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            {loading ? "Generating..." : "Generate Code"}
          </button>
        </div>

        

        {/* Error Message */}
        {error && <p className="text-red-500 mt-3">{error}</p>}

        {/* Generated Code Output */}
        {generatedCode && (
          <div className="mt-3">
            <h2 className="text-xl font-semibold mb-2">Generated Code:</h2>
            <div className="relative bg-gray-100 rounded-xl p-4 max-h-[500px] overflow-y-auto shadow-lg mb-10" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                <code>{generatedCode}</code>
              </pre>
              <button
                onClick={() => navigator.clipboard.writeText(generatedCode)}
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

export default CodeGenerator; 
