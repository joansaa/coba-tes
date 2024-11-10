import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EditTransaction = ({ onClose, onEdit, initialData }) => {
    const navigate = useNavigate();
    
    const [transaction, setTransaction] = useState(null);
    const [item, setItem] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('');

    // Mengisi data form dengan `initialData` saat modal dibuka
    useEffect(() => {
        if (initialData) {
            setItem(initialData.title || '');
            setPrice(initialData.price || '');
            setDate(initialData.date || new Date().toISOString().split('T')[0]);
            setStatus(initialData.status || 'Completed');
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedTransaction = {
            id: initialData.id, // Gunakan ID yang sudah ada
            title: item,
            price: parseFloat(price),
            date: date,
            status: status,
        };
        onEdit(updatedTransaction);  // Kirim data update ke Dashboard
        onClose();  // Tutup modal setelah submit
    };

    return (
        <div className="modal-overlay">
            <div className="floating-card">
                <div className="relative flex items-center justify-center mb-4">
                    <h2 className="font-semibold text-lg">Edit Transaction</h2>
                    <button 
                        className="absolute right-0 text-gray-500 hover:text-gray-800"
                        onClick={onClose}
                        aria-label="Close"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="text-left mb-4">
                        <label className="font-semibold text-gray-800">Item</label>
                        <div className="relative mt-1">
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-full"
                                value={item}
                                onChange={(e) => setItem(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="text-left mb-4">
                        <label className="font-semibold text-gray-800">Price</label>
                        <div className="relative mt-1">
                            <input
                                type="number"
                                className="w-full px-4 py-2 border rounded-full"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="text-left mb-4">
                        <label className="font-semibold text-gray-800">Date</label>
                        <div className="relative mt-1">
                            <input
                                type="date"
                                className="w-full px-4 py-2 border rounded-full"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="text-left mb-4">
                        <label className="font-semibold text-gray-800">Status</label>
                        <div className="relative mt-1">
                            <select
                                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <option className='text-gray-400'value="">Select Status</option>
                                <option value="Pending">Pending</option>
                                <option value="Completed">Completed</option>
                            </select>
                            <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                                <svg className="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <button 
                            type="submit"
                            className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditTransaction;
