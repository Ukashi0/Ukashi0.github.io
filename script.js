// ukashi.github.io — 交互脚本

(function () {
    'use strict';

    // Hero 标题打字机效果
    function typewriter() {
        const title = document.querySelector('.hero-title');
        if (!title) return;

        const originalHTML = title.innerHTML;
        const text = title.textContent;
        title.innerHTML = '';
        title.style.visibility = 'visible';

        let i = 0;
        const speed = 60;

        function type() {
            if (i <= text.length) {
                const current = text.substring(0, i);
                title.innerHTML = current.replace(
                    'ukashi',
                    '<span class="accent">ukashi</span>'
                ) + '<span class="cursor">_</span>';
                i++;
                setTimeout(type, speed);
            } else {
                title.innerHTML = originalHTML;
            }
        }

        type();
    }

    // 滚动时元素淡入动画
    function fadeInOnScroll() {
        const elements = document.querySelectorAll(
            '.section-title, .about-grid, .skill-category, .project-card, .timeline-item, .contact-terminal'
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        elements.forEach((el, idx) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = `opacity 0.6s ease ${idx * 0.05}s, transform 0.6s ease ${idx * 0.05}s`;
            observer.observe(el);
        });
    }

    // 技能标签：鼠标悬停时随机颜色
    function randomTagColor() {
        const colors = ['#58a6ff', '#3fb950', '#d29922', '#bc8cff', '#f85149'];
        const tags = document.querySelectorAll('.tag');

        tags.forEach((tag) => {
            tag.addEventListener('mouseenter', () => {
                const color = colors[Math.floor(Math.random() * colors.length)];
                tag.style.background = color;
                tag.style.borderColor = color;
            });
            tag.addEventListener('mouseleave', () => {
                tag.style.background = '';
                tag.style.borderColor = '';
            });
        });
    }

    // 控制台彩蛋
    function consoleEasterEgg() {
        const styles = [
            'color: #58a6ff',
            'font-size: 14px',
            'font-family: monospace',
            'font-weight: bold',
        ].join(';');

        console.log('%c你好，好奇的开发者 👋', styles);
        console.log(
            '%c如果你在看这些文字，说明你和我一样热爱探索。\n欢迎通过 GitHub 联系我：https://github.com/ukashi',
            'color: #8b949e; font-family: monospace;'
        );
        console.log(
            '%c$ welcome --to ukashi.github.io',
            'color: #3fb950; font-family: monospace; font-weight: bold;'
        );
    }

    // 初始化
    document.addEventListener('DOMContentLoaded', () => {
        fadeInOnScroll();
        randomTagColor();
        consoleEasterEgg();
    });
})();
