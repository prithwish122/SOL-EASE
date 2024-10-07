import Navbar from '../components/Navbar';

const Tokens: React.FC = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center overflow-x-hidden"
      style={{ backgroundImage: "url('/bgSolEase.png')" }}
    >
      <Navbar />

      <div className="flex items-center justify-center h-full">
        <div className="flex justify-between w-[1200px] pt-[10px]">
          {/* First Container */}
          <div className="flex flex-col w-[580px] h-[500px] border-2 border-dotted border-green-500 bg-[#131313] p-4 overflow-y-auto">
            <h2 className="text-green-500 mb-2">SETTINGS</h2>
            <div className="flex mb-4">
              <div className="flex-1 mr-2">
                <label className="text-white">Name</label>
                <input
                  type="text"
                  placeholder="My Token"
                  className="w-full mt-1 px-2 py-1 border-2 border-dotted border-green-500 bg-transparent text-green-500"
                />
              </div>
              <div className="flex-1 ml-2">
                <label className="text-white">Symbol</label>
                <input
                  type="text"
                  placeholder="MTK"
                  className="w-full mt-1 px-2 py-1 border-2 border-dotted border-green-500 bg-transparent text-green-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="text-white">Premint</label>
              <input
                type="number"
                placeholder="0"
                className="w-full mt-1 px-2 py-1 border-2 border-dotted border-green-500 bg-transparent text-green-500"
              />
            </div>

            {/* Features and Votes Section */}
            <div className="flex justify-between mt-6">
              {/* Features */}
              <div className="w-1/2 pr-2">
                <h2 className="text-green-500 mb-2">FEATURES</h2>
                {['Mintable', 'Pausable', 'Flash Minting', 'Burnable', 'Permit'].map((feature) => (
                  <div className="mb-4" key={feature}>
                    <label className="inline-flex items-center text-white">
                      <input type="checkbox" className="form-checkbox text-green-500" />
                      <span className="ml-2">{feature}</span>
                    </label>
                  </div>
                ))}
              </div>

              {/* Votes */}
              <div className="w-1/2 pl-2">
                <h2 className="text-green-500 mb-2">VOTES</h2>
                {['Block Number', 'Timestamp'].map((vote) => (
                  <div className="mb-4" key={vote}>
                    <label className="inline-flex items-center text-white">
                      <input type="checkbox" className="form-checkbox text-green-500" />
                      <span className="ml-2">{vote}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Container */}
          <div className="flex flex-col w-[580px] h-[500px] border-2 border-dotted border-green-500 bg-[#131313] p-4 overflow-y-auto">
            <h2 className="text-green-500 mb-2">ACCESS CONTROL</h2>
            <div className="flex mb-4">
              {['Ownable', 'Managed', 'Roles'].map((item) => (
                <div className="flex items-center mr-6" key={item}>
                  <label className="inline-flex items-center text-white">
                    <input type="checkbox" className="form-checkbox text-green-500" />
                    <span className="ml-2">{item}</span>
                  </label>
                </div>
              ))}
            </div>

            <h2 className="text-green-500 mb-2 mt-4">UPGRADEABILITY</h2>
            <div className="flex mb-4">
              {['Transparent', 'UUPS'].map((item) => (
                <div className="flex items-center mr-6" key={item}>
                  <label className="inline-flex items-center text-white">
                    <input type="checkbox" className="form-checkbox text-green-500" />
                    <span className="ml-2">{item}</span>
                  </label>
                </div>
              ))}
            </div>

            <h2 className="text-green-500 mb-2 mt-4">INFO</h2>
            <div className="flex mb-4">
              <div className="flex-1 mr-2">
                <label className="text-white">Security Contact</label>
                <input
                  type="email"
                  placeholder="security@example.com"
                  className="w-full mt-1 px-2 py-1 border-2 border-dotted border-green-500 bg-transparent text-green-500"
                />
              </div>
              <div className="flex-1 ml-2">
                <label className="text-white">License</label>
                <input
                  type="text"
                  placeholder="MIT"
                  className="w-full mt-1 px-2 py-1 border-2 border-dotted border-green-500 bg-transparent text-green-500"
                />
              </div>
            </div>

            {/* Adjusted Deploy Button */}
            <div className="flex justify-end mt-6">
              <button className="relative w-32 px-4 py-2 border-2 border-dotted border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white transition-colors">
                Deploy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with Blinking Buttons */}
      <footer className="absolute bottom-6 left-4">
        <div className="flex space-x-4">
          {['Token', 'NFT', 'Custom Blinks'].map((button, index) => (
            <button
              key={button}
              className={`px-16 py-3 border border-dotted border-green-500 bg-transparent rounded-lg text-green-500 animate-pulse hover:bg-green-500 hover:text-white transition-colors ${button === 'Token' ? 'bg-green-500 text-white' : ''}`}
            >
              {button}
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Tokens;
