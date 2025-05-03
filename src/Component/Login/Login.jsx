// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "./logo.png"; // Replace with actual logo image path
// import "./Login.css";

// const Auth = () => {
//   const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register
//   const [identifier, setIdentifier] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isTablet, setIsTablet] = useState(false);
//   const [bgIndex, setBgIndex] = useState(0);

//   // Background images array
//   const backgrounds = [
//     "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
//     "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1920&q=80",
//     "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?auto=format&fit=crop&w=1920&q=80",
//   ];

//   const navigate = useNavigate();

//   // Handle responsive design
//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       setIsMobile(width < 576);
//       setIsTablet(width >= 576 && width < 768);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Auto-change background every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [backgrounds.length]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError(
//       isLogin
//         ? "This is a frontend-only demo. No login functionality."
//         : "This is a frontend-only demo. No registration functionality."
//     );
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);
//   };

//   const toggleAuthMode = () => {
//     setIsLogin(!isLogin);
//     setError(null);
//     setIdentifier("");
//     setPassword("");
//     setName("");
//     setEmail("");
//     setPhone("");
//   };

//   return (
//     <div
//       className="auth-container"
//       style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}
//     >
//       <div className="auth-content">
//         <div className="logo-container">
//           <img
//             src={logo}
//             style={{ height: isMobile ? "40px" : isTablet ? "45px" : "50px" }}
//             alt="Online Sathi Logo"
//           />
//           <span
//             style={{
//               color: "#F80000",
//               fontSize: isMobile ? "22px" : isTablet ? "28px" : "33px",
//               fontWeight: "700",
//             }}
//           >
//             Online
//           </span>
//           <span
//             style={{
//               color: "#0BA811",
//               fontSize: isMobile ? "22px" : isTablet ? "28px" : "33px",
//               fontWeight: "700",
//             }}
//           >
//             Sathi
//           </span>
//         </div>

//         {error && (
//           <div className="error-message">
//             <span>{error}</span>
//           </div>
//         )}

//         <form onSubmit={handleSubmit}>
//           {isLogin ? (
//             <>
//               <div className="input-group">
//                 <input
//                   type="text"
//                   placeholder="Email address or Phone number"
//                   value={identifier}
//                   onChange={(e) => setIdentifier(e.target.value)}
//                   className="input-field"
//                   disabled={isLoading}
//                   required
//                 />
//               </div>
//               <div className="input-group">
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="input-field"
//                   disabled={isLoading}
//                   required
//                 />
//               </div>
//             </>
//           ) : (
//             <>
//               <div className="input-group">
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="input-field"
//                   disabled={isLoading}
//                   required
//                 />
//               </div>
//               <div className="input-group">
//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="input-field"
//                   disabled={isLoading}
//                   required
//                 />
//               </div>
//               <div className="input-group">
//                 <input
//                   type="tel"
//                   placeholder="Phone Number"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   className="input-field"
//                   disabled={isLoading}
//                   required
//                 />
//               </div>
//               <div className="input-group">
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="input-field"
//                   disabled={isLoading}
//                   required
//                 />
//               </div>
//             </>
//           )}

//           <div className="button-container">
//             <button
//               type="button"
//               className="toggle-button"
//               onClick={toggleAuthMode}
//               disabled={isLoading}
//             >
//               {isLogin ? "Register" : "Login"}
//             </button>
//             <button type="submit" className="submit-button" disabled={isLoading}>
//               {isLoading
//                 ? isLogin
//                   ? "Logging in..."
//                   : "Registering..."
//                 : isLogin
//                 ? "Login"
//                 : "Register"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Auth;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png"; // Replace with actual logo image path
import "./Login.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility

  // Background images array
  const backgrounds = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?auto=format&fit=crop&w=1920&q=80",
  ];

  const navigate = useNavigate();

  // Handle responsive design
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 576);
      setIsTablet(width >= 576 && width < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-change background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); // Clear any previous errors
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowPopup(true); // Show the success popup
      // Optionally clear form fields
      setIdentifier("");
      setPassword("");
      setName("");
      setEmail("");
      setPhone("");
    }, 2000);
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setError(null);
    setShowPopup(false); // Close popup if open
    setIdentifier("");
    setPassword("");
    setName("");
    setEmail("");
    setPhone("");
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div
      className="auth-container"
      style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}
    >
      <div className="auth-content">
        <div className="logo-container">
          <img
            src={logo}
            style={{ height: isMobile ? "40px" : isTablet ? "45px" : "50px" }}
            alt="Online Sathi Logo"
          />
          <span
            style={{
              color: "#F80000",
              fontSize: isMobile ? "22px" : isTablet ? "28px" : "33px",
              fontWeight: "700",
            }}
          >
            Online
          </span>
          <span
            style={{
              color: "#0BA811",
              fontSize: isMobile ? "22px" : isTablet ? "28px" : "33px",
              fontWeight: "700",
            }}
          >
            Sathi
          </span>
        </div>

        {error && (
          <div className="error-message">
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {isLogin ? (
            <>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Email address or Phone number"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="input-field"
                  disabled={isLoading}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field"
                  disabled={isLoading}
                  required
                />
              </div>
            </>
          ) : (
            <>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-field"
                  disabled={isLoading}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                  disabled={isLoading}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input-field"
                  disabled={isLoading}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field"
                  disabled={isLoading}
                  required
                />
              </div>
            </>
          )}

          <div className="button-container">
            <button
              type="button"
              className="toggle-button"
              onClick={toggleAuthMode}
              disabled={isLoading}
            >
              {isLogin ? "Register" : "Login"}
            </button>
            <button type="submit" className="submit-button" disabled={isLoading}>
              {isLoading
                ? isLogin
                  ? "Logging in..."
                  : "Registering..."
                : isLogin
                ? "Login"
                : "Register"}
            </button>
          </div>
        </form>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <h3>Success!</h3>
              <p>
                {isLogin
                  ? "You have successfully logged in."
                  : "You have successfully registered."}
              </p>
              <button className="popup-close-button" onClick={closePopup}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;