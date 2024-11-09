// Detail.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Detail = ({ transactions, onClose }) => {
    const { transactionId } = useParams(); // Get the transaction ID from route
    const [transaction, setTransaction] = useState(null);

    useEffect(() => {
        // Find transaction based on ID
        const selectedTransaction = transactions.find(t => t.id === parseInt(transactionId));
        setTransaction(selectedTransaction);
    }, [transactionId, transactions]);

    if (!transaction) return null; // Display nothing until transaction is found

    return (
        <div className="modal-overlay">
            <div className="floating-card">
                <div className="relative flex items-center justify-center mb-4">
                    <h2 className="font-semibold text-lg">Transaction Details</h2>
                    <button
                        className="absolute right-0 text-gray-500 hover:text-gray-800"
                        onClick={onClose}
                        aria-label="Close"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="space-y-4">
                    <div className="text-left">
                        <label className="font-semibold text-gray-800">Item</label>
                        <p>{transaction.item}</p>
                    </div>
                    <div className="text-left">
                        <label className="font-semibold text-gray-800">Price</label>
                        <p>${transaction.price.toFixed(2)}</p>
                    </div>
                    <div className="text-left">
                        <label className="font-semibold text-gray-800">Date</label>
                        <p>{transaction.date}</p>
                    </div>
                    <div className="text-left">
                        <label className="font-semibold text-gray-800">Status</label>
                        <p>{transaction.status}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
