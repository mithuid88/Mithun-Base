import sizes from '../bootstrap-btn-sizes';

export const ButtonGroupBlock = (bm, label) => {
    bm.add('button_group', {
        label: `
        <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z" fill-rule="nonzero"></path>
            <rect class="gjs-block-svg-path" x="4" y="11.5" width="16" height="1"></rect>
        </svg>
            <div>${label}</div>
        `,
        category: 'Bootstrap Forms',
        content: {
            type: 'button_group'
        }
    });
};

export default (dc) => {

    const defaultType = dc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    dc.addType('button_group', {
        model: {
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                'custom-name': 'Button Group',
                tagName: 'div',
                classes: ['btn-group'],
                droppable: '.btn',
                attributes: {
                    role: 'group'
                },
                traits: [
                    {
                        type: 'class_select',
                        options: [
                            {value: '', name: 'Default'},
                            ... Object.keys(sizes).map(function(k) { return {value: 'btn-group-'+k, name: sizes[k]} })
                        ],
                        label: 'Size'
                    },
                    {
                        type: 'class_select',
                        options: [
                            {value: '', name: 'Horizontal'},
                            {value: 'btn-group-vertical', name: 'Vertical'},
                        ],
                        label: 'Size'
                    },
                    {
                        type: 'Text',
                        label: 'ARIA Label',
                        name: 'aria-label',
                        placeholder: 'A group of buttons'
                    }
                ].concat(defaultModel.prototype.defaults.traits)
            })
        },
        isComponent(el) {
            if(el && el.classList && el.classList.contains('btn-group')) {
                return {type: 'button_group'};
            }
        },
        view: defaultView
    });
}