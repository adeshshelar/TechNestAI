
const Dashboard = () => {
  return (
    <div className="min-h-screen  items-center p-6">
      {/* Main Content */}
      <div className="w-full bg-white rounded-3xl p-8 mt-6">
        {/* Welcome Line */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        Boost Efficiency with AI-Powered Task Automation
        </h1>

        {/* Subline */}
        <p className="text-lg text-center text-gray-600 mb-6 leading-relaxed">
        Harness the power of AI to automate tasks, generate code, and streamline your workflow.
        From <br />crafting emails to analyzing APIs, Technestai empowers you to achieve more.
        </p>

        {/* Centered Image */}
        <img src="/front.png" alt="Technestai" className="w-64 h-44 mx-auto mb-3" />

        {/* Section Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Box 1 */}
          <div className="bg-white hover:shadow-lg transition-all p-4 rounded-xl shadow-xl text-center cursor-pointer h-40">
            <h2 className="text-lg font-semibold mb-2">📄Code Snippet Generator</h2>
            <p className="text-sm text-gray-600">
              Generate optimized code snippets quickly.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-white hover:shadow-lg transition-all p-4 rounded-xl shadow-xl text-center cursor-pointer h-40">
            <h2 className="text-lg font-semibold mb-2">📧Email Reply Generator</h2>
            <p className="text-sm text-gray-600">
              Craft quick and professional email replies.
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-white hover:shadow-lg transition-all p-4 rounded-xl shadow-xl text-center cursor-pointer h-40">
            <h2 className="text-lg font-semibold mb-2">💡Project Idea Generator</h2>
            <p className="text-sm text-gray-600">
              Get innovative project ideas instantly.
            </p>
          </div>

          {/* Box 4 */}
          <div className="bg-white hover:shadow-lg transition-all p-4 rounded-xl shadow-xl text-center cursor-pointer h-40">
            <h2 className="text-lg font-semibold mb-2">📝Job Desc Analyzer</h2>
            <p className="text-sm text-gray-600">
              Analyze and refine job descriptions.
            </p>
          </div>

          {/* Box 5 */}
          <div className="bg-white hover:shadow-lg transition-all p-4 rounded-xl shadow-xl text-center cursor-pointer h-40">
            <h2 className="text-lg font-semibold mb-2">🎯Interview Question Gen</h2>
            <p className="text-sm text-gray-600">
              Generate relevant interview questions.
            </p>
          </div>
        </div>

        </div>
      </div>
  );
};

export default Dashboard;
