const config = {
    // API_ENDPOINT: `http://localhost:8000`, 
    API_ENDPOINT: process.env.REACT_APP_API_BASE_URL || `http://localhost:8000`, 
    TOKEN_KEY: 'artsy-client-auth-token',
    // API_KEY: process.env.REACT_APP_API_KEY || '',

}

export default config
