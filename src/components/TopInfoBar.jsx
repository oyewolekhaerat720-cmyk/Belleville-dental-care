import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"

function TopInfoBar() {
  return (
    <div className="hidden border-b border-gray-200 bg-stone-50 md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="shrink-0 text-slate-700" />
          <p>13 Ogunmodede Street, Sango Ota</p>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="shrink-0 text-slate-700" />
            <p>+234 810 066 6964</p>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="shrink-0 text-slate-700" />
            <p>bellevilledental@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopInfoBar;