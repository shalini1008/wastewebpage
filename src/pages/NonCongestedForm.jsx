import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Component/Layout';
import QRCode from 'react-qr-code';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Multiselect } from 'multiselect-react-dropdown';
import pickup from '/pickup.png';

function NonCongestedForm() {
    const [imagePreview, setImagePreview] = useState(null);
    const [pickupDate, setPickupDate] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        phoneNumber: '',
        // confirmLocation: '', (user profile)
        //landmark: '',
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
        setQrData(`Form-Data-${Date.now()}`); // Generate unique QR code data
        setShowModal(true); // Show QR code modal
    };

    const closeModal = () => setShowModal(false);

    const [message, setMessage] = useState(""); 

    const handleClick = (text) => {
        alert(text);
        setMessage("Expected pickup time: 12:30 PM"); 
    };

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
            <div className="flex justify-center items-center h-screen bg-gray-900 mt-16 mb-32">
                <div className="flex flex-col justify-center items-center -mt-32">
                    {imagePreview ? (
                        <img
                            src={imagePreview}
                            alt="Product Preview"
                            className="rounded-lg shadow-lg max-w-full h-auto"
                        />
                    ) : (
                        <img
                            src={pickup}
                            alt="Waste Segregation"
                            className="rounded-sm shadow-lg max-w-full h-full ml-24 "
                        />
                    )}
            
                    <Link to = "/CongestedForm">
                    <button className='text-center mt-12 p-3 border-1 border-red-700
                     rounded-lg bg-red-700 font-semi-bold text-lg'>Congested Location? Opt for Garbage Drop Off!</button>
                     </Link>
                </div>

                <div className="flex-1 flex justify-center items-center ">
                    <form
                        onSubmit={handleFormSubmit}
                        className="bg-gray-800 px-10 py-10 rounded-xl w-full max-w-md"
                    >
                        <h1 className="text-center text-white text-xl mb-4 font-bold">
                            Fill Form for Garabage Pickup in Non - Congested Areas
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
                            className="bg-gray-600 mb-2 px-2 py-2 w-full rounded-lg text-white outline-none"
                        />
                        <label className='text-lg'>
                            Choose Location : 
                        </label>
                        <div className="flex flex-row space-x-3 mt-1">
                <button
                    type="button"
                    className="bg-blue-500 text-white font-light px-4 py-2 w-full rounded-lg mb-4"
                    onClick={() => handleClick("Pickup location added!")}
                >
                    Use Current Location
                </button>
                <button
                    type="button"
                    className="bg-blue-500 text-white font-light px-4 py-2 w-full rounded-lg mb-4"
                    onClick={() => handleClick("Your saved location added!")}
                >
                    Your Saved Location
                </button>
            </div>

            {message !== "" && (
                <div className="-mt-1 mb-1 text-gray-100 font-medium">
                    {message}
                </div>
            )}

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
export default NonCongestedForm;