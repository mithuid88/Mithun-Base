
export const HeaderBlock = (bm, label) => {
    bm.add('header', {
        label: `
        <svg aria-hidden="true" width="24" height="50" focusable="false" data-prefix="fas" data-icon="heading" class="svg-inline--fa fa-heading fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M448 96v320h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H320a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V288H160v128h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V96H32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32v128h192V96h-32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z"></path></svg>
            <div>${label}</div>
        `,
        category: 'Typography',
        content: {
            type: 'header',
            content: 'Bootstrap heading'
        }
    });
};

export default (domc) => {
    const textType = domc.getType('text');
    const textModel = textType.model;
    const textView = textType.view;

    domc.addType('header', {
        model: {
            defaults: Object.assign({}, textModel.prototype.defaults, {
                'custom-name': 'Header',
                tagName: 'h1',
                traits: [
                    {
                        type: 'select',
                        options: [
                            {value: 'h1', name: 'One (largest)'},
                            {value: 'h2', name: 'Two'},
                            {value: 'h3', name: 'Three'},
                            {value: 'h4', name: 'Four'},
                            {value: 'h5', name: 'Five'},
                            {value: 'h6', name: 'Six (smallest)'},
                        ],
                        label: 'Size',
                        name: 'tagName',
                        changeProp: 1
                    },
                    {
                        type: 'class_select',
                        options: [
                            {value: '', name: 'None'},
                            {value: 'display-1', name: 'One (largest)'},
                            {value: 'display-2', name: 'Two '},
                            {value: 'display-3', name: 'Three '},
                            {value: 'display-4', name: 'Four (smallest)'}
                        ],
                        label: 'Display Heading'
                    }
                ].concat(textModel.prototype.defaults.traits)
            }),

        },
        isComponent(el) {
            if(el && ['H1','H2','H3','H4','H5','H6'].includes(el.tagName)) {
                return {type: 'header'};
            }
        },
        view: textView
    });
}
