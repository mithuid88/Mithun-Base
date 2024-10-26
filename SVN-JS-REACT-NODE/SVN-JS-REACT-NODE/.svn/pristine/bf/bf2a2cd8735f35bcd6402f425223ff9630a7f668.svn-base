import _s from "underscore.string";
import contexts from '../bootstrap-contexts';
import sizes from '../bootstrap-btn-sizes';

export const ButtonBlock = (bm, label) => {
    bm.add('bootstrap_button', {
        label: `<svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z" fill-rule="nonzero"></path>
        <rect class="gjs-block-svg-path" x="4" y="11.5" width="16" height="1"></rect>
    </svg><div>${label}</div>`,
        category: 'Bootstrap Forms',
        content: '<button class="btn btn-primary">Send</button>',
    });
};

export default (dc) => {
    const defaultType = dc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    dc.addType('button', {
        model: {
            defaults: {
                ...defaultModel.prototype.defaults,
                'custom-name': 'Button',
                droppable: false,
                attributes: {
                    role: 'button'
                },
                classes: ['btn'],
                traits: [
                    {
                        type: 'content',
                        label: 'Text',
                    },
                    {
                        label: 'Type',
                        type: 'select',
                        name: 'type',
                        options: [
                            {value: 'submit', name: 'Submit'},
                            {value: 'reset', name: 'Reset'},
                            {value: 'button', name: 'Button'},
                        ]
                    },
                    {
                        type: 'class_select',
                        options: [
                            {value: '', name: 'None'},
                            ... contexts.map((v) => { return {value: `btn-${v}`, name: _s.capitalize(v)} }),
                            ... contexts.map((v) => { return {value: `btn-outline-${v}`, name: _s.capitalize(v) + ' (Outline)'} })
                        ],
                        label: 'Context'
                    },
                    {
                        type: 'class_select',
                        options: [
                            {value: '', name: 'Default'},
                            ... Object.keys(sizes).map((k) => { return {value: `btn-${k}`, name: sizes[k]} })
                        ],
                        label: 'Size'
                    },
                    {
                        type: 'class_select',
                        options: [
                            {value: '', name: 'Inline'},
                            {value: 'btn-block', name: 'Block'}
                        ],
                        label: 'Width'
                    }
                ].concat(defaultModel.prototype.defaults.traits)
            },
            afterChange(e) {
                if (this.attributes.type === 'button') {
                    if (this.attributes.classes.filter((klass) => { return klass.id === 'btn' }).length === 0) {
                        this.changeType('link');
                    }
                }
            }
        },
        isComponent(el) {
            if(el && el.classList && el.classList.contains('btn')) {
                return {type: 'button'};
            }
        },
        view: defaultView.extend({
            events: {
                'click': 'handleClick'
            },

            init() {
                this.listenTo(this.model, 'change:content', this.updateContent);
            },

            updateContent() {
                this.el.innerHTML = this.model.get('content')
            },

            handleClick(e) {
                e.preventDefault();
            },
        }),
    });
}
