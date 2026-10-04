// ukashi.github.io · 轻量交互

(function () {
    'use strict';

    const revealSelector = [
        '[data-reveal]',
        '.section-title',
        '.about-grid',
        '.skill-category',
        '.project-card',
        '.timeline-item',
        '.contact-terminal',
    ].join(', ');

    function initReveal() {
        const elements = Array.from(document.querySelectorAll(revealSelector));
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        elements.forEach((element) => element.classList.add('reveal-target'));

        if (reduceMotion || !('IntersectionObserver' in window)) {
            elements.forEach((element) => element.classList.add('is-visible'));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    entry.target.classList.remove('is-pending');
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -48px 0px',
            }
        );

        elements.forEach((element, index) => {
            element.style.transitionDelay = `${Math.min(index % 4, 3) * 55}ms`;
            element.classList.add('is-pending');
            observer.observe(element);
        });
    }

    function initActiveNavigation() {
        if (!('IntersectionObserver' in window)) return;

        const links = new Map(
            Array.from(document.querySelectorAll('.nav a[href^="#"]')).map((link) => [
                link.getAttribute('href').slice(1),
                link,
            ])
        );

        const sections = Array.from(document.querySelectorAll('main section[id]'));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    links.forEach((link, id) => {
                        if (id === entry.target.id) {
                            link.setAttribute('aria-current', 'location');
                        } else {
                            link.removeAttribute('aria-current');
                        }
                    });
                });
            },
            {
                rootMargin: '-30% 0px -58% 0px',
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));
    }

    function printConsoleNote() {
        console.log(
            '%cukashi / agent-builder',
            'color:#3157f6;font:700 14px monospace'
        );
        console.log(
            '%cBuilding useful AI agents from models, tools and real workflows.',
            'color:#687287;font:12px monospace'
        );
    }

    document.addEventListener('DOMContentLoaded', () => {
        initReveal();
        initActiveNavigation();
        printConsoleNote();
    });
})();
