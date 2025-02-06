export default function Footer() {
  return (
    <footer className="bg-gray-800 flex justify-center items-center p-3 text-center text-white mt-6 rounded-lg shadow-lg fixed bottom-0 w-full h-0.1">
      <p className="text-2 opacity-80">
        Informations météorologiques en temps réel - Données fournies par
        <a
          href="https://open-meteo.com/"
          target="_blank"
          className="text-blue-400 hover:underline text-2 p-1"
        >
          Open-Meteo
        </a>
      </p>
    </footer>
  );
}
