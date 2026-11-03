/**
 * Pingkian's / Cir Pink's Game Review Hub - Main Interactive Engine
 * Fast, lightweight, dependency-free vanilla JavaScript
 */

(function () {
    'use strict';

    // Page mapping for legacy compatibility
    const pageURLs = {
        'Home': 'index.html',
        'Socials': 'Socials.html',
        'About': 'About.html'
    };

    // Game description mapping for legacy compatibility
    const gameDescriptionPages = {
        'The Legend of Zelda: Tears of the Kingdom': 'zelda.html',
        'Cyberpunk 2077': 'cyberpunk.html',
        "Baldur's Gate 3": 'baldurs.html',
        'Mobile Legends: Bang Bang': 'ML.html',
        'Honkai: Star Rail': 'HSR.html',
        'Wuthering Waves': 'wuwa.html',
        'Minecraft': 'mc.html',
        'Reverse: 1999': 'r1999.html'
    };

    // Global navigation functions (preserves existing HTML onclick handlers)
    window.goToGameDescription = function (gameName) {
        if (gameDescriptionPages[gameName]) {
            window.location.href = gameDescriptionPages[gameName];
        } else {
            alert('Description not available for: ' + gameName);
        }
    };

    window.navigatePage = function (page) {
        if (page === 'Socials' && window.location.pathname.endsWith('Socials.html')) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        if (page === '#socials-section') {
            const el = document.getElementById('socials-section');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                return;
            }
        }
        if (pageURLs[page]) {
            window.location.href = pageURLs[page];
        } else {
            window.location.href = 'index.html';
        }
    };

    window.scrollToTop = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // DOM Ready initialization
    document.addEventListener('DOMContentLoaded', function () {
        initBackToTop();
        initSearchAndFilter();
        initDetailComments();
    });

    /**
     * Back to top button visibility and click handler
     */
    function initBackToTop() {
        const topBtn = document.querySelector('.homes');
        if (!topBtn) return;

        topBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollToTop();
        });

        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                topBtn.style.opacity = '1';
                topBtn.style.pointerEvents = 'auto';
            } else {
                topBtn.style.opacity = '0.6';
            }
        });
    }

    /**
     * Homepage Search & Filter System
     */
    function initSearchAndFilter() {
        const searchInput = document.getElementById('gameSearch');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const cards = document.querySelectorAll('.game-review');
        const countDisplay = document.getElementById('resultsCount');
        const noResults = document.getElementById('noResultsMsg');

        if (!cards.length) return;

        let activeFilter = 'all';
        let searchQuery = '';

        function updateDisplay() {
            let visibleCount = 0;

            cards.forEach(card => {
                const title = (card.querySelector('h2') ? card.querySelector('h2').textContent : '').toLowerCase();
                const desc = (card.querySelector('.td') ? card.querySelector('.td').textContent : card.textContent).toLowerCase();
                const genre = (card.getAttribute('data-genre') || '').toLowerCase();
                const platform = (card.getAttribute('data-platform') || '').toLowerCase();

                const matchesSearch = !searchQuery || title.includes(searchQuery) || desc.includes(searchQuery) || genre.includes(searchQuery);
                const matchesFilter = activeFilter === 'all' || genre.includes(activeFilter) || platform.includes(activeFilter);

                if (matchesSearch && matchesFilter) {
                    card.style.display = '';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            if (countDisplay) {
                countDisplay.textContent = `Showing ${visibleCount} of ${cards.length} games`;
            }

            if (noResults) {
                noResults.style.display = visibleCount === 0 ? 'block' : 'none';
            }
        }

        if (searchInput) {
            searchInput.addEventListener('input', function (e) {
                searchQuery = e.target.value.trim().toLowerCase();
                updateDisplay();
            });
        }

        filterBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                activeFilter = (this.getAttribute('data-filter') || 'all').toLowerCase();
                updateDisplay();
            });
        });

        // Initial count update
        updateDisplay();
    }

    /**
     * Interactive Game Review Comments with LocalStorage
     */
    function initDetailComments() {
        const commentList = document.querySelector('.review-comments');
        const commentInput = document.getElementById('usercomment') || document.querySelector('.usercomment');
        const starSelect = document.getElementById('star') || document.querySelector('.star');
        const submitBtn = document.querySelector('.submit') || document.querySelector('.submit-btn');

        if (!commentList || !submitBtn) return;

        // Derive game key from current pathname
        const currentFile = window.location.pathname.split('/').pop().toLowerCase().replace('.html', '') || 'default';
        const storageKey = 'cirpink_reviews_' + currentFile;

        // Load existing dynamic comments from localStorage
        function loadStoredComments() {
            try {
                const stored = localStorage.getItem(storageKey);
                if (stored) {
                    const comments = JSON.parse(stored);
                    comments.forEach(c => renderCommentCard(c, false));
                }
            } catch (err) {
                console.error('Error loading comments:', err);
            }
        }

        function renderCommentCard(data, isNew) {
            const starsText = '★'.repeat(Number(data.rating) || 5) + '☆'.repeat(Math.max(0, 5 - (Number(data.rating) || 5)));
            const card = document.createElement('div');
            card.className = 'review-comment dynamic-comment';
            card.innerHTML = `
                <div class="comment-header">
                    <span class="comment-user">${escapeHtml(data.author || 'Gamer')}</span>
                    <span class="rating" style="font-size: 0.95rem;">${starsText}</span>
                    <span class="comment-date">${escapeHtml(data.date || 'Just now')}</span>
                </div>
                <p>"${escapeHtml(data.comment)}"</p>
            `;

            if (isNew) {
                commentList.appendChild(card);
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                commentList.appendChild(card);
            }
        }

        function showToast(msg) {
            let toast = document.querySelector('.toast-msg');
            if (!toast) {
                toast = document.createElement('div');
                toast.className = 'toast-msg';
                document.body.appendChild(toast);
            }
            toast.textContent = msg;
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        submitBtn.addEventListener('click', function (e) {
            e.preventDefault();

            if (!commentInput) return;
            const text = commentInput.value.trim();
            if (!text) {
                alert('Please type a comment before submitting.');
                commentInput.focus();
                return;
            }

            const ratingVal = starSelect ? starSelect.value : '5';
            const nameInput = document.getElementById('username');
            const author = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'Guest Gamer';
            const dateStr = new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });

            const newEntry = {
                author: author,
                rating: ratingVal,
                comment: text,
                date: dateStr
            };

            // Save to localStorage
            try {
                const stored = JSON.parse(localStorage.getItem(storageKey) || '[]');
                stored.push(newEntry);
                localStorage.setItem(storageKey, JSON.stringify(stored));
            } catch (err) {
                console.error('Error saving comment:', err);
            }

            renderCommentCard(newEntry, true);
            commentInput.value = '';
            if (nameInput) nameInput.value = '';
            showToast('Review submitted successfully! Thanks for sharing.');
        });

        loadStoredComments();
    }

    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
})();
