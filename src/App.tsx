import React from 'react';
import LinkedListExample from './components/LinkedListExample';
import LinkedListSortExample from './components/LinkedListSortExample';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">LinkedList Processing Examples</h1>
      <div className="max-w-4xl mx-auto space-y-8">
        <LinkedListExample />
        <LinkedListSortExample />
      </div>
    </div>
  );
}

export default App;