// const MapEmbed = () => {
//   return (
//     <div className="w-full h-[400px] rounded-xl overflow-hidden border border-border">
//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1683.9772376643543!2d73.75975460360971!3d18.64596968640964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f1ca8dab03%3A0x6237cfbd36f9acf9!2sD.Y.%20Patil%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1757270300855!5m2!1sen!2sin"
//         width="100%"
//         height="100%"
//         style={{ border: 0 }}
//         allowFullScreen
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//         title="Office Location"
//       />
      
//     </div>
//   );
// };

// export default MapEmbed;

import { useState } from "react";
import mapPreview from "@/assets/contact/image.png"; // your local preview image

const MapEmbed = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden border border-border relative">
      {/* Show preview image until iframe loads */}
      {!isLoaded && (
        <img
          src={mapPreview}
          alt="Map Preview"
          className="w-full h-full object-cover absolute inset-0"
        />
      )}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1683.9772376643543!2d73.75975460360971!3d18.64596968640964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f1ca8dab03%3A0x6237cfbd36f9acf9!2sD.Y.%20Patil%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1757270300855!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Office Location"
        onLoad={() => setIsLoaded(true)} // ✅ replace image once iframe loads
      />
    </div>
  );
};

export default MapEmbed;
