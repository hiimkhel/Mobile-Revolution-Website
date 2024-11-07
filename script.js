(function() {
    function timeline() {
        var selectors = {
            id: document.querySelector(".timeline"),
            items: document.querySelectorAll(".timeline-item"),
            activeClass: "timeline-item--active",
            img: ".timeline-img"
        };

        var itemLength = selectors.items.length;

        window.addEventListener("scroll", function() {
            var pos = window.scrollY;

            selectors.items.forEach(function(item, i) {
                var min = item.offsetTop;
                var max = item.offsetHeight + item.offsetTop;

                if (i === itemLength - 2 && pos > min + item.offsetHeight / 2) {
                    setActiveItem(selectors.items[itemLength - 1]);
                } else if (pos <= max - 40 && pos >= min) {
                    setActiveItem(item);
                }
            });
        });

        function setActiveItem(item) {
            resetActiveItems();
            item.classList.add(selectors.activeClass);
            // Update the body ::before pseudo-element background image
            document.body.style.setProperty('--background-image', "url(" + item.querySelector(selectors.img).getAttribute("src") + ")");
        }

        function resetActiveItems() {
            selectors.items.forEach(function(el) {
                el.classList.remove(selectors.activeClass);
            });
        }
    }

    window.timeline = timeline;
    timeline();
})();
