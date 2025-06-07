import React from 'react';
const generateCaptcha = () => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let captcha = '';
      for (let i = 0; i < 7; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return captcha;
    };

    const ContactUsForm = () => {
      const [captcha, setCaptcha] = React.useState(generateCaptcha());
      const [userCaptchaInput, setUserCaptchaInput] = React.useState('');
      const [isCaptchaValid, setIsCaptchaValid] = React.useState(false);

      // Handle CAPTCHA refresh
      const handleCaptchaRefresh = () => {
        setCaptcha(generateCaptcha());
        setUserCaptchaInput(''); // Clear user input on refresh
        setIsCaptchaValid(false); // Reset validation
      };

      // Handle user CAPTCHA input and validation
      const handleCaptchaInputChange = (e) => {
        const input = e.target.value.toUpperCase();
        setUserCaptchaInput(input);
        setIsCaptchaValid(input === captcha);
      };

      // Handle form submission (prevented due to sandbox restrictions)
      const handleSubmit = (e) => {
        e.preventDefault();
        if (isCaptchaValid) {
          alert('Form submitted successfully!');
        } else {
          alert('Please enter the correct CAPTCHA.');
        }
      };

      return (
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">For Queries, Feedback and Assistance</h2>
            <p className="text-center text-gray-600 mb-8">
              We are here to help you. Please get in touch with us.
            </p>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Form Section */}
              <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Drop us a Line</h3>
                <p className="text-gray-600 mb-6">Help us get in touch with you according to your preferences</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Enquiry Type*</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Select Your Enquiry Type</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Segment Selector*</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Youth</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Name*</label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email Address*</label>
                    <input
                      type="email"
                      placeholder="Enter Your Email Address"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Mobile Number*</label>
                    <input
                      type="text"
                      placeholder="Enter Your Mobile Number"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">City*</label>
                    <input
                      type="text"
                      placeholder="City Name"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 mb-2">Description*</label>
                  <textarea
                    placeholder="Type here"
                    className="w-full p-2 border rounded-md h-24"
                  ></textarea>
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 mb-2">Slot Time*</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>8AM - 6PM</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 mb-2">Captcha*</label>
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-200 p-2 rounded font-mono text-lg">{captcha}</div>
                    <button
                      onClick={handleCaptchaRefresh}
                      className="text-blue-600 hover:underline"
                    >
                      Refresh
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Type 7 characters as shown above"
                    value={userCaptchaInput}
                    onChange={handleCaptchaInputChange}
                    className="w-full p-2 border rounded-md mt-2"
                  />
                  {userCaptchaInput && (
                    <p className={`mt-2 text-sm ${isCaptchaValid ? 'text-green-600' : 'text-red-600'}`}>
                      {isCaptchaValid ? 'CAPTCHA is correct!' : 'CAPTCHA does not match.'}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={!isCaptchaValid}
                  className={`mt-6 px-6 py-2 rounded-full text-white ${
                    isCaptchaValid
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  Submit
                </button>
              </div>

              {/* Customer Support Section */}
              <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">MyJob Portal Customer Support</h3>
                <p className="text-gray-600 mb-6">
                  Our team is here to help you! You can get in touch with us via phone
                </p>
                <div className="mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-gray-600">1800 266 6282</p>
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-600">
                    Olympia A, Hiranandani Estate,
                    Ghodbunder Road, Patlipada,
                    Thane West - 400607, Maharashtra
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Live Chat</h4>
                      <a href="#" className="text-blue-600 hover:underline">Click here</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };

    const PartnerSection = () => (
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Partner with MyJob Portal</h2>
              <p className="text-gray-300 mb-6">
                Partner with MyJob Portal and be a part of cloud adoption revolution in India
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
                Become a partner
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="h-64 bg-gray-600 rounded-lg flex items-center justify-center">
               <img src='https://media.collegedekho.com/media/img/news/5_3VD1vQd.png?width=300&height=150&mode=crop' className='w-full h-full'></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

    const App = () => (
      <div>
        <ContactUsForm />
        <PartnerSection />
      </div>
    );
    export default App;