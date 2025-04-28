// Function to check if user has already consented to cookies
function checkCookieConsent() {
    if (localStorage.getItem('cookieConsent') === 'true') {
        document.getElementById('cookie-consent-banner').style.display = 'none';
    } else {
        document.getElementById('cookie-consent-banner').style.display = 'block';
    }
}

// Function to accept cookies
function acceptCookies() {
    localStorage.setItem('cookieConsent', 'true');
    document.getElementById('cookie-consent-banner').style.display = 'none';
}

// Function to decline cookies
function declineCookies() {
    localStorage.setItem('cookieConsent', 'false');
    document.getElementById('cookie-consent-banner').style.display = 'none';
}

// Event listeners for accept/decline buttons
document.getElementById('accept-cookies').addEventListener('click', acceptCookies);
document.getElementById('decline-cookies').addEventListener('click', declineCookies);

// Check cookie consent when the page loads
window.onload = function() {
    checkCookieConsent();
};
