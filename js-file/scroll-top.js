// Wait for the document to be fully loaded
$(document).ready(function() {
    // When the user scrolls down 20px from the top of the document, show the button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
            $('#scrollToTopBtn').fadeIn();
        } else {
            $('#scrollToTopBtn').fadeOut();
        }
    });

    // When the user clicks on the button, scroll to the top of the document
    $('#scrollToTopBtn').click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
});
