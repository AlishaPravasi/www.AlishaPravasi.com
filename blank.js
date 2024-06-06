document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const totalHeight = document.body.scrollHeight - windowHeight;
    const scrollFraction = scrollPosition / totalHeight;

    let color;
    if (scrollFraction < 0.33) {
        color = `rgba(211, 148, 156, ${scrollFraction * 3})`;
    } else if (scrollFraction < 0.66) {
        color = `rgba(119, 123, 89, ${(scrollFraction - 0.33) * 3})`;
    } else {
        color = `rgba(254, 171, 58, ${(scrollFraction - 0.66) * 3})`;
    }

    document.body.style.backgroundColor = color;
});
