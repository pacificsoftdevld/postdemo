const PRODUCTION_SERVER_API = ''
const DEVELOPMENT_SERVER_API = ''
/*
    ENVIROMENT: env
    ---------------------
    0: development
    1: production 
    ---------------------
*/
const env = 0
// =======================

export const getBaseUrl = () => {
    if(env) return PRODUCTION_SERVER_API
    return DEVELOPMENT_SERVER_API
}
