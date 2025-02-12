export default function Footer() {
  return (
    <footer className="text-center h-[5vh] bottom-0 w-[98%] fixed flex justify-center items-center w-full  text-center left-1/2 -translate-x-1/2">
      <p className="text-[1.5vh] opacity-80">
        Informations météorologiques en temps réel - Données fournies par
        <a
          href="https://www.weatherapi.com/"
          target="_blank"
          className="text-#00BFFF hover:underline text-[1.5vh] pl-1"
        >
          Weather Api
        </a>
      </p>
    </footer>
  );
}
