const isDevelopment = true;

const config = isDevelopment ? 
                    {
                        HOST:'localhost',
                        DATABASE:'portfolio',
                        USER:'root',
                        PASS: '',
                        PORT: 3000
                    } : 
                    {
                        HOST:'mutalldevs.co.ke',
                        DATABASE:'mutallde_portfolio',
                        USER:'mutallde',
                        PASS: 'mutalldatamanagers',
                        PORT: process.env.PORT
                    }

module.exports = config;