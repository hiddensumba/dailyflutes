// Fungsi untuk memeriksa apakah pengguna sudah memberikan izin cookie
function checkCookieConsent() {
    if (localStorage.getItem('cookieConsent') === 'true') {
        document.getElementById('cookie-consent-banner').style.display = 'none';
    } else {
        document.getElementById('cookie-consent-banner').style.display = 'block';
    }
}

// Fungsi untuk menerima cookie
function acceptCookies() {
    localStorage.setItem('cookieConsent', 'true');
    document.getElementById('cookie-consent-banner').style.display = 'none';
}

// Fungsi untuk menolak cookie
function declineCookies() {
    localStorage.setItem('cookieConsent', 'false');
    document.getElementById('cookie-consent-banner').style.display = 'none';
}

// Fungsi untuk membuka pengaturan cookies
function manageCookies() {
    document.getElementById('cookie-settings').style.display = 'block';
    document.getElementById('cookie-consent-banner').style.display = 'none';
}

// Fungsi untuk menyimpan preferensi pengguna
function savePreferences() {
    const essential = document.getElementById('cookie-essential').checked;
    const analytics = document.getElementById('cookie-analytics').checked;
    const marketing = document.getElementById('cookie-marketing').checked;

    // Menyimpan preferensi cookies ke localStorage
    localStorage.setItem('cookieEssential', essential);
    localStorage.setItem('cookieAnalytics', analytics);
    localStorage.setItem('cookieMarketing', marketing);

    document.getElementById('cookie-settings').style.display = 'none';
    document.getElementById('cookie-consent-banner').style.display = 'none';
}

// Fungsi untuk menutup pengaturan cookies
function closeSettings() {
    document.getElementById('cookie-settings').style.display = 'none';
    document.getElementById('cookie-consent-banner').style.display = 'block';
}

// Event listeners untuk tombol accept, decline, dan manage cookies
document.getElementById('accept-cookies').addEventListener('click', acceptCookies);
document.getElementById('decline-cookies').addEventListener('click', declineCookies);
document.getElementById('manage-cookies').addEventListener('click', manageCookies);
document.getElementById('save-preferences').addEventListener('click', savePreferences);
document.getElementById('close-settings').addEventListener('click', closeSettings);

// Memeriksa status izin cookie saat halaman dimuat
window.onload = function() {
    checkCookieConsent();

    // Mengatur checkbox berdasarkan preferensi yang disimpan
    if (localStorage.getItem('cookieEssential') === 'true') {
        document.getElementById('cookie-essential').checked = true;
    }
    if (localStorage.getItem('cookieAnalytics') === 'true') {
        document.getElementById('cookie-analytics').checked = true;
    }
    if (localStorage.getItem('cookieMarketing') === 'true') {
        document.getElementById('cookie-marketing').checked = true;
    }
};
