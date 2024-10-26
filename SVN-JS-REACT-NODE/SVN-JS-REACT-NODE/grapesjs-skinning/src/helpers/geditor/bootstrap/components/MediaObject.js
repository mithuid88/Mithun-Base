
export const MediaObjectBlock = (bm, label) => {
    bm.add('media_object', {
        label: `
        <svg aria-hidden="true" width="24" height="50" focusable="false" data-prefix="fas" data-icon="columns" class="svg-inline--fa fa-columns fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z"></path></svg>
            <div>${label}</div>
        `,
        category: 'Layout',
        content: `<div class="media">
                 <img class="mr-3" src="">
                 <div class="media-body">
                 <h5>Media heading</h5>
                 <div>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</div>
                 </div>
                 </div>`
    });
};

export default (domc) => {
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    domc.addType('media_object', {
        model: {
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                'custom-name': 'Media Object',
                tagName: 'div',
                classes: ['media']
            })
        },
        isComponent(el) {
            if(el && el.classList && el.classList.contains('media')) {
                return {type: 'media'};
            }
        },
        view: defaultView
    });

    domc.addType('media_body', {
        model: {
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                'custom-name': 'Media Body',
                tagName: 'div',
                classes: ['media-body']
            })
        },
        isComponent(el) {
            if(el && el.classList && el.classList.contains('media-body')) {
                return {type: 'media_body'};
            }
        },
        view: defaultView
    });
}
