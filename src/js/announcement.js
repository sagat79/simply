// SPDX-FileCopyrightText: 2025-2026 Pavel Dimov <hello@dimov.xyz>
//
// SPDX-License-Identifier: GPL-3.0-or-later

// Announcement Bar Functionality
const announcementBar = document.querySelector('.announcement-bar')
const closeButton = document.querySelector('.announcement-close')

if (closeButton && announcementBar) {
    closeButton.addEventListener('click', () => {
        announcementBar.classList.add('is-hidden')
        // Save state to localStorage
        localStorage.setItem('announcement-hidden', 'true')
    })

    // Check if announcement was previously hidden
    if (localStorage.getItem('announcement-hidden') === 'true') {
        announcementBar.classList.add('is-hidden')
    }
} 