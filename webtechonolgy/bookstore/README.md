# 📚 BookStore Platform - Web Technology Assignment (BIT233)

A fully responsive, modern online reading platform built with **HTML5**, **CSS3**, and **Vanilla JavaScript** featuring a complete admin backend interface. This project demonstrates professional web development practices with clean code, smooth user experience, and functional management systems.

## 🎯 Project Overview

**BookStore** is a free online reading platform where users can browse an extensive collection of books, add them to reading lists, track reading progress, and explore various categories. The platform includes a complete admin dashboard for managing books, users, analytics, and platform settings.

**Demo Admin Login:** Username: `admin` | Password: `admin123`

## 📁 Complete Project Structure

```
bookstore/
├── index.html                    # Homepage with featured books
├── shop.html                     # Full book catalog with filtering
├── reading-list.html             # Reading list with progress tracking
├── about.html                    # About the platform
├── contact.html                  # Contact form with validation
│
├── css/
│   └── style.css                 # Main stylesheet (600+ lines, responsive)
│
├── js/
│   └── script.js                 # JavaScript functionality
│
├── backend/                      # 🔐 ADMIN DASHBOARD
│   ├── admin-login.html          # Login page (admin/admin123)
│   ├── dashboard.html            # Main dashboard with statistics
│   ├── manage-books.html         # Book CRUD operations
│   ├── manage-users.html         # User management interface
│   ├── manage-reading-lists.html # Reading list analytics
│   ├── analytics.html            # Platform analytics & reports
│   ├── settings.html             # Admin settings & configuration
│   └── admin-style.css           # Admin panel styling (600+ lines)
│
└── README.md                     # This documentation
```

## ✨ Features

### 👥 Frontend Features (User-Facing)

- **💻 Responsive Design** - Mobile (480px), Tablet (768px), Desktop optimized with Flexbox/Grid
- **🏠 Homepage** - Hero section, featured books, why-choose-us section
- **📖 Browse/Shop Page** - 12 books with category filtering, search, and sorting
- **📚 Reading List Management** - Add/remove books, track status (Want to Read, Reading, Completed)
- **📊 Progress Tracking** - Visual progress bars with percentage completion
- **📋 Contact Form** - Validation, email, name, subject, message fields
- **👨‍💼 About Page** - Company story, core values, team profiles, statistics
- **💾 Data Persistence** - localStorage keeps reading lists across sessions
- **🎨 Professional Styling** - Modern design with gradients, shadows, and animations
- **⌨️ Form Validation** - Client-side validation for contact and search forms
- **🔍 Search & Filter** - Filter books by category and search by title/author
- **✨ Smooth Animations** - Hover effects, transitions, fade-in effects

### 🔐 Admin Backend Features

#### **Admin Login Page**

- Username & password authentication
- Demo credentials: `admin` / `admin123`
- Session management with localStorage
- Auto-redirect to dashboard when logged in

#### **Dashboard**

- Overview statistics (Total Books, Active Users, Reading Lists, Avg Rating)
- Recent activity log (5 sample entries)
- Quick action buttons linking to management sections
- User menu with logout functionality

#### **Book Management**

- View books in table format
- Search books by title or author
- Filter by category (Fiction, Non-Fiction, Mystery, Romance)
- Add new books via modal dialog
- Edit existing book details
- Delete books with confirmation
- Display ratings and date added

#### **User Management**

- View all registered users with details
- Search users by name or email
- Filter by status (Active, Inactive, Suspended)
- Edit user information
- Delete users with confirmation
- Track books reading per user

#### **Reading List Analytics**

- Overview of all user reading lists
- Statistics per user (Total, Reading, Want to Read, Completed)
- Progress percentage visualization
- Recent reading activity log
- Clear reading lists option

#### **Platform Analytics**

- Key metrics dashboard (Books read, Active users, Avg rating, Books added)
- User engagement statistics (New users, sessions, completions)
- Category performance analysis (Books, reads, ratings)
- Top 5 most-read books ranking
- Date range filtering

#### **Settings**

- Site configuration (name, description, email, maintenance mode)
- User management settings (registration, verification, inactivity policies)
- Content settings (items per page, categories, reviews, ratings)
- Admin account password change
- Backup & maintenance database operations
- System information display

