import React, { useState } from 'react';
import Layout from '../Component/Layout';
import QRCode from 'react-qr-code';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import formImage from '/form1.jpg';
import { Multiselect } from 'multiselect-react-dropdown'; // Import the Multiselect component
function CongestedForm() {
    const [imagePreview, setImagePreview] = useState(null);
    const [pickupDate, setPickupDate] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        phoneNumber: '',
        dropLocation: '',
        landmark: '',
        timeSlot: '',
        segregated: '',
        wasteType: [],
        confirmation: false,
    });
    const [showModal, setShowModal] = useState(false);
    const [qrData, setQrData] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setImagePreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setQrData(`Form-Data-${Date.now()}`);
        setShowModal(true);
    };

    const closeModal = () => setShowModal(false);

    // Define waste type options for Multiselect dropdown
    const wasteTypeOptions = [
        { name: 'Organic waste', id: 'organicWaste' },
        { name: 'E-waste', id: 'ewaste' },
        { name: 'Dry recyclable waste', id: 'dryRecyclableWaste' },
        { name: 'Domestic hazardous waste', id: 'domesticHazardousWaste' },
        { name: 'Sanitary and medical', id: 'sanitaryMedical' },
        { name: 'Non recyclable', id: 'nonRecyclable' },
        { name: 'Domestic waste', id: 'domesticWaste' },
        { name: 'Electronic', id: 'electronic' },
        { name: 'Plastic', id: 'plastic' },
    ];

    return (
        <Layout>
            <div className="flex justify-center items-center h-screen bg-gray-900 m-7">
                <div className="flex-1 flex justify-center items-center">
                    {imagePreview ? (
                        <img
                            src={imagePreview}
                            alt="Product Preview"
                            className="rounded-lg shadow-lg max-w-full h-auto"
                        />
                    ) : (
                        <img
                            src={formImage}
                            alt="Waste Segregation"
                            className="rounded-sm shadow-lg max-w-full h-full w-full ml-24 "
                        />
                    )}
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <form
                        onSubmit={handleFormSubmit}
                        className="bg-gray-800 px-10 py-10 rounded-xl w-full max-w-md"
                    >
                        <h1 className="text-center text-white text-xl mb-4 font-bold">
                            Congested Areas Form
                        </h1>

                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white outline-none"
                        />

                        <input
                            type="text"
                            name="middleName"
                            placeholder="Middle Name (Optional)"
                            value={formData.middleName}
                            onChange={handleInputChange}
                            className="bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white outline-none"
                        />

                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white outline-none"
                        />

                        <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className="bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white outline-none"
                        />

                        <input
                            type="text"
                            name="dropLocation"
                            placeholder="Drop-off Location"
                            value={formData.dropLocation}
                            onChange={handleInputChange}
                            className="bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white outline-none"
                        />

                        <input
                            type="text"
                            name="landmark"
                            placeholder="Nearest Landmark (Optional)"
                            value={formData.landmark}
                            onChange={handleInputChange}
                            className="bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white outline-none"
                        />

                        <select
                            name="timeSlot"
                            value={formData.timeSlot}
                            onChange={handleInputChange}
                            className="bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white outline-none"
                        >
                            <option value="">Select a time slot</option>
                            <option value="8AM-10AM">8AM - 10AM</option>
                            <option value="10AM-12PM">10AM - 12PM</option>
                            <option value="12PM-2PM">12PM - 2PM</option>
                        </select>

                        {/* Segregated Waste Selection (Yes/No) */}
                        <select
                            name="segregated"
                            value={formData.segregated}
                            onChange={handleInputChange}
                            className="bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white outline-none"
                        >
                            <option value="">Is your waste segregated?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                        {/* Show Waste Type Selection Only If Waste is Segregated (Multi-Select Dropdown) */}
                        {formData.segregated === 'yes' && (
                            <div className="bg-gray-600 mb-4">
                                <label className="text-white">Select Waste Types</label>
                                <Multiselect
                                    options={wasteTypeOptions} // Data for the dropdown
                                    selectedValues={formData.wasteType} // Currently selected value(s)
                                    onSelect={(selectedList) => setFormData({ ...formData, wasteType: selectedList })}
                                    onRemove={(selectedList) => setFormData({ ...formData, wasteType: selectedList })}
                                    displayValue="name" // Display name of waste types
                                    closeIcon="close" // Add close icon to remove selected values
                                    className="w-full"
                                    style={{
                                        multiselectContainer: {
                                            color: 'black', // Make dropdown text black
                                        },
                                        searchBox: {
                                            color: 'black', // Search box text color
                                        },
                                        optionContainer: {
                                            color: 'black', // Option text color
                                        },
                                        option: {
                                            color: 'black', // Individual option text color
                                        },
                                    }}
                                />
                            </div>
                        )}

                        <DatePicker
                            selected={pickupDate}
                            onChange={(date) => setPickupDate(date)}
                            dateFormat="MM-dd-yyyy"
                            placeholderText="📅 MM-DD-YYYY"
                            className="bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white outline-none"
                        />

                        <label className="flex items-center text-white mb-4">
                            <input
                                type="checkbox"
                                name="confirmation"
                                checked={formData.confirmation}
                                onChange={handleInputChange}
                                className="mr-2"
                            />
                            I confirm the above information is accurate.
                        </label>

                        <button
                            type="submit"
                            className="bg-green-500 w-full text-white font-bold px-2 py-2 rounded-lg"
                        >
                            Submit Form
                        </button>
                    </form>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-md">
                        {/* Dummy Download Icon (Unicode Character) */}
                        <div className="absolute top-2 left-2 text-2xl text-gray-500 cursor-pointer">
                            <span role="img" aria-label="download">
                                📥 {/* Unicode Download Icon */}
                            </span>
                        </div>
                        <span
                            className="absolute top-2 right-2 text-gray-600 cursor-pointer text-xl"
                            onClick={closeModal}
                        >
                            ×
                        </span>
                        <br />
                        <h2 className="text-center font-bold text-gray-800 mb-4">
                            Here's your QR code for reward collection:
                        </h2>
                        <QRCode value={qrData} size={256} className="mx-auto" />
                    </div>
                </div>
            )}
        </Layout>
    );
}

export default CongestedForm;
