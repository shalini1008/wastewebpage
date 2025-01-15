import Layout from "../Component/Layout";

function Product() {
  const mode = 'dark';
  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 md:py-16 mx-auto">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
            <h1
              className="sm:text-3xl text-2xl font-medium title-font mb-2  text-green-400"
              style={{ color: mode === 'dark' ? 'white' : '' }}
            >
              Explore Sustainable Solutions with BinBandhu
            </h1>
            <div className="h-1 w-20 bg-pink-600 rounded"></div>
          </div>

          <div className="flex flex-wrap -m-4">
            {/* Product Card 1 */}
            <div className="p-4 md:w-1/4 drop-shadow-lg">
              <div
                className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
                  color: mode === 'dark' ? 'white' : '',
                }}
              >
                <div className="flex justify-center cursor-pointer">
                  <img
                    className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out"
                    src="./plastic-bottles.jpg"
                    alt="Plastic Waste"
                  />
                </div>
                <div className="p-5 border-t-2">
                  <h2
                    className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                    style={{ color: mode === 'dark' ? 'white' : '' }}
                  >
                    Plastic Waste
                  </h2>
                  <h1
                    className="title-font text-lg font-medium text-gray-900 mb-3"
                    style={{ color: mode === 'dark' ? 'white' : '' }}
                  >
                    Recyclable Plastic Bottles
                  </h1>
                  <p
                    className="leading-relaxed mb-3"
                    style={{ color: mode === 'dark' ? 'white' : '' }}
                  >
                    ₹ 300 per kg
                  </p>
                  <div className="flex justify-center">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="p-4 md:w-1/4 drop-shadow-lg">
              <div
                className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
                  color: mode === 'dark' ? 'white' : '',
                }}
              >
                <div className="flex justify-center cursor-pointer">
                  <img
                    className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out"
                    src="./old-circuit.jpg"
                    alt="Electronic Waste"
                  />
                </div>
                <div className="p-5 border-t-2">
                  <h2
                    className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                    style={{ color: mode === 'dark' ? 'white' : '' }}
                  >
                    E-Waste
                  </h2>
                  <h1
                    className="title-font text-lg font-medium text-gray-900 mb-3"
                    style={{ color: mode === 'dark' ? 'white' : '' }}
                  >
                    Old Circuit Boards
                  </h1>
                  <p
                    className="leading-relaxed mb-3"
                    style={{ color: mode === 'dark' ? 'white' : '' }}
                  >
                    ₹ 700 per kg
                  </p>
                  <div className="flex justify-center">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="p-4 md:w-1/4 drop-shadow-lg">
              <div
                className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
                  color: mode === 'dark' ? 'white' : '',
                }}
              >
                <div className="flex justify-center cursor-pointer">
                  <img
                    className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out"
                    src="./Metal-sheets.jpg"
                    alt="Metal Scrap"
                  />
                </div>
                <div className="p-5 border-t-2">
                  <h2
                    className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                    style={{ color: mode === 'dark' ? 'white' : '' }}
                  >
                    Metal Scrap
                  </h2>
                  <h1
                    className="title-font text-lg font-medium text-gray-900 mb-3"
                    style={{ color: mode === 'dark' ? 'white' : '' }}
                  >
                    Reusable Metal Sheets
                  </h1>
                  <p
                    className="leading-relaxed mb-3"
                    style={{ color: mode === 'dark' ? 'white' : '' }}
                  >
                    ₹ 400 per kg
                  </p>
                  <div className="flex justify-center">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="p-4 md:w-1/4 drop-shadow-lg">
              <div
                className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
                  color: mode === 'dark' ? 'white' : '',
                }}
              >
                <div className="flex justify-center cursor-pointer">
                  <img
                    className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out"
                    src="./paper.jpeg"
                    alt="Paper Waste"
                  />
                </div>
                <div className="p-5 border-t-2">
                  <h2
                    className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                    style={{ color: mode === 'dark' ? 'white' : '' }}
                  >
                    Paper Waste
                  </h2>
                  <h1
                    className="title-font text-lg font-medium text-gray-900 mb-3"
                    style={{ color: mode === 'dark' ? 'white' : '' }}
                  >
                    Old Newspapers and Magazines
                  </h1>
                  <p
                    className="leading-relaxed mb-3"
                    style={{ color: mode === 'dark' ? 'white' : '' }}
                  >
                    ₹ 50 per kg
                  </p>
                  <div className="flex justify-center">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Product;
