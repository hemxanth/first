
// ANIMATED ACHIEVEMENT COUNTERS

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = Number(counter.dataset.target);
            let current = 0;

            const increment = Math.max(1, Math.ceil(target / 60));

            const updateCounter = () => {

                current = Math.min(current + increment, target);

                counter.textContent = current;

                if (current < target) {
                    requestAnimationFrame(updateCounter);
                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

}, { threshold: 0.5 });

counters.forEach(counter => {
    counterObserver.observe(counter);
});
