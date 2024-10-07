// pages/index.tsx
import Link from 'next/link';
import Navbar from './components/Navbar';

const Home: React.FC = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center overflow-x-hidden"
      style={{ backgroundImage: "url('/bgSolEase.png')" }}
    >
      <Navbar />

      <div className="flex items-center justify-center h-full">
        <div className="w-[1200px] h-[200px] border-2 border-dotted border-green-500 bg-transparent flex items-center justify-around">
          {/* Transparent buttons with dotted green border and animation */}
          <Link href="/tokens">
            <button className="px-20 py-4 border-2 border-dotted border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white transition-colors border-animation">
              Tokens
            </button>
          </Link>
          <button className="px-20 py-4 border-2 border-dotted border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white transition-colors border-animation">
            NFT
          </button>
          <button className="px-20 py-4 border-2 border-dotted border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white transition-colors border-animation">
            CustomBlinks
          </button>
          {/* Uncomment to add more buttons */}
          {/* <button className="px-20 py-4 border-2 border-dotted border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white transition-colors border-animation">
            SolanaPlayground
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
