script.js
(function () {
    var container = document.getElementById("typeform-button");

    container.setAttribute("data-tf-popover", "V8Xw69Ia");
    container.setAttribute("data-tf-custom-icon", "https://images.typeform.com/images/HkApqUbVMVhc");
    container.setAttribute("data-tf-opacity", "100");
    container.setAttribute("data-tf-iframe-props", "title=Your home w/ Jared.");
    container.setAttribute("data-tf-transitive-search-params", "");
    container.setAttribute("data-tf-button-color", "#14293E");
    container.setAttribute("data-tf-tooltip", "Hey 👋 How can I help you?");
    container.setAttribute("data-tf-medium", "snippet");
    container.setAttribute("data-tf-hidden", "name=");

    var script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    container.appendChild(script);

    container.addEventListener("click", function () {
        // Trigger Typeform button click action
        TF('V8Xw69Ia').toggle();
    });
})();
