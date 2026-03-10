import React from "react";
import { researchPapers } from "../data/siteData";

const ResearchRoute = () => {
  return (
    <div className="research-route py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Our Research</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Explore the latest clinical studies and scientific contributions from the Belleville Dental team.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {researchPapers.map((paper) => (
            <div
              key={paper.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{paper.title}</h2>
                <p className="text-sm text-gray-600 mb-2">{paper.authors}</p>
                <p className="text-sm text-gray-500 mb-4">
                  {paper.journal}, {paper.year} | {paper.volume} | {paper.pages}
                </p>
                <p className="text-gray-700 mb-4 line-clamp-4">{paper.abstract}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">DOI: {paper.doi}</span>
                  <a
                    href={paper.fullTextLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
                  >
                    Read Full Paper
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchRoute;