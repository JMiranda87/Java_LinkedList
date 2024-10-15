import React, { useState, useEffect } from 'react';

const LinkedListExample: React.FC = () => {
  const [output, setOutput] = useState<string[]>([]);

  useEffect(() => {
    const linkedList: string[] = [];

    const addOutput = (message: string) => {
      setOutput((prev) => [...prev, message]);
    };

    // Simulating LinkedList operations
    linkedList.push("Item1", "Item5", "Item3", "Item6", "Item2");
    addOutput(`Linked List Content: ${linkedList.join(', ')}`);

    linkedList.unshift("First Item");
    linkedList.push("Last Item");
    addOutput(`LinkedList Content after addition: ${linkedList.join(', ')}`);

    const firstVar = linkedList[0];
    addOutput(`First element: ${firstVar}`);

    linkedList[0] = "Changed first item";
    const firstVar2 = linkedList[0];
    addOutput(`First element after update by set method: ${firstVar2}`);

    linkedList.shift();
    linkedList.pop();
    addOutput(`LinkedList after deletion of first and last element: ${linkedList.join(', ')}`);

    linkedList.unshift("Newly added item");
    linkedList.splice(2, 1);
    addOutput(`Final Content: ${linkedList.join(', ')}`);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Example One: LinkedList Methods</h2>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </pre>
    </div>
  );
};

export default LinkedListExample;