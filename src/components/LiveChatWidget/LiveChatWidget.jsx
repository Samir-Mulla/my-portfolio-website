import { useEffect } from "react";

function LiveChatWidget() {
  useEffect(() => {
    const propertyId = import.meta.env.VITE_TAWKTO_PROPERTY_ID;

    if (!propertyId) {
      console.error(
        "Tawk.to property ID is not defined. Check your environment variables."
      );
      return;
    }

    var Tawk_API = Tawk_API || {};
    Tawk_API.onLoad = function () {
      Tawk_API.addEvent("chat", {
        type: "message",
        message: "👋 Hi! How can we help you today?",
      });
    };

    // Load Tawk.to script
    (function () {
      var s1 = document.createElement("script");
      s1.async = true;
      s1.src = `https://embed.tawk.to/${propertyId}`;
      s1.setAttribute("crossorigin", "*");
      var s0 = document.getElementsByTagName("script")[0];
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return null;
}

export default LiveChatWidget;
