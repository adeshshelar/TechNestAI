import { useState } from "react";
import axios from "axios";
import { Copy } from "lucide-react";

const EmailReplyGenerator = () => {
  const [emailContent, setEmailContent] = useState("");
  const [tone, setTone] = useState("");
  const [generatedReply, setGeneratedReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:8080/api/email/generate",
        {
          emailContent,
          tone,
        }
      );
      setGeneratedReply(
        typeof response.data === "string"
          ? response.data
          : JSON.stringify(response.data, null, 2)
      );
    } catch (error) {
      setError("Failed to generate email. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center p-2">
      <div className="rounded-lg w-full h-full p-5">
        <h1 className="text-3xl font-bold mb-2 text-center">
          Email Reply Generator
        </h1>
        <h2 className="text-base text-gray-600 mb-4 text-center">
          Generate replies instantly, saving time and ensuring a polished response every time.
        </h2>

        {/* Email Content Input */}
        <textarea
          className="w-full h-32 border border-gray-300 bg-gray-50 rounded-3xl p-3 mb-4 focus:outline-none"
          placeholder="Enter original email content..."
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
        />

        {/* Tone Selection */}
        <select
          className="w-full border border-gray-300 bg-gray-50 rounded-2xl p-3 mb-4 focus:outline-none"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
        >
          <option value="">Select Tone (Optional)</option>
          <option value="Professional">Professional</option>
          <option value="Casual">Casual</option>
          <option value="Friendly">Friendly</option>
        </select>

        {/* Generate Button */}
        <div className="flex justify-end mt-2">
          <button
            onClick={handleSubmit}
            disabled={!emailContent || loading}
            className={`bg-gray-600 hover:bg-black text-white font-semibold py-3 px-6 rounded-lg ${
              loading || !emailContent ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Generating..." : "Generate Reply"}
          </button>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 mt-3">{error}</p>}

        {/* Generated Reply Output */}
        {generatedReply && (
          <div className="mt-3">
            <h2 className="text-xl font-semibold mb-2">Generated Reply:</h2>
            <div
                className="relative bg-gray-100 rounded-xl p-4 max-h-60 overflow-y-auto shadow-lg mb-10"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#888 #f1f1f1",
                  msOverflowStyle: "none",
                }}
              > <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                <code>{generatedReply}</code>
              </pre>
              <button
                onClick={() => navigator.clipboard.writeText(generatedReply)}
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

export default EmailReplyGenerator;
