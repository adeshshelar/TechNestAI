import { useState } from "react";
import axios from "axios";
import { Copy } from "lucide-react";

const ProjectIdeaGenerator = () => {
  const [domain, setDomain] = useState("");
  const [technology, setTechnology] = useState("");
  const [userLevel, setUserLevel] = useState("");
  const [generatedIdea, setGeneratedIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:8080/api/projects/generate",
        {
          domain,
          technology,
          userLevel,
        }
      );
      setGeneratedIdea(
        typeof response.data === "string"
          ? response.data
          : JSON.stringify(response.data, null, 2)
      );
    } catch (error) {
      setError("Failed to generate project idea. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center p-2">
      <div className="rounded-lg w-full h-full p-5">
        <h1 className="text-3xl font-bold mb-2 text-center">
          Project Idea Generator
        </h1>
        <h2 className="text-base text-gray-600 mb-6 text-center">
          Get innovative project ideas based on your selected domain, technology, and user level.
        </h2>

        {/* Domain Input */}
        <input
          type="text"
          className="w-full border border-gray-300 bg-gray-50 rounded-lg p-3 mb-4 focus:outline-none"
          placeholder="Enter Domain (e.g., Healthcare, IoT, AI)"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        />

        {/* Technology Input */}
        <input
          type="text"
          className="w-full border border-gray-300 bg-gray-50 rounded-lg p-3 mb-4 focus:outline-none"
          placeholder="Enter Technology (e.g., React, Java, Python)"
          value={technology}
          onChange={(e) => setTechnology(e.target.value)}
        />

        {/* User Level Selection */}
        <select
          className="w-full border border-gray-300 bg-gray-50 rounded-lg p-3 mb-4 focus:outline-none"
          value={userLevel || ""}
          onChange={(e) => setUserLevel(e.target.value)}
        >
          <option value="">Select User Level (Optional)</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        {/* Generate Button */}
        <div className="flex justify-end mt-2">
          <button
            onClick={handleSubmit}
            disabled={!domain || !technology || loading}
            className={`bg-gray-600 hover:bg-black text-white font-semibold py-3 px-6 rounded-lg ${
              loading || !domain || !technology ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Generating..." : "Generate Idea"}
          </button>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 mt-3">{error}</p>}

        {/* Generated Idea Output */}
        {generatedIdea && (
          <div className="mt-3">
            <h2 className="text-xl font-semibold mb-2">Generated Project Idea:</h2>
            <div
              className="relative bg-gray-100 rounded-xl p-4 max-h-[500px] overflow-y-auto shadow-lg mb-10"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                <code>{generatedIdea}</code>
              </pre>
              <button
                onClick={() => navigator.clipboard.writeText(generatedIdea)}
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

export default ProjectIdeaGenerator;
