import React, { useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const LiveChatWidget = () => {
  const tawkMessengerRef = useRef(null);

  return (
    <div>
      <TawkMessengerReact
        propertyId={import.meta.env.VITE_TAWKTO_PROPERTY_ID}
        widgetId={import.meta.env.VITE_TAWKTO_WIDGET_ID}
        ref={tawkMessengerRef}
      />
    </div>
  );
};

export default LiveChatWidget;
