
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // disappears when scrolled away
      }
    });
  });
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  }
  );
  // USer Dashboard Switching
    let hasImportantNotification = true; // Set to false to hide badge
    document.getElementById('notifBadge').style.display = hasImportantNotification ? 'flex' : 'none';

    // Tab switching (for demonstration, doesn't change content)
     // Tabs logic
     const tabs = document.querySelectorAll('.tab');
     const tabContents = document.querySelectorAll('.tab-content');
     tabs.forEach(tab => {
         tab.addEventListener('click', function() {
             // Remove active from all tabs and contents
             tabs.forEach(t => t.classList.remove('active'));
             tabContents.forEach(c => c.classList.remove('active'));
             // Add active to clicked tab and corresponding content
             this.classList.add('active');
             document.getElementById('tab-' + this.dataset.tab).classList.add('active');
         });
     });

      // Simple JavaScript for form responsiveness and validation
    const form = document.getElementById('subscriptionForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Subscription form submitted!');
    });

// Payment Method Switcher ...yoo i tried msee

// const MpesaPaymentSwitcher = document.querySelector("#mpesa-payment-info");
// const MpesaPayment = document.addEventListener("click", function () {
//     PayPalPaymentSwitcher.classList.remove("active");
//       VisaPaymentSwitcher.classList.remove("active");
//     MpesaPaymentSwitcher.classList.add("active");
// });


// const PayPalPaymentSwitcher = document.querySelector("#paypal-payment-info");
// const PayPalPayment = document.addEventListener("click", function () {
//   VisaPaymentSwitcher.classList.remove("active");
//   MpesaPaymentSwitcher.classList.remove("active");
//   PayPalPaymentSwitcher.classList.add("active");
// });
// const VisaPaymentSwitcher = document.querySelector("#visa-payment-info");
// const VisaPayment = document.addEventListener("click", function () {
//   PayPalPaymentSwitcher.classList.remove("active");
//   MpesaPaymentSwitcher.classList.remove("active");
//   VisaPaymentSwitcher.classList.add("active");
// });
// Get references to the switcher elements
const MpesaPaymentSwitcher = document.querySelector("#mpesa-payment-info");
const PayPalPaymentSwitcher = document.querySelector("#paypal-payment-info");
const VisaPaymentSwitcher = document.querySelector("#visa-payment-info");

// Function to handle the payment method switching
function switchPaymentMethod(activeSwitcher) {
    // Remove 'active' class from all switchers
    MpesaPaymentSwitcher.classList.remove("active");
    PayPalPaymentSwitcher.classList.remove("active");
    VisaPaymentSwitcher.classList.remove("active");

    // Add 'active' class to the clicked switcher
    activeSwitcher.classList.add("active");
}

// Add event listeners to each switcher element
MpesaPaymentSwitcher.addEventListener("click", function() {
    switchPaymentMethod(MpesaPaymentSwitcher);
});

PayPalPaymentSwitcher.addEventListener("click", function() {
    switchPaymentMethod(PayPalPaymentSwitcher);
});

VisaPaymentSwitcher.addEventListener("click", function() {
    switchPaymentMethod(VisaPaymentSwitcher);
});



