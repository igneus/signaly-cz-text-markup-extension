'use strict';

document
    .querySelectorAll('.comments .one__comment p')
    .forEach(node => {
        console.log(node);
        node.innerHTML = node.innerHTML.replace(
                /&lt;([A-Fa-f0-9]{6})&gt;/,
            (match, group1) => {
                const colour = group1.toLowerCase();
                let title = null;
                if ('ff00ff' == colour) {
                    title = 'tohle je vážně';
                }
                if ('800080' == colour) {
                    title = 'tohle je polovážně/položertem';
                }
                return '<span style="color: #' + group1 + ';"' +
                    (title ? (' title="' + title + '"') : '') +
                    '>';
            }
        );
        node.innerHTML = node.innerHTML.replace(
                /&lt;\/([A-Fa-f0-9]{6})&gt;/,
            '</span>'
        );
    });
