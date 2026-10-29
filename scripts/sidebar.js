document.addEventListener(
    'DOMContentLoaded', () => {
        const submenuRows = document.querySelectorAll('.submenu-row');

        submenuRows.forEach(
            row => {
                row.addEventListener(
                    'click', (e) => {
                        const parentItem = row.closest('.has-nested');
                        if (e.target.tagName !== 'A') {
                            e.preventDefault();
                            parentItem.classList.toggle('open');
                        } else {parentItem.classList.toggle('open');}
                    }
                );
            }
        );
    }
);