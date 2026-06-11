/* scripts/timeline.js */

document.addEventListener('DOMContentLoaded', () => {
    
    /* СЕЛЕКТАРЯ ЕЛЕМЕНТЕЛОР ДИН ТИМЕЛАЙН */
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    /* ОПЦИУНИ ПЕНТРУ ИНТЕРСЕЦТИОН ОВСЕРВЕР */
    /* Trigger-ul se va declansa cand 20% din card este vizibil pe ecran */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    /* ЛОДЖИКА ДЕ АНИМАЦИЕ ЛА СКРОЛЛ */
    const timelineObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                /* Cand cardul intra pe ecran, adaugam o clasa activa */
                entry.target.classList.add('item-active');
                
                /* Odata animat, nu mai avem nevoie sa-l urmarim */
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    /* АПЛИКАРЯ СТИЛУРИЛОР ИНИЦИАЛЕ ШИ ПОРНИРЯ ОВСЕРВЕРУЛУЙ */
    timelineItems.forEach((item, index) => {
        /* Adaugam tranzitii direct din JS pentru a pastra CSS-ul curat */
        const content = item.querySelector('.timeline-content');
        const dot = item.querySelector('.timeline-dot');
        
        if (content && dot) {
            /* Starea initiala: invizibil si usor deplasat in jos */
            content.style.opacity = '0';
            content.style.transform = 'translateY(20px)';
            content.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            
            /* Pornim urmarirea pentru fiecare element */
            timelineObserver.observe(item);
        }
    });

    /* ФУНКТИА КАРЕ АКТИВЕАЗА ЕЛЕМЕНТЕЛЕ (Aparitia efectiva) */
    /* Folosim un stil injectat dinamic cand clasa item-active este adaugata */
    const style = document.createElement('style');
    style.innerHTML = `
        .timeline-item.item-active .timeline-content {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        .timeline-item.item-active .timeline-dot {
            border-color: var(--accent-color) !important;
            background-color: var(--accent-color) !important;
            box-shadow: 0 0 12px var(--accent-color);
        }
    `;
    document.head.appendChild(style);
});