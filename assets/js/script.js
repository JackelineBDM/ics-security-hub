// =============================================
// ICS Security Hub - Interactive Filtering
// Milestone 2 - Interactive Frontend Development
// Custom JavaScript by Jackeline G. Brooks Marcano
// =============================================

/**
 * Filters threat cards by Purdue Level
 * @param {string} level - 'all' or '1', '2', '3', '4', '5'
 */
function filterLevel(level) {
    const allCards = document.querySelectorAll('.threat-card');
    
    allCards.forEach(card => {
        if (level === 'all' || card.getAttribute('data-level') === level) {
            card.style.display = 'block';   // Show matching cards
            card.style.opacity = '1';
        } else {
            card.style.display = 'none';    // Hide others
            card.style.opacity = '0.3';
        }
    });
    
    // Optional: Update active button styling
    document.querySelectorAll('.level-btn').forEach(btn => {
        if (btn.getAttribute('data-level') === level) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Reset filter (show all cards)
function resetFilter() {
    filterLevel('all');
}

// Make functions available globally so onclick works
window.filterLevel = filterLevel;
window.resetFilter = resetFilter;

// Optional: Auto-run when page loads (shows all cards)
document.addEventListener('DOMContentLoaded', () => {
    console.log('%c✅ ICS Security Hub Filter Loaded', 'color: #0f0; font-weight: bold');
});