import Layout from "../../Component/Layout";
import { Link } from 'react-router-dom';

//import UserProfile from './pages/user/userProfile';


// function UserProfile() {
//   return (
//     //<Layout>
//         <div>
          
//           <Image src = {nouser} alt = "nouser" width = {100} height = {100}/>
//         </div>
//     //</Layout>
//   )
// }

function UserProfile() {

  const userData = {
    name: "Veda",
    email: "veda@gmail.com",
    phone: "92139089XX",
    address: "10A, Surajmal Vihar",
    DOB: "14-09-2001",
    schedules: 27,
    sold: 10,
};

return (
  <Layout>
    <div className="flex">
  <div className="inline-block mt-10 max-w-l ml-28 py-6 px-16 bg-gray-800 text-center text-white shadow-md rounded-lg">
      <h2 className="text-4xl font-medium text-green-400">Your Profile</h2>
      <hr className="mt-4 mb-8 w-16 border-2 rounded-e border-green-400"/>
      <div className="mx-auto mb-6">
          <img
              src="./nouser.png"
              alt="User Profile"
              className="w-24 h-24 mx-12 rounded-full mb-4 sm:mb-0 sm:mr-6"
          />
          
      </div>
      <div className="flex flex-col space-y-4">
          <div className="ml-0">
              <h3 className="text-xl font-semibold text-gray-200">{userData.name}</h3>
              <p className="text-gray-400">{userData.email}</p>
          </div>
          <div className="ml-0">
              <h4 className="text-gray-300 font-medium">Phone Number</h4>
              <p className="text-gray-400">{userData.phone}</p>
          </div>
          <div className="ml-0">
              <h4 className="text-gray-300 font-medium">Address</h4>
              <p className="text-gray-400">{userData.address}</p>
          </div>
          <div className="ml-0">
              <h4 className="text-gray-300 font-medium">DOB</h4>
              <p className="text-gray-400">{userData.DOB}</p>
          </div>
      </div>
    </div>

    <div className="  bg-center bg-gray-800 inline-block max-w-l mt-10 ml-28 py-6 px-16 text-white shadow-md rounded-lg"
>
{/* style={{ backgroundImage: `url(${gogreen})`}}  */}
      <h2 className="text-4xl font-medium text-green-400">Profile Analytics</h2>
      <hr className="mt-4 mb-8 w-16 border-2 rounded-e border-green-400"/>
      
      <div className="flex flex-row space-x-8 text-center">
          <div className="flex flex-col ml-0 border-2 rounded-full px-8 p-10">
              <h3 className="text-7xl font-semibold  text-gray-200">{userData.schedules}</h3>
              <p className="text-gray-400">pickups initiated</p>
          </div>
          <div className="ml-0  border-2 rounded-full py-8 p-2">
              <h4 className="text-7xl font-semibold text-gray-200">{userData.sold}</h4>
              <p className="text-gray-400">go-green garbage sold</p>
          </div>
          
      </div>
      <p className="pt-8 font-medium"> <strong>-</strong> You're greener than <strong>60%</strong> of our users! </p> 
      <p className="py-4 font-medium"> <strong>-</strong> You're not just using our app - you're planting the seeds of change! </p>


      <Link to = "/profileHistory">
        <button className=' flex flex-center text-center mt-8 mx-auto p-3 border-1 border-green-700
                     rounded-lg bg-green-700 font-semi-bold text-lg'>
            View History 
        </button>
      </Link>
    </div>
    {/* <div className="inline-block ">
      <img
        src = {gogreen}
        alt = "gogreen"
        className = "w-52 h-52"
      />  
    </div>  */}
    </div>
  </Layout>
);
}

export default UserProfile;