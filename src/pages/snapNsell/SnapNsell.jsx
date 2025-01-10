
import React, { useState } from 'react';
import Layout from '../../Component/Layout';

function SnapNsell() {
    const [imagePreview, setImagePreview] = useState(null);
    const [pickupLocation, setPickupLocation] = useState('');
    const [pickupDate, setPickupDate] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setImagePreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleLocationChange = (e) => {
        setPickupLocation(e.target.value);
    };

    const handleDateChange = (e) => {
        setPickupDate(e.target.value);
    };

    return (
        <Layout>
         <div className="flex justify-center items-center h-screen bg-gray-900">
            {/* Left Section: Image or Preview */}
            <div className="flex-1 flex justify-center items-center">
                {imagePreview ? (
                    <img
                        src={imagePreview}
                        alt="Product Preview"
                        className="rounded-lg shadow-lg max-w-full h-auto"
                    />
                ) : (
                    <img
                        src="https://via.placeholder.com/500x400?text=Waste+Segregation"
                        alt="Waste Segregation"
                        className="rounded-lg shadow-lg max-w-full h-auto"
                    />
                )}
            </div>

            {/* Right Section: Form */}
            <div className="flex-1 flex justify-center items-center">
                <div className="bg-gray-800 px-10 py-10 rounded-xl w-full max-w-md">
                    <h1 className="text-center text-white text-xl mb-4 font-bold">Sell Waste</h1>
                    <div>
                        <input
                            type="text"
                            name="title"
                            className="bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none"
                            placeholder="Waste title"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="price"
                            className="bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none"
                            placeholder="Expected price"
                        />
                    </div>
                    <div>
                        <input
                            type="file"
                            name="imageurl"
                            className="bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none"
                            onChange={handleImageChange}
                        />
                    </div>
                    <div>
                        <button
                            className="bg-blue-500 text-white font-bold px-4 py-2 w-full rounded-lg mb-4"
                            onClick={() => alert("Pickup location added!")}
                        >
                            Add Pickup Location
                        </button>
                        <input
                            type="text"
                            value={pickupLocation}
                            onChange={handleLocationChange}
                            placeholder="Enter pickup location"
                            className="bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none"
                        />
                    </div>
                    <div>
                        <input
                            type="date"
                            name="pickupDate"
                            className="bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none"
                            value={pickupDate}
                            onChange={handleDateChange}
                        />
                    </div>
                    <div className="flex justify-center mb-3">
                        <button className="bg-green-500 w-full text-white font-bold px-2 py-2 rounded-lg">
                            Sell Waste
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </Layout>
       
    );
}

export default SnapNsell;
