document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');

    // تحديث الرابط النشط
    window.addEventListener('scroll', () => {
        const fromTop = window.scrollY + 50;
        links.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                links.forEach(link => link.classList.remove('active'));
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
    // تمرير سلس عند النقر
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // منع السلوك الافتراضي
        const targetId = this.getAttribute('href').substring(1); // الحصول على معرف القسم
        const targetSection = document.getElementById(targetId);

        // التمرير السلس المخصص
        const sectionPosition = targetSection.offsetTop; // موقع القسم
        const startPosition = window.pageYOffset; // موقع البداية
        const distance = sectionPosition - startPosition; // المسافة بين البداية والقسم
        const duration = 800; // مدة الانتقال (800ms)
        let start = null;

        function animationScroll(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animationScroll);
        }

        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }

        requestAnimationFrame(animationScroll);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const carsContainer = document.querySelector(".cars");
    const carCards = document.querySelectorAll(".car-card");

    // تعديل تصميم البطاقات بناءً على حجم الشاشة
    const adjustCardLayout = () => {
        const containerWidth = carsContainer.offsetWidth;
        if (containerWidth > 1000) {
            carCards.forEach(card => card.style.width = "calc(33.333% - 20px)"); // ثلاث بطاقات في صف واحد
        } else if (containerWidth > 600) {
            carCards.forEach(card => card.style.width = "calc(50% - 20px)"); // بطاقتين في صف
        } else {
            carCards.forEach(card => card.style.width = "100%"); // بطاقة واحدة في كل صف
        }
    };

    // تفعيل التوزيع عند تحميل الصفحة وتغيير حجم النافذة
    window.addEventListener("resize", adjustCardLayout);
    adjustCardLayout();
});
window.addEventListener('DOMContentLoaded', () => {
    const carCards = document.querySelectorAll('.car-card');

    // ضبط عرض البطاقات إلى 20rem باستخدام JavaScript
    carCards.forEach(card => {
        card.style.width = '20rem';  // تحديد العرض الثابت لكل بطاقة
    });
});
window.addEventListener('DOMContentLoaded', () => {
    const carCards = document.querySelectorAll('.car-card');

    // تقليل المسافة بين البطاقات إلى 20px
    carCards.forEach(card => {
        card.style.marginRight = '10px';  // المسافة بين البطاقات أفقيا
        card.style.marginBottom = '10px';  // المسافة بين البطاقات عموديا
    });
});
const whatsappButton = document.getElementById('whatsapp-button');

whatsappButton.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  if (name && phone && message) {
    const encodedMessage = encodeURIComponent(`Hello, my name is ${name}. ${message}`);
    const whatsappURL = `https://wa.me/+212661993914?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  } else {
    alert("Please fill out all fields!");
  }
});
// اجلب جميع أزرار "Rent Now"
document.querySelectorAll('.rent-btn').forEach(button => {
    button.addEventListener('click', () => {
        // احصل على العنصر الأب الذي يحتوي على بيانات السيارة
        const carCard = button.closest('.car-card');

        // احصل على اسم السيارة والسعر
        const carName = carCard.querySelector('.card-title').textContent.trim();
        const carPrice = carCard.querySelector('.card-price').textContent.trim();

        // رسالة WhatsApp
        const message = `I want to rent this car: ${carName} At a price: ${carPrice}`;

        // رقم WhatsApp (قم بوضع رقمك الخاص)
        const whatsappNumber = "+212661993914"; // استبدل الرقم هنا برقمك

        // إنشاء رابط التحويل إلى WhatsApp
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        // فتح الرابط في نافذة جديدة
        window.open(url, '_blank');
    });
});
    // Target the form
    const rentalForm = document.getElementById("rentalForm");

    // Add a submit event listener
    rentalForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get the input values
        const location = document.getElementById("location").value;
        const pickupDate = document.getElementById("pickupDate").value;
        const returnDate = document.getElementById("returnDate").value;

        // Validate the inputs
        if (!location || !pickupDate || !returnDate) {
            alert("Please fill out all fields.");
            return;
        }

        // Create the WhatsApp message
        const message = `I would like to rent a car with the following details:
        - Location: ${location}
        - Pick-up Date: ${pickupDate}
        - Return Date: ${returnDate}`;

        // WhatsApp number (replace with your own number)
        const whatsappNumber = "+212661993914";

        // Create WhatsApp link
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        // Open the link in a new tab
        window.open(whatsappLink, "_blank");
    });
// Select the hamburger menu and navbar
const menu = document.getElementById("menu");
const navbar = document.querySelector(".navbar");

// Toggle the menu on click
menu.addEventListener("click", () => {
    navbar.classList.toggle("active");
});











