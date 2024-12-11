// تأثير الظهور عند التمرير
document.addEventListener("DOMContentLoaded", function () {
  const fadeInElements = document.querySelectorAll(".fade-in");

  function fadeInOnScroll() {
    fadeInElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        element.style.opacity = 1;
        element.style.transform = "translateY(0)";
      }
    });
  }

  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll(); // لتشغيلها عند التحميل
});

const words = ["Front End", "Developer"]; // الكلمات التي يتم التكرار عليها
const typerText = document.querySelector(".typer-text"); // العنصر الذي سيتم عرض النص فيه
let wordIndex = 0; // مؤشر الكلمة الحالية
let charIndex = 0; // مؤشر الحرف الحالي
let isDeleting = false; // حالة الحذف أو الكتابة

function type() {
  const currentWord = words[wordIndex]; // الكلمة الحالية
  if (isDeleting) {
    // إذا كنا في وضع الحذف
    typerText.textContent = currentWord.substring(0, charIndex - 1); // حذف حرف
    charIndex--; // تقليل المؤشر
  } else {
    // إذا كنا في وضع الكتابة
    typerText.textContent = currentWord.substring(0, charIndex + 1); // كتابة حرف
    charIndex++; // زيادة المؤشر
  }

  // إذا انتهت الكتابة لكل الحروف
  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true; // البدء بالحذف
    setTimeout(type, 1000); // انتظر قبل البدء بالحذف
  }
  // إذا انتهى الحذف لكل الحروف
  else if (isDeleting && charIndex === 0) {
    isDeleting = false; // العودة لوضع الكتابة
    wordIndex = (wordIndex + 1) % words.length; // الانتقال إلى الكلمة التالية
    setTimeout(type, 1000); // انتظر قبل البدء بالكلمة الجديدة
  }
  // إذا كنا في وسط الكتابة أو الحذف
  else {
    setTimeout(type, isDeleting ? 50 : 50); // سرعة الكتابة أو الحذف
  }
}

// بدء الكتابة
type();

// Download Btn

const downloadBtn = document.getElementById("download");
const downloadLink = document.createElement("a");
downloadLink.href = "../pdf/AhmedKhaledFayz.pdf";
downloadLink.target = "_blank";
downloadLink.download = "AhmedKhaledFayz.pdf";
downloadBtn.addEventListener("click", () => {
  downloadLink.click();
});


// ------------Form?----------------

const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const submitBtn = document.querySelector("button[type='submit']");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // ارسال البيانات الى البريد الالكتروني
  sendEmail(name, email, message);
});


