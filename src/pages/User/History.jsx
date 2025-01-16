import Layout from "../../Component/Layout";
function History() {
    const transactions = [
        { id: 135010, date: '12:28 pm, Thu, 28 Dec', details: 'Scheduled garbage pickup at Zone A', img : '/qrr.png' },
        { id: 192761, date: '7:02 pm, Mon, 18 Dec', details: 'Scheduled garbage pickup at Zone B', img: '/qrr.png' },
        { id: 172826, date: '11:30 am, Sun, 9 Dec', details: 'Cancelled pickup at Zone A', img: '/qrr.png' },
    ];

    return (
        <Layout>
        <div className="relative max-w-4xl mx-auto p-6 bg-gray-900 text-white shadow-md rounded-lg">
        <h2 className="text-4xl font-medium text-green-400">Transaction History</h2>
      <hr className="mt-4 mb-8 w-16 border-2 rounded-e border-green-400"/>
                  <ul className="space-y-8">
                {transactions.map((transaction) => (
                    <li key={transaction.id} className="p-6 bg-gray-800 rounded-md">
                        <div flex flex-col> <div className="inline-block">
                       <span className="font-bold text-gray-500 "> REQUEST NUMBER: </span> {transaction.id} 
                       <p className="py-4"> <span className="font-medium text-2xl ">{transaction.details} </span></p>

                       <p> <span className="font-light text-gray-500"> Completed On </span> {transaction.date} </p>
                       <button className="border-2 mt-4 px-4 rounded text-lg"> Rate your experience </button>        
                       </div>
                       <div className="inline-block absolute right-16">
                       <img
              src={transaction.img}
              alt="User Profile"
              className="w-36 h-36 "
          />
          </div>
                       </div>            
                    </li>
                ))}
            </ul>
        </div>
        </Layout>
    );
}

export default History