## 🚀 Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server or backend installation required
- Works completely offline/locally

### Installation & Running

1. **Extract/Download Project**

   ```bash
   git clone https://github.com/your-username/bookstore.git
   cd bookstore
   ```

2. **Open in Browser**
   - Simply open `index.html` in your web browser
   - Or use Live Server extension in VS Code (Recommended)

3. **Using Live Server (VS Code)**
   - Install "Live Server" extension by Ritwick Dey
   - Right-click on `index.html` → "Open with Live Server"
   - Automatically refreshes when files change

## 📖 Usage Guide

### User Frontend

#### **Homepage (index.html)**

- Browse featured books
- View platform highlights
- Click "Start Reading" to browse all books
- Quick navigation to all pages

#### **Browse/Shop Page (shop.html)**

1. View complete book catalog (12 books)
2. **Filter by Category**: Select from dropdown (Fiction, Non-Fiction, Mystery, Romance)
3. **Search Books**: Find specific books by title
4. **Read Online**: Add books to your reading list
5. **View Details**: See book title, author, rating

#### **Reading List (reading-list.html)**

1. **View Your Books**: See all books you've added
2. **Statistics**: Monitor progress
   - Total books in list
   - Currently reading
   - Completed
   - Want to read
3. **Track Progress**: Use progress slider (0-100%)
4. **Change Status**: Dropdown menu for book status
5. **Remove Books**: Delete books from list
6. **Data Auto-Save**: Progress saved in browser

#### **Contact (contact.html)**

1. Fill out contact form
   - Name (required)
   - Email (required, valid format)
   - Subject (required)
   - Message (required, min 10 characters)
2. See contact information
3. Check FAQ section (5 common questions)
4. Form validation before submission

#### **About (about.html)**

- Read company mission
- Learn core values
- Meet leadership team
- View platform statistics

### 🔐 Admin Panel Access

#### **Login to Admin Dashboard**

1. **Access Login Page:**
   - Click 🔐 **Admin** in navigation menu (red lock icon)
   - Or directly visit: `backend/admin-login.html`

2. **Demo Credentials:**
   - **Username:** `admin`
   - **Password:** `admin123`
   - ✅ Click "Remember me" checkbox (optional)
   - ✅ Click "Login" button

3. **Admin Dashboard Pages Available:**
   - **Dashboard** - Overview and quick stats
   - **Manage Books** - Add/Edit/Delete books
   - **Manage Users** - User account management
   - **Reading Lists** - User analytics
   - **Analytics** - Platform reports
   - **Settings** - Configuration

#### **Admin Dashboard Usage**

**Dashboard** (`dashboard.html`)

- View key statistics (4 cards)
- See recent activity log
- Access quick action buttons
- Logout from top-right menu

**Manage Books** (`manage-books.html`)

- Search books by title/author
- Filter by category
- View book table (ID, Title, Author, Category, Rating, Date)
- ✏️ **Edit** - Modify book details
- 🗑️ **Delete** - Remove book
- Add new books with modal form
- Form includes: Title, Author, Category, Description, Rating

**Manage Users** (`manage-users.html`)

- Search users by name/email
- Filter by status (Active, Inactive, Suspended)
- View user details in table
- Edit user information
- Delete user accounts
- Track books reading per user

**Reading Lists** (`manage-reading-lists.html`)

- View all user reading lists
- Statistics per user:
  - Total books
  - Currently reading
  - Want to read
  - Completed
  - Progress percentage
- Recent reading activity log
- Clear user reading lists

**Analytics** (`analytics.html`)

- Key metrics dashboard (4 cards)
  - Total books read
  - Active users
  - Average rating
  - Books added
- User engagement table
- Category performance analysis
- Top 5 most-read books ranking
- Completion rate statistics
- Date range filtering

**Settings** (`settings.html`)

- **Site Configuration**
  - Site name, description
  - Support email
  - Maintenance mode
- **User Settings**
  - Registration control
  - Email verification
  - Inactivity policies
- **Content Settings**
  - Items per page
  - Book categories
  - Reviews & ratings
- **Admin Account**
  - Change password
- **Backup & Maintenance**
  - Backup database
  - Clear cache
  - Generate reports
- **System Info**
  - Version, database, OS info

#### **Logout from Admin**

