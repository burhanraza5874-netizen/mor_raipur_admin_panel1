document.addEventListener("DOMContentLoaded", function() {
    const sidebarContainer = document.querySelector('.sidebar');
    if (!sidebarContainer) return;

    // Get current page name to set active class
    const path = window.location.pathname;
    const page = path.split("/").pop() || "main.php";

    const sidebarHTML = `
        <style>
            .sidebar a, .sidebar a:visited, .sidebar a:link, .sidebar a i {
                color: #ffffff !important;
                text-decoration: none !important;
            }
            .sidebar li.active a {
                background: #3567d6 !important;
            }
            .sidebar li:hover a {
                background: rgba(255,255,255,0.1) !important;
            }
        </style>
        <div class="sidebar-header">
            <h2>RAIPUR ADMIN</h2>
        </div>
        <ul>
            <li class="${page === 'main.php' ? 'active' : ''}">
                <a href="main.php"><i class="fas fa-th-large"></i> Dashboard</a>
            </li>
            <li class="${page === 'hall.html' ? 'active' : ''}">
                <a href="hall.html"><i class="fas fa-key"></i> Hall Booking</a>
            </li>
            <li class="${page === 'tender.html' ? 'active' : ''}">
                <a href="tender.html"><i class="fas fa-file-invoice"></i> Tender List</a>
            </li>
            <li class="${page === 'upcoming.html' ? 'active' : ''}">
                <a href="upcoming.html"><i class="fas fa-calendar-alt"></i> Upcoming Events</a>
            </li>
            <li class="${page === 'gallery.html' ? 'active' : ''}">
                <a href="gallery.html"><i class="fas fa-images"></i> Gallery</a>
            </li>
            <li class="${page === 'grievance.html' ? 'active' : ''}">
                <a href="grievance.html"><i class="fas fa-exclamation-circle"></i> Grievance</a>
            </li>
            <li class="${page === 'facility.html' ? 'active' : ''}">
                <a href="facility.html"><i class="fas fa-building"></i> Facility</a>
            </li>
            <li class="${page === 'officer.html' ? 'active' : ''}">
                <a href="officer.html"><i class="fas fa-user-tie"></i> Officer List</a>
            </li>
            <li class="${page === 'raipurian.html' ? 'active' : ''}">
                <a href="raipurian.html"><i class="fas fa-users"></i> For Raipurians</a>
            </li>
            <li class="${page === 'report.html' ? 'active' : ''}">
                <a href="report.html"><i class="fas fa-chart-line"></i> Report</a>
            </li>
            <li class="${page === 'feedback.html' ? 'active' : ''}">
                <a href="feedback.html"><i class="fas fa-comment-dots"></i> Feedback</a>
            </li>
        </ul>
    `;

    sidebarContainer.innerHTML = sidebarHTML;
});
