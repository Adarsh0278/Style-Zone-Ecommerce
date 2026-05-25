import 'react';

function SearchBar() {
  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}