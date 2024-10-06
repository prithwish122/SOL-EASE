import Image from 'next/image';

export default function Home() {
  return (
    <div
      className="w-screen h-[100vh] bg-cover bg-center overflow-x-hidden"
      style={{ backgroundImage: "url('/bgSolEase.png')" }}
    >
      <header className="flex justify-between items-center p-4  text-white">
        <div className="flex items-center">
          <Image src="/SolEase..png" alt="Logo" width={100} height={100} />
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li className="cursor-pointer text-lg">Account</li>
            <li className="cursor-pointer text-lg">Login</li>
            <li className="cursor-pointer px-4 py-2 rounded">
              <Image src="/metamask.png" alt='g' width={50} height={50}/>
            </li>
          </ul>
        </nav>
      </header>

    </div>
  );
}
