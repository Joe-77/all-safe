import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp() {
  return (
    <div className="fixed bottom-3 left-5 z-[99] text-green-600  text-5xl animate-pulse p-3 rounded-full">
      <Link
        href={
          "https://api.whatsapp.com/send/?phone=%2B201091886122&text&type=phone_number&app_absent=0"
        }
      >
        <FaWhatsapp />
      </Link>
    </div>
  );
}
