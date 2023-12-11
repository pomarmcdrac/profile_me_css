document.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `
            <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59758.17784158872!2d-103.38977408181317!3d20.592707921181425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b2910f785fa7%3A0x1fa78f2fcf03b98d!2sSan%20Pedro%20Tlaquepaque%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1702073693531!5m2!1ses-419!2smx"></iframe>
        `;
    }, 500)
})