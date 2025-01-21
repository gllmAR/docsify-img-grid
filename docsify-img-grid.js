(function () {
    const DEFAULT_COLUMNS = 3;

    function createImageGrid(images, columns = DEFAULT_COLUMNS) {
        const gridContainer = document.createElement('div');
        gridContainer.className = 'img-grid';
        gridContainer.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
            margin: 1rem 0;
        `;

        images.forEach(img => {
            const wrapper = document.createElement('div');
            wrapper.className = 'img-grid-item';
            wrapper.style.cssText = `
                flex: 0 1 calc(${100 / columns}% - 10px);
                min-width: 200px;
            `;
            
            // Check if image is wrapped in an anchor
            const parentAnchor = img.closest('a');
            if (parentAnchor) {
                const anchorClone = parentAnchor.cloneNode(false);
                const imgClone = img.cloneNode(true);
                imgClone.style.cssText = `
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                `;
                anchorClone.appendChild(imgClone);
                wrapper.appendChild(anchorClone);
            } else {
                const clone = img.cloneNode(true);
                clone.style.cssText = `
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                `;
                wrapper.appendChild(clone);
            }
            
            gridContainer.appendChild(wrapper);
        });

        return gridContainer;
    }

    function processImageLists(content) {
        const container = document.createElement('div');
        container.innerHTML = content;

        const lists = container.getElementsByTagName('ul');
        Array.from(lists).forEach(list => {
            const images = Array.from(list.getElementsByTagName('img'));
            
            if (images.length >= 3 && images.length === list.children.length) {
                const columns = list.getAttribute('data-columns') || DEFAULT_COLUMNS;
                const grid = createImageGrid(images, parseInt(columns));
                list.parentNode.replaceChild(grid, list);
            }
        });

        return container.innerHTML;
    }

    window.$docsify = window.$docsify || {};
    window.$docsify.plugins = (window.$docsify.plugins || []).concat(hook => {
        hook.afterEach((html, next) => {
            next(processImageLists(html));
        });
    });
})();