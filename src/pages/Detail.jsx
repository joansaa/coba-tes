import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Detail = ({ transactions, onClose}) => {
    const { transactionId } = useParams();
    const [transaction, setTransaction] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("transactionId:", transactionId);
        console.log("transactions:", transactions);
    
        const selectedTransaction = transactions.find(
            (t) => t.id.toString() === transactionId
        );
        setTransaction(selectedTransaction);
    }, [transactionId, transactions]);

    if (!transaction) {
        return <div>{transactions.length === 0 ? "No transactions found." : "Loading..."}</div>;
    }    

    return (
        <div className="modal-overlay">
            <div className="floating-card">
                <div className="relative flex items-center justify-center mb-4">
                    <h2 className="font-semibold text-lg">Transaction Details</h2>
                </div>

                <div className="text-left mb-4">
                    <p><strong>Item:</strong> {transaction.title}</p>
                </div>

                <div className="text-left mb-4">
                    <p><strong>Price:</strong> ${transaction.price.toFixed(2)}</p>
                </div>

                <div className="text-left mb-4">
                    <p><strong>Date:</strong> {transaction.date}</p>
                </div>

                <div className="text-left mb-4">
                    <p><strong>Status:</strong> {transaction.status}</p>
                </div>

                <div className="text-center">
                    <button
                        onClick={() => {
                            onClose(); // Close floating card
                            navigate('/dashboard'); // Navigate back to dashboard
                        }}
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Detail;
