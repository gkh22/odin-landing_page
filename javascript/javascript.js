function changePage() {
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");

    page1.style.display = (page1.style.display === 'none') ? 'block': 'none';
    page2.style.display = (page1.style.display === 'none') ? 'block': 'none';
}