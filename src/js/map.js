"use strict";

window.onload = async () => {
    const map = L.map('mapid').setView([59.3293, 18.0686], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const marker = L.marker([0, 0]).addTo(map);

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keypress', async function (e) {
        if (e.key === 'Enter') {
            const searchQuery = searchInput.value;
            const url = `https://nominatim.openstreetmap.org/search?format=json&q=${searchQuery}`;
            try {
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    if (data.length > 0) {
                        const { lat, lon } = data[0];
                        map.setView([lat, lon], 13);
                        marker.setLatLng([lat, lon]);
                    } else {
                        console.error("Platsen hittades inte.");
                    }
                } else {
                    console.error("Något gick fel med API-anropet:", response.statusText);
                }
            } catch (error) {
                console.error("Ett fel uppstod:", error);
            }
        }
    });
}
