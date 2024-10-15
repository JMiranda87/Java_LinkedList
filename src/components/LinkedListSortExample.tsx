import React, { useState, useEffect } from 'react';

const LinkedListSortExample: React.FC = () => {
  const [output, setOutput] = useState<string[]>([]);

  useEffect(() => {
    const linkedList: string[] = ["A", "C", "B", "D"];

    const addOutput = (message: string) => {
      setOutput((prev) => [...prev, message]);
    };

    // Unsorted
    addOutput(`Unsorted: ${linkedList.join(', ')}`);

    // 1. Sort the list
    linkedList.sort();
    addOutput(`Sorted: ${linkedList.join(', ')}`);

    // 2. Custom sorting (reverse order)
    linkedList.sort((a, b) => b.localeCompare(a));
    addOutput(`Custom sorted (reverse order): ${linkedList.join(', ')}`);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Example Two: How to Sort LinkedList</h2>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </pre>
    </div>
  );
};

export default LinkedListSortExample;