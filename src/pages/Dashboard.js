import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddTransaction from './Add';
import TransactionList from './Transaction';

const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products'); // Updated API URL
                const data = await response.json();
                setTransactions(data);  // Simpan data ke dalam state
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTransactions();
    }, []);

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent align-[-0.125em] text-blue-500 motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                >
                </div>
            </div>
        );
    }

    return (
        <div className="h-screen flex flex-col bg-gray-100">
            <header className="bg-blue-600 p-4 flex justify-end items-center text-white lg:pr-16">
                <div className="flex items-center space-x-4">
                    <div className="text-right">
                        <p className="font-bold">JASON LEE L. W.</p>
                        <p className="text-sm">Sales Lead</p>
                    </div>
                    <i className="bx bx-user text-3xl" style={{ fontSize: '32px' }}></i>
                </div>
            </header>

            <main className="flex-grow p-8 px-4 md:px-8 lg:px-16 bg-gray-50"> {/* Adjust padding for responsiveness */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="mb-4 relative flex justify-between items-center">
                        <h2 className="text-lg font-semibold">Transaction Data</h2>
                        <div className="flex items-center space-x-5">
                            <div className="relative">
                                <i className="codicon codicon-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="text"
                                    placeholder="Search Transaction"
                                    className="w-full px-4 py-2 pl-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    style={{ minWidth: '300px' }}
                                />
                            </div>
                            
                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                            >
                                <i className="codicon codicon-add mr-2"></i>
                                Add
                            </button>
                        </div>
                    </div>

                    {/* Make the table wrapper responsive */}
                    <div className="overflow-x-auto max-w-full">
                        <TransactionList transactions={transactions} /> {/* Pass the transactions as a prop */}
                    </div>
                </div>
            </main>

            {isModalOpen && (
                <AddTransaction onClose={() => setIsModalOpen(false)} />
            )}
        </div>
    );
};

export default Dashboard;
