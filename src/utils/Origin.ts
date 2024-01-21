export function isDevelopment() {
    return process.env.NODE_ENV === 'development';
}

export function getOrigin() {
    if(isDevelopment()){
        return "http://localhost:3000"
    } else {
        return "https://wakaztahir.com"
    }
}