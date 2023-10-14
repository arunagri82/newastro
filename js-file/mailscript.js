window.formbutton = window.formbutton || function () { (formbutton.q = formbutton.q || []).push(arguments) };
formbutton("create", {
  action: "https://formspree.io/f/xoqopodn",
  title: "How can we help?",
  fields: [
    {
      type: "email",
      label: "Email:",
      name: "email",
      required: true,
      placeholder: "your@email.com"
    },
    {
      type: "text", // Contact Number Field
      label: "Contact Number:",
      name: "contact_number",
      required: true,
      placeholder: "Your phone number"
    },
    {
      type: "text", // Subject Field
      label: "Subject:",
      name: "subject",
      required: true,
      placeholder: "Subject of your message"
    },
    {
      type: "textarea",
      label: "Message:",
      name: "message",
      required: true,
      placeholder: "What's on your mind?"
    },
    { type: "submit", label: "Submit" } // Submit Button
  ],
  styles: {
    title: {
      backgroundColor: "gray"
    },
    button: {
      backgroundColor: "gray"
    }
  }
});


// JavaScript to show the navbar on scroll
window.onscroll = function () {
  var navbar = document.querySelector('.navbar');
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      navbar.style.display = "block";
  } else {
      navbar.style.display = "none";
  }
};
