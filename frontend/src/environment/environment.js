const ENV = {
          development: {
            API_URL: "http://localhost:3808",
          },
          production: {
            API_URL: "https://placement-cell-mern-backend.onrender.com",
          },
        };
        const currentEnv = process.env.NODE_ENV || "production";
        
        export const config = ENV[currentEnv];
        