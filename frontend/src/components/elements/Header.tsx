import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">Locaticus</Link>
        </div>
        <nav>
          <Link href="/login">
            <button className="text-white border border-transparent bg-transparent hover:bg-white hover:text-gray-800 px-4 py-2 rounded-md">
              Iniciar Sesión
            </button>
          </Link>
          <Link href="/register">
            <button className="bg-[#06d6a0] hover:bg-[#05b689] text-white px-4 py-2 rounded-md ml-4">
              Registrarse
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
