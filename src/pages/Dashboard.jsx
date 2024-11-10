import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AddTransaction from './Add';
import EditTransaction from './Edit';
import Detail from './Detail';
import TransactionList from './Transaction';
import GoFinanceLogo from '../assets/GoFinance.png';

const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [transactionToEdit, setTransactionToEdit] = useState(null);
    const [transactionToView, setTransactionToView] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    const addTransaction = (newTransaction) => {
        setTransactions((prevTransactions) => [newTransaction, ...prevTransactions]);
    };

    // Function to handle edit operation
    const editTransaction = (updatedTransaction) => {
        setTransactions((prevTransactions) =>
            prevTransactions.map((transaction) =>
                transaction.id === updatedTransaction.id ? updatedTransaction : transaction
            )
        );
        setIsEditModalOpen(false); // Close the edit modal after updating
    };

    // Function to open the edit modal and set transaction to be edited
    const handleEditTransaction = (transactionId) => {
        const transaction = transactions.find((t) => t.id === transactionId);
        setTransactionToEdit(transaction);
        setIsEditModalOpen(true);
    };

    // Function to open the detail modal and set transaction to view
    const handleViewTransaction = (transactionId) => {
        const transaction = transactions.find((t) => t.id === transactionId);
        setTransactionToView(transaction);
        setIsDetailModalOpen(true);
    };

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setTransactions(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTransactions();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent"
                    role="status"
                />
            </div>
        );
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="h-screen flex flex-col bg-gray-100">
            {/* Pass the handleEditTransaction as a prop to TransactionList */}
            <TransactionList 
                transactions={transactions} 
                onEdit={handleEditTransaction}
                onView={handleViewTransaction}
            />

            <header className="bg-blue-600 p-4 flex justify-between items-center text-white lg:pr-16">
                <div className="flex items-center space-x-4">
                    <Link to="/" className="ml-12">
                        <img src={GoFinanceLogo} alt="GoFinance Logo" className="h-12 w-auto" />
                    </Link>
                </div>
                
                <div className="flex items-center space-x-4 relative" ref={dropdownRef}>
                    <div className="text-right">
                        <p className="font-bold">JASON LEE L. W.</p>
                        <p className="text-sm">Sales Lead</p>
                    </div>
                    <button onClick={toggleDropdown} className="text-3xl">
                        <i className="bx bx-user" style={{ fontSize: 32 }}></i>
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-32 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                            <button
                                className="w-full text-left px-4 py-2 text-black hover:bg-gray-100"
                                onClick={() => {
                                    setIsDropdownOpen(false);
                                    navigate('/profile');
                                }}
                            >
                                Profile
                            </button>
                            <button
                                className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 flex items-center"
                                onClick={() => {
                                    setIsDropdownOpen(false);
                                    navigate('/logout');
                                }}
                            >
                                <i className="bx bx-log-out mr-2"></i> Logout
                            </button>
                        </div>
                    )}
                </div>
            </header>

            <main className="flex-grow p-8 px-4 md:px-8 lg:px-16 bg-gray-50">
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

                    <div className="overflow-x-auto max-w-full">
                        <TransactionList 
                            transactions={transactions} 
                            onEdit={handleEditTransaction}
                            onView={handleViewTransaction}
                        />
                    </div>
                </div>
            </main>

            {isModalOpen && (
                <AddTransaction onClose={() => setIsModalOpen(false)} onAdd={addTransaction} />
            )}

            {isEditModalOpen && (
                <EditTransaction 
                    onClose={() => setIsEditModalOpen(false)} 
                    onEdit={editTransaction} 
                    initialData={transactionToEdit} 
                />
            )}

            {isDetailModalOpen && transactionToView && (
                <Detail 
                    transactions={transactions} 
                    onClose={() => setIsDetailModalOpen(false)}
                    transaction={transactionToView}
                />
            )}
        </div>
    );
};

export default Dashboard;
