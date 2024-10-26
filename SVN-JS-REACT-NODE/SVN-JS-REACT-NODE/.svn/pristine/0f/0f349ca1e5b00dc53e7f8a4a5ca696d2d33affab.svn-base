
export const ParagraphBlock = (bm, label) => {
    bm.add('paragraph', {
        label: `
        <svg aria-hidden="true" width="24" height="50" focusable="false" data-prefix="fas" data-icon="paragraph" class="svg-inline--fa fa-paragraph fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 48v32a16 16 0 0 1-16 16h-48v368a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V96h-32v368a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V352h-32a160 160 0 0 1 0-320h240a16 16 0 0 1 16 16z"></path></svg>
            <div>${label}</div>
        `,
        category: 'Typography',
        content: {
            type: 'paragraph',
            content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.'
        }
    });
};

export default (domc) => {
    const textType = domc.getType('text');
    const textModel = textType.model;
    const textView = textType.view;
    
    domc.addType('paragraph', {
        isComponent: (el) => {
            if(el && el.tagName && el.tagName === 'P') {
                return {type: 'paragraph'};
            }
        },

        model:  {
            defaults: Object.assign({}, textModel.prototype.defaults, {
                tagName: "p",
                "custom-name": "Paragraph",
                traits: [
                    {
                        type: 'class_select',
                        options: [
                            {value: '', name: 'No'},
                            {value: 'lead', name: 'Yes'}
                        ],
                        label: 'Lead?'
                    }
                ].concat(textModel.prototype.defaults.traits)
            })
        },
        view: textView
    });

    /*domc.addType('paragraph1', {
        model: textModel.extend({
            defaults: Object.assign({}, textModel.prototype.defaults, {
                'custom-name': 'Paragraph',
                tagName: 'p',
                traits: [
                    {
                        type: 'class_select',
                        options: [
                            {value: '', name: 'No'},
                            {value: 'lead', name: 'Yes'}
                        ],
                        label: 'Lead?'
                    }
                ].concat(textModel.prototype.defaults.traits)
            })
        }, {
            isComponent(el) {
                if(el && el.tagName && el.tagName === 'P') {
                    return {type: 'paragraph'};
                }
            }
        }),
        view: textView
    });*/
    
}
