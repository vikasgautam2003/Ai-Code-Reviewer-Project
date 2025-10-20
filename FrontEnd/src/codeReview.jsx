

import { useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import Editor from "react-simple-code-editor";
import axios from "axios";
import Markdown from "react-markdown";
import "./App.css";

function CodeReview() {
  const [code, setCode] = useState(`function sum(a, b) { return a + b; }`);
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  async function reviewCode() {
    try {
      setLoading(true);
      setReview(""); 
        const response = await axios.post(
        `https://syntaxly-ai.onrender.com/ai/get-review`,
        { code }
        );

      setReview(response.data);
    } catch (err) {
      console.error(err);
      setReview("Error fetching review.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="h-screen w-screen p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex flex-col md:flex-row gap-6">
      
      {/* --- Editor Panel --- */}
      <div className="flex-1 bg-gray-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden relative">
        <div className="flex-1 p-6 overflow-auto scrollbar-thin scrollbar-thumb-gray-600/40 scrollbar-track-gray-900/20">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) => Prism.highlight(code, Prism.languages.javascript, "javascript")}
            padding={20}
            className="bg-gray-900 text-white font-mono text-sm md:text-base rounded-xl focus:outline-none"
          />
        </div>
        <button
          onClick={reviewCode}
          disabled={loading}
          className={`absolute bottom-6 right-6 px-6 py-2 font-semibold rounded-xl shadow-lg transition-transform duration-200 ${
            loading
              ? "bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300 cursor-not-allowed opacity-80"
              : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:scale-105"
          }`}
        >
          {loading ? "Reviewing..." : "Review"}
        </button>
      </div>


      <div className="flex-1 bg-gray-800 rounded-2xl shadow-2xl p-8 overflow-auto max-h-full scrollbar-thin scrollbar-thumb-gray-600/40 scrollbar-track-gray-900/20">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-full space-y-6">
 
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-4 border-t-4 border-gray-600 border-t-purple-500 animate-spin"></div>
            </div>
            <p className="text-gray-300 text-lg tracking-wide">Analyzing your code...</p>
          </div>
        ) : review ? (
          <div className="animate-fadeIn">
            <Markdown
              children={review}
              components={{
                p({ children }) {
                  const text = children[0];
                  if (typeof text === "string") {
                    if (text.startsWith("❌")) {
                      return (
                        <div className="bg-red-900/60 border border-red-700 rounded-2xl p-6 mb-8 shadow-lg">
                          <h3 className="text-red-300 font-semibold flex items-center gap-2 mb-3">
                            ❌ Bad Code
                          </h3>
                          <p className="text-red-100 ml-6 leading-relaxed">
                            {text.replace("❌", "")}
                          </p>
                        </div>
                      );
                    } else if (text.startsWith("✅")) {
                      return (
                        <div className="bg-green-900/60 border border-green-700 rounded-2xl p-6 mb-8 shadow-lg">
                          <h3 className="text-green-300 font-semibold flex items-center gap-2 mb-3">
                            ✅ Recommended Fix
                          </h3>
                          <p className="text-green-100 ml-6 leading-relaxed">
                            {text.replace("✅", "")}
                          </p>
                        </div>
                      );
                    } else if (text.startsWith("💡")) {
                      return (
                        <div className="bg-blue-900/60 border border-blue-700 rounded-2xl p-6 mb-8 shadow-lg">
                          <h3 className="text-blue-300 font-semibold flex items-center gap-2 mb-3">
                            💡 Improvements
                          </h3>
                          <p className="text-blue-100 ml-6 leading-relaxed">
                            {text.replace("💡", "")}
                          </p>
                        </div>
                      );
                    }
                  }
                  return (
                    <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-5 mb-6 shadow-inner">
                      <p className="text-gray-300 ml-4 leading-relaxed">{children}</p>
                    </div>
                  );
                },
                code({ inline, className, children, ...props }) {
                  return (
                    <pre
                      className="bg-gray-900/70 backdrop-blur-sm border border-gray-600 p-4 my-4 rounded-md text-gray-200 text-sm overflow-x-auto shadow-inner"
                      {...props}
                    >
                      <code>{children}</code>
                    </pre>
                  );
                },
                h1: ({ children }) => (
                  <h1 className="text-gray-100 text-2xl font-bold my-6">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-gray-100 text-xl font-semibold my-5">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-gray-100 text-lg font-semibold my-4">{children}</h3>
                ),
                strong: ({ children }) => <strong className="text-white">{children}</strong>,
                li: ({ children }) => (
                  <li className="text-gray-300 ml-8 list-disc my-2 leading-relaxed">
                    {children}
                  </li>
                ),
              }}
            />
          </div>
        ) : (
          <p className="text-gray-400 italic text-center mt-10 text-lg">
            AI review will appear here after clicking "Review"
          </p>
        )}
      </div>
    </main>
  );
}

export default CodeReview;
