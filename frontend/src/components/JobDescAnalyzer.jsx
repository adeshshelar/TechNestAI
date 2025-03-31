import { useState } from "react";
import axios from "axios";
import { Copy } from "lucide-react";

const JobDescAnalyzer = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [generatedAnalysis, setGeneratedAnalysis] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:8080/api/job/analyze",
        {
          jobDescription,
        }
      );
      setGeneratedAnalysis(
        typeof response.data === "string"
          ? response.data
          : JSON.stringify(response.data, null, 2)
      );
    } catch (error) {
      setError("Failed to analyze job description. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center p-2">
      <div className="rounded-lg w-full h-full p-5">
        <h1 className="text-3xl font-bold mb-2 text-center">
          Job Description Analyzer
        </h1>
        <h2 className="text-base text-gray-600 mb-4 text-center">
          Analyze job descriptions to identify key skills and match your expertise efficiently.
        </h2>

        {/* Job Description Input */}
        <textarea
          className="w-full h-32 border border-gray-300 bg-gray-50 rounded-2xl p-3 mb-4 focus:outline-none"
          placeholder="Enter Job Description..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />

        {/* Analyze Button */}
        <div className="flex justify-end mt-2">
          <button
            onClick={handleSubmit}
            disabled={!jobDescription || loading}
            className={`bg-gray-600 hover:bg-black text-white font-semibold py-3 px-6 rounded-lg ${
              loading || !jobDescription ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Analyzing..." : "Analyze Job"}
          </button>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 mt-3">{error}</p>}

        {/* Generated Analysis Output */}
        {generatedAnalysis && (
          <div className="mt-3">
            <h2 className="text-xl font-semibold mb-2">Job Description Analysis:</h2>
            <div
              className="relative bg-gray-100 rounded-xl p-4 max-h-[500px] overflow-y-auto shadow-lg mb-10"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                <code>{generatedAnalysis}</code>
              </pre>
              <button
                onClick={() => navigator.clipboard.writeText(generatedAnalysis)}
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

export default JobDescAnalyzer;
