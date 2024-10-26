export const ButtonToolbarBlock = (bm, label) => {
    bm.add('button_toolbar', {
        label: `
        <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z" fill-rule="nonzero"></path>
            <rect class="gjs-block-svg-path" x="4" y="11.5" width="16" height="1"></rect>
        </svg>
            <div>${label}</div>
        `,
        category: 'Bootstrap Forms',
        content: {
            type: 'button_toolbar'
        }
    });
};

export default (dc) => {

    const defaultType = dc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    dc.addType('button_toolbar', {
        model: {
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                'custom-name': 'Button Toolbar',
                tagName: 'div',
                classes: ['btn-toolbar'],
                droppable: '.btn-group',
                attributes: {
                    role: 'toolbar'
                },
                traits: [
                    {
                        type: 'Text',
                        label: 'ARIA Label',
                        name: 'aria-label',
                        placeholder: 'A toolbar of button groups'
                    }
                ].concat(defaultModel.prototype.defaults.traits)
            })
        },
        isComponent(el) {
            if(el && el.classList && el.classList.contains('btn-toolbar')) {
                return {type: 'button_toolbar'};
            }
        },
        view: defaultView
    });
}