- Click **Logout** button in top-right corner
- Returns to login page
- Session cleared from browser

## 🛠️ Technical Specifications

### Frontend Stack

- **HTML5** - Semantic markup with proper structure
- **CSS3** - Modern styling with animations
- **Vanilla JavaScript** - No frameworks or libraries
- **localStorage API** - Client-side data persistence

### Admin Backend Stack

- **HTML5** - Professional admin interface
- **CSS3** - 600+ lines of admin styling
- **Vanilla JavaScript** - Form handling and interactivity
- **localStorage** - Session management (demo auth)

### Key Technologies

✅ CSS Grid & Flexbox for layouts
✅ CSS Custom Properties (variables)
✅ localStorage for data persistence
✅ Modal dialogs for forms
✅ Responsive design patterns
✅ Form validation
✅ DOM manipulation

## 🎨 Design System

### Color Palette

**Frontend:**

- Primary: `#8b6f47` (Brown)
- Secondary: `#d4a574` (Gold)
- Text: `#333` (Dark Gray)
- Error: `#e74c3c` (Red)
- Success: `#27ae60` (Green)

**Admin Backend:**

- Primary: `#3498db` (Blue)
- Secondary: `#34495e` (Dark Blue)
- Background: `#2c3e50` (Very Dark Blue)
- Success: `#2ecc71` (Green)
- Error: `#e74c3c` (Red)
- Warning: `#f39c12` (Orange)

### Responsive Breakpoints

| Device  | Width   | Grid     | Layout   |
| ------- | ------- | -------- | -------- |
| Mobile  | 480px   | 1-2 cols | Stacked  |
| Tablet  | 768px   | 2-3 cols | Flexible |
| Desktop | 1200px+ | 3-4 cols | Full     |

### Typography

- **Headings:** Larger, bold, clear hierarchy
- **Body Text:** Readable, 16px minimum on mobile
- **Buttons:** Clear, clickable areas (44px minimum)

## 💾 Data Persistence

### localStorage Usage

**Frontend:**

```javascript
// Reading list storage
localStorage.setItem("bookstore_reading_list", JSON.stringify(books));
localStorage.getItem("bookstore_reading_list");
```

**Admin Backend:**

```javascript
// Session management
localStorage.setItem("adminLoggedIn", "true");
localStorage.setItem("adminUsername", "admin");
localStorage.removeItem("adminLoggedIn"); // On logout
```

### Data Saved Across Sessions

- ✅ Reading list and progress
- ✅ Admin session status
- ✅ User preferences
- ❌ Not cleared on page refresh
- ❌ Persists within browser (separate per browser)

## ✅ Validation

### Contact Form Validation

- Name: Required, non-empty
- Email: Required, valid format (includes @)
- Subject: Required, non-empty
- Message: Required, minimum 10 characters
- Feedback: Success/error messages displayed

### Book Form Validation (Admin)

- Title: Required
- Author: Required
- Category: Required (dropdown)
- Description: Required
- Rating: Required (1-5)

## 📱 Responsive Features

- Mobile-first design approach
- Touch-friendly buttons (minimum 44px)
- Flexible grid layouts
- Readable font sizes on all devices
- Optimized navigation for mobile
- Tested on devices from 320px to 1920px

## 🌐 Browser Compatibility

### Tested & Working

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Android Chrome)

### Features Used

- CSS Grid & Flexbox
- localStorage API
- Fetch API (not used, but compatible)
- ES6 JavaScript
- CSS Custom Properties

## 📊 Sample Data

### Sample Books (12)

1. The Great Gatsby - F. Scott Fitzgerald (Fiction) ⭐ 4.8/5
2. 1984 - George Orwell (Non-Fiction) ⭐ 4.7/5
3. To Kill a Mockingbird - Harper Lee (Fiction) ⭐ 4.8/5
4. Pride and Prejudice - Jane Austen (Romance) ⭐ 4.6/5
5. Jane Eyre - Charlotte Brontë (Romance) ⭐ 4.5/5
6. The Hobbit - J.R.R. Tolkien (Fiction) ⭐ 4.7/5
7. Sapiens - Yuval Noah Harari (Non-Fiction) ⭐ 4.5/5
8. A Brief History - Stephen Hawking (Non-Fiction) ⭐ 4.4/5
9. Murder on Orient Express - Agatha Christie (Mystery) ⭐ 4.6/5
10. Sherlock Holmes - Arthur Conan Doyle (Mystery) ⭐ 4.7/5
11. The Book Thief - Markus Zusak (Fiction) ⭐ 4.6/5
12. Educated - Tara Westover (Non-Fiction) ⭐ 4.8/5

