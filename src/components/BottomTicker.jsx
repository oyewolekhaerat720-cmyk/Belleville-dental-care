import { useEffect, useMemo, useState } from "react"
import { FaClock, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa"

function BottomTicker() {
  const [now, setNow] = useState(new Date())
  const [locationText, setLocationText] = useState("Getting location...")

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setLocationText("Geolocation not supported")
      return
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude.toFixed(5)
        const lon = pos.coords.longitude.toFixed(5)
        setLocationText(`Lat ${lat}, Lon ${lon}`)
      },
      (err) => {
        if (err.code === 1) setLocationText("Location permission denied")
        else if (err.code === 2) setLocationText("Location unavailable")
        else setLocationText("Location request timed out")
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    )
  }, [])

  const dateText = useMemo(() => {
    return now.toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }, [now])

  const timeText = useMemo(() => {
    return now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  }, [now])

  const tickerItems = [
    {
      icon: <FaCalendarAlt />,
      label: `Current Date: ${dateText}`,
    },
    {
      icon: <FaClock />,
      label: `Current Time: ${timeText}`,
    },
    {
      icon: <FaMapMarkerAlt />,
      label: `Location: ${locationText}`,
    },
  ]

  const repeatedItems = [...tickerItems, ...tickerItems, ...tickerItems]

  return (
    <marquee className="fixed bottom-0 left-0 z-40 w-full overflow-hidden border-t border-white/10 bg-slate-950 text-white">
      <div className="ticker-track flex min-w-max animate-[ticker_25s_linear_infinite] gap-10 px-6 py-3">
        {repeatedItems.map((item, index) => (
          <div key={index} className="flex items-center gap-3 whitespace-nowrap text-sm">
            <span className="text-amber-300">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </marquee>
  )
}

export default BottomTicker;