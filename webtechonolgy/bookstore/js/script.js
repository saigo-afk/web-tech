// ===== Reading List Functionality =====
let readingList = JSON.parse(localStorage.getItem('bookstore_reading_list')) || [];

function updateReadingListCount() {
    const listCount = document.querySelector('.cart-count');
    if (listCount) {
        listCount.textContent = readingList.length;
    }
}

function addToReadingList(bookId, bookTitle, bookAuthor) {
    const existingBook = readingList.find(item => item.id === bookId);

    if (existingBook) {
        showNotification(`${bookTitle} is already in your reading list!`);
        return;
    }

    readingList.push({
        id: bookId,
        title: bookTitle,
        author: bookAuthor,
        dateAdded: new Date().toLocaleDateString(),
        progress: 0,
        status: 'want-to-read' // want-to-read, reading, completed
    });

    localStorage.setItem('bookstore_reading_list', JSON.stringify(readingList));
    updateReadingListCount();
    showNotification(`${bookTitle} added to your reading list!`);
}

function removeFromReadingList(bookId) {
    readingList = readingList.filter(item => item.id !== bookId);
    localStorage.setItem('bookstore_reading_list', JSON.stringify(readingList));
    updateReadingListCount();
    displayReadingList();
}

function updateReadingProgress(bookId, progress) {
    const book = readingList.find(item => item.id === bookId);
    if (book) {
        book.progress = Math.min(progress, 100);
        localStorage.setItem('bookstore_reading_list', JSON.stringify(readingList));
        displayReadingList();
    }
}

function updateReadingStatus(bookId, status) {
    const book = readingList.find(item => item.id === bookId);
    if (book) {
        book.status = status;
        localStorage.setItem('bookstore_reading_list', JSON.stringify(readingList));
        displayReadingList();
    }
}

function displayReadingList() {
    const readingTable = document.querySelector('.reading-table tbody');
    const readingSummary = document.querySelector('.reading-summary');

    if (!readingTable) return;

    if (readingList.length === 0) {
        readingTable.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 40px;">📚 Your reading list is empty. Start by adding books!</td></tr>';
        if (readingSummary) {
            readingSummary.style.display = 'none';
        }
        return;
    }

    if (readingSummary) {
        readingSummary.style.display = 'block';
    }

    readingTable.innerHTML = readingList.map(book => `
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
                <select onchange="updateReadingStatus('${book.id}', this.value)" style="padding: 5px;">
                    <option value="want-to-read" ${book.status === 'want-to-read' ? 'selected' : ''}>Want to Read</option>
                    <option value="reading" ${book.status === 'reading' ? 'selected' : ''}>Currently Reading</option>
                    <option value="completed" ${book.status === 'completed' ? 'selected' : ''}>Completed</option>
                </select>
            </td>
            <td>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <input type="range" min="0" max="100" value="${book.progress}" 
                           onchange="updateReadingProgress('${book.id}', this.value)" style="width: 100px;">
                    <span>${book.progress}%</span>
                </div>
            </td>
            <td>${book.dateAdded}</td>
            <td>
                <button class="btn btn-danger btn-small" onclick="removeFromReadingList('${book.id}')">Remove</button>
            </td>
        </tr>
    `).join('');

    updateReadingSummary();
}

function updateReadingSummary() {
    const totalBooks = readingList.length;
    const completedBooks = readingList.filter(b => b.status === 'completed').length;
    const readingBooks = readingList.filter(b => b.status === 'reading').length;
    const wantToRead = readingList.filter(b => b.status === 'want-to-read').length;

    const totalEl = document.querySelector('[data-total-books]');
    const completedEl = document.querySelector('[data-completed-books]');
    const readingEl = document.querySelector('[data-reading-books]');
    const wantEl = document.querySelector('[data-want-books]');

    if (totalEl) totalEl.textContent = totalBooks;
    if (completedEl) completedEl.textContent = completedBooks;
    if (readingEl) readingEl.textContent = readingBooks;
    if (wantEl) wantEl.textContent = wantToRead;
}

// ===== Form Validation =====
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validateContactForm() {
    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    const subject = document.querySelector('input[name="subject"]');
    const message = document.querySelector('textarea[name="message"]');

    let isValid = true;
    let errors = [];

    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.remove());

    if (!name || name.value.trim() === '') {
        isValid = false;
        errors.push('Name is required');
        if (name) name.parentElement.innerHTML += '<p class="error-message error">Name is required</p>';
    }

    if (!email || !validateEmail(email.value)) {
        isValid = false;
        errors.push('Valid email is required');
        if (email) email.parentElement.innerHTML += '<p class="error-message error">Valid email is required</p>';
    }

    if (!subject || subject.value.trim() === '') {
        isValid = false;
        errors.push('Subject is required');
        if (subject) subject.parentElement.innerHTML += '<p class="error-message error">Subject is required</p>';
    }

    if (!message || message.value.trim().length < 10) {
        isValid = false;
        errors.push('Message must be at least 10 characters');
        if (message) message.parentElement.innerHTML += '<p class="error-message error">Message must be at least 10 characters</p>';
    }

    return isValid;
}

function handleContactFormSubmit(event) {
    event.preventDefault();

    if (!validateContactForm()) {
        return;
    }

    // Show success message
    const successMsg = document.querySelector('.form-message.success');
    if (successMsg) {
        successMsg.style.display = 'block';
    }

    // Reset form
    event.target.reset();

    // Hide success message after 3 seconds
    setTimeout(() => {
        if (successMsg) {
            successMsg.style.display = 'none';
        }
    }, 3000);
}

// ===== Notifications =====
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background-color: #27ae60;
        color: white;
        padding: 15px 20px;
        border-radius: 4px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ===== Book Details Page =====
function updateQuantitySelector(operation) {
    const input = document.querySelector('.quantity-selector input');
    if (!input) return;

    let value = parseInt(input.value) || 1;
    if (operation === 'increase') {
        value += 1;
    } else if (operation === 'decrease' && value > 1) {
        value -= 1;
    }
    input.value = value;
}

// ===== Search/Filter Books =====
function filterBooks(category) {
    const bookCards = document.querySelectorAll('.book-card');
    bookCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// ===== Navigation Mobile Toggle =====
function toggleMobileMenu() {
    const nav = document.querySelector('nav');
    if (nav) {
        nav.classList.toggle('active');
    }
}

// ===== Initialize Reading List on Page Load =====
document.addEventListener('DOMContentLoaded', function() {
    updateReadingListCount();

    // If on reading list page, display list
    if (document.querySelector('.reading-table')) {
        displayReadingList();
    }

    // Handle contact form submission
    const contactForm = document.querySelector('form[name="contactForm"]');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }

    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
});
