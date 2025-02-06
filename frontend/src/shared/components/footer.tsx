export default function Footer() {
  return (
    <footer className="bg-gray-800 flex justify-center items-center w-full h-5 text-center text-white mt-6 shadow-lg fixed bottom-0">
      <p className="text-2 opacity-80">
        Informations météorologiques en temps réel - Données fournies par
        <a
          href="https://open-meteo.com/"
          target="_blank"
          className="text-blue-400 hover:underline text-2 pl-1"
        >
          Open-Meteo
        </a>
      </p>
    </footer>
  );
}
