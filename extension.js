'use strict';

const renderCommentsMarkup = () => document
    .querySelectorAll('.comments .one__comment p')
    .forEach(node => {
        node.innerHTML =
            node.innerHTML
            .replace(/&lt;([A-Fa-f0-9]{6})&gt;/g, (match, group1) => {
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
            })
            .replace(/&lt;\/([A-Fa-f0-9]{6})&gt;/g, '</span>')
            .replace(/&lt;img:(.+?)&gt;/g, (match, group1) => {
                return '<img src="'+group1+'">'
            })
        ;
    });

renderCommentsMarkup();
// TODO this is really dirty - it would be much better to somehow listen for the new comments being added to the page
setInterval(renderCommentsMarkup, 4000);
