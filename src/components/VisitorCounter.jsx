import { useEffect, useState } from "react";

function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    try {
      const hasVisited = sessionStorage.getItem("hasVisited");
      const savedCount = Number(localStorage.getItem("visitorCount")) || 0;

      if (!hasVisited) {
        const newCount = savedCount + 1;
        localStorage.setItem("visitorCount", String(newCount));
        sessionStorage.setItem("hasVisited", "true");
        setCount(newCount);
      } else {
        setCount(savedCount);
      }
    } catch (error) {
      console.error("Visitor counter error:", error);
    }
  }, []);

  return <div className="text-sm text-gray-400">Visitors: {count}</div>;
}

export default VisitorCounter;