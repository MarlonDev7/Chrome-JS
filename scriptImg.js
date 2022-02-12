const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com.br/search?q="+ input + "&tbm=isch&ved=2ahUKEwiwlY7y08P0AhWmBbkGHWVuBN4Q2-cCegQIABAA&oq=" + input + "&gs_lcp=CgNpbWcQARgAMgcIIxDvAxAnMggIABCABBCxAzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIICAAQgAQQsQMyBQgAEIAEOgsIABCABBCxAxCDAToECAAQAzoICAAQsQMQgwE6BAgAEEM6BwgAELEDEENQvQtY6xJgsCNoAHAAeACAAaMBiAGzCJIBAzAuN5gBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=5PenYbCTA6aL5OUP5dyR8A0&bih=664&biw=1366&hl=pt-BR"
}