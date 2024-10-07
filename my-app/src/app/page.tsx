"use client"
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
        <div className="w-[1200px] h-[200px] border-2 border-green-500 bg-transparent flex items-center justify-around glow-container">
          {/* Transparent buttons with constant glow effect and solid border */}
          <Link href="/tokens">
            <button className="relative px-20 py-4 border-2 border-green-500 text-green-500 rounded-md bg-transparent shadow-lg shadow-[0_0_10px_#00ff00] transition-colors">
              Tokens
            </button>
          </Link>
          <button className="relative px-20 py-4 border-2 border-green-500 text-green-500 rounded-md bg-transparent shadow-lg shadow-[0_0_10px_#00ff00] transition-colors">
            NFT
          </button>
          <button className="relative px-20 py-4 border-2 border-green-500 text-green-500 rounded-md bg-transparent shadow-lg shadow-[0_0_10px_#00ff00] transition-colors">
            CustomBlinks
          </button>
          {/* Uncomment to add more buttons */}
          {/* <button className="relative px-20 py-4 border-2 border-green-500 text-green-500 rounded-md bg-transparent shadow-lg shadow-[0_0_10px_#00ff00] transition-colors">
            SolanaPlayground
          </button> */}
        </div>
      </div>

      <style jsx>{`
        .glow-container {
          animation: glow-animation 1.5s infinite alternate;
        }

        @keyframes glow-animation {
          0% {
            box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
          }
          100% {
            box-shadow: 0 0 20px rgba(0, 255, 0, 1);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
