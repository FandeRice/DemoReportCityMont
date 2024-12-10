import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Locaticus. Todos los derechos reservados.</p>
        <div className="mt-2">
          <Link href="/privacy-policy">
            <span className="text-gray-400 hover:text-white">Política de privacidad</span>
          </Link>
          {' | '}
          <Link href="/terms">
            <span className="text-gray-400 hover:text-white">Términos y condiciones</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
