import { motion } from "framer-motion";
import "./Ticker.css"
const Ticker = () => {
 const events = [
    "🎉 Pongal Celebration",
    "🧒 Kids Expo",
    "🏃 Sports Meet",
    "🎨 Colour Day",
    "🪔 Krishna Janmashtami",
    "🎄 Christmas Day",
    "🚴 Cycle Rally",
    "🔬 Science Expo",
    "🤖 Robotics",
    "🏹 Archery",
    "🧘 Yoga",
    "🥋 Karate",
    "🎯 Shooting",
    "🏃 Cross Country Race",
    "⛸️ Skating",
    "📚 Telugu Day"
  ];

  const scrollText = [...events, ...events].join("  •  ");

    return (
        <div className="ticker">
            <motion.div
                className="ticker-track"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
                <span >{scrollText}</span>
                {/* <span>{text}</span> */}
            </motion.div>
        </div>
    );
};

export default Ticker;