### Sample Users (5)

- John Doe - 5 books reading
- Jane Smith - 8 books reading
- Mike Johnson - 3 books reading
- Sarah Williams - 12 books reading
- Robert Brown - 2 books reading

## ✉️ Contact & Support

**Support Email:** support@bookstore.com  
**Phone:** +1 (555) 123-4567  
**Address:** 123 Book Street, Reading City, RC 12345

**For questions, use the Contact Page** → `contact.html`

## 🎓 Assignment Completion (BIT233)

### Requirements Met

✅ HTML5 - Semantic markup throughout
✅ CSS3 - Advanced styling with animations
✅ JavaScript - Vanilla JS with no frameworks
✅ Frontend-Only - No backend database/server
✅ Responsive Design - Mobile/tablet/desktop
✅ Professional Design - Modern UI/UX
✅ Functional Features - Complete platform
✅ Code Quality - Well-organized code

### Pages Delivered

✅ Homepage (index.html)
✅ Browse/Shop (shop.html)
✅ Reading List (reading-list.html)
✅ Contact (contact.html)
✅ About (about.html)
✅ Admin Login (backend/admin-login.html)
✅ Admin Dashboard (backend/dashboard.html)
✅ Book Management (backend/manage-books.html)
✅ User Management (backend/manage-users.html)
✅ Reading Lists (backend/manage-reading-lists.html)
✅ Analytics (backend/analytics.html)
✅ Settings (backend/settings.html)

### Code Quality Standards

- Well-commented code
- Semantic HTML5
- Organized CSS with variables
- Clean JavaScript functions
- Proper error handling
- Form validation
- Accessibility considerations
- Consistent naming conventions

## 🚀 Future Enhancements

Potential features for v2.0:

- Backend server (Node.js, Flask, Django)
- Real database (MySQL, PostgreSQL, MongoDB)
- User registration & authentication
- Book cover images & thumbnails
- Advanced search with autocomplete
- Reading recommendations engine
- User book reviews & ratings
- Social features (sharing, bookmarks)
- Dark mode toggle
- Multiple language support
- Mobile app integration
- JWT token authentication
- REST API

## 📄 License

Educational project for BIT233 Web Technology.

## 👨‍💻 Author

**Student Assignment**  
Course: BIT233 - Web Technology  
Date: December 2024

---

## ⚡ Quick Links

- **Homepage:** [index.html](index.html)
- **Shop:** [shop.html](shop.html)
- **Reading List:** [reading-list.html](reading-list.html)
- **Admin Login:** [backend/admin-login.html](backend/admin-login.html)
- **Admin Dashboard:** [backend/dashboard.html](backend/dashboard.html)

---

**Demo Admin Account:**

- Username: `admin`
- Password: `admin123`
- Access via: Click 🔐 Admin link or open [backend/admin-login.html](backend/admin-login.html)

Made with ❤️ for Web Technology

```bash
git init
git add .
git commit -m "Initial commit: BookStore reading platform"
git remote add origin https://github.com/your-username/bookstore.git
git push -u origin main
```

### Recommended Commits

1. Initial project setup
2. HTML structure for all pages
3. CSS styling implementation
4. JavaScript functionality
5. Form validation
6. Reading list features
7. Progress tracking implementation
8. Responsive design optimization

## 🚀 Deployment

### GitHub Pages

1. Push to GitHub
2. Go to Settings > Pages
3. Select main branch
4. Site will be live at `https://username.github.io/bookstore`

### Alternative Hosting

- Netlify (free)
- Vercel (free)
- GitHub Pages (free)

## 📞 Support

For issues or questions:

- Check console for JavaScript errors (F12)
- Verify all files are in correct directories
- Clear browser cache if styles don't load
- Use browser DevTools for debugging

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Created as a Web Technology assignment demonstrating professional web development practices.

---

**Happy Reading! 📚**

_Built with HTML, CSS, and JavaScript - No frameworks, pure web technology._
