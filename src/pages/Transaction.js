import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TransactionList({ transactions }) {
    const itemsPerPage = 10;
    const totalItems = transactions.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate(); // Use navigate for redirection

    // Get the transactions for the current page
    const currentTransactions = transactions.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Function to truncate text if it exceeds the specified length
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

    // Handle page change
    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div className="overflow-x-auto">
            <div className="min-w-full bg-white border border-gray-300 overflow-hidden sm:overflow-x-auto">
                <table className="min-w-full rounded-lg bg-white border border-gray-300">
                    <thead>
                        <tr className="text-left border-b bg-gray-50">
                            <th className="p-4">
                                <input type="checkbox" />
                            </th>
                            <th className="px-4">Item</th>
                            <th className="px-4">Price</th>
                            <th className="px-4">Date</th>
                            <th className="px-4">Status</th>
                            <th className="p-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentTransactions.map((transaction, index) => (
                            <tr key={index}>
                                <td className="p-4">
                                    <input type="checkbox" />
                                </td>
                                <td className="px-4">{truncateText(transaction.title, 50)}</td> {/* Display truncated product title */}
                                <td className="px-4">${transaction.price.toFixed(2)}</td> {/* Display price */}
                                <td className="px-4">{new Date().toLocaleDateString()}</td> {/* Placeholder for date */}
                                <td className="px-4">
                                    <span className="inline-block px-3 py-1 bg-green-200 rounded-full text-green-700">
                                        Completed
                                    </span>
                                </td>
                                <td className="p-4 space-x-2 flex">
                                    <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                                        <i className="codicon codicon-eye text-gray-600"></i>
                                    </button>
                                    <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                                        <i className="codicon codicon-edit text-gray-600"></i>
                                    </button>
                                    <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                                        <i className="codicon codicon-trash text-gray-600"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Footer with pagination */}
            <div className="flex justify-between items-center mt-4">
                <div className="text-sm text-gray-700">
                    Showing {itemsPerPage} per {totalItems} data
                </div>

                <nav aria-label="Page navigation example">
                    <ul className="list-style-none flex space-x-2">
                        {/* Previous Button */}
                        <li>
                            <a
                                onClick={() => handlePageChange(currentPage - 1)}
                                className={`relative block rounded bg-transparent px-3 py-1.5 text-sm 
                                    ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-surface hover:bg-neutral-100'}`}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </a>
                        </li>

                        {/* Page Numbers */}
                        {Array.from({ length: totalPages }, (_, index) => (
                            <li key={index}>
                                <a
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`relative block rounded px-3 py-1.5 text-sm font-medium transition duration-300 
                                        ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'text-surface hover:bg-neutral-100'}`}
                                >
                                    {index + 1}
                                    {currentPage === index + 1 && (
                                        <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0">
                                            (current)
                                        </span>
                                    )}
                                </a>
                            </li>
                        ))}

                        {/* Next Button */}
                        <li>
                            <a
                                onClick={() => handlePageChange(currentPage + 1)}
                                className={`relative block rounded bg-transparent px-3 py-1.5 text-sm 
                                    ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-surface hover:bg-neutral-100'}`}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default TransactionList;
