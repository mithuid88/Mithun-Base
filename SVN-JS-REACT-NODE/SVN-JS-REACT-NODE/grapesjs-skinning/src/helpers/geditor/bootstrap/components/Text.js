
export const TextBlock = (bm, label) => {
    bm.add('text', {
        label: `
        <svg aria-hidden="true" width="24" height="50" focusable="false" data-prefix="fas" data-icon="font" class="svg-inline--fa fa-font fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 416h-23.41L277.88 53.69A32 32 0 0 0 247.58 32h-47.16a32 32 0 0 0-30.3 21.69L39.41 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-19.58l23.3-64h152.56l23.3 64H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM176.85 272L224 142.51 271.15 272z"></path></svg>
            <div>${label}</div>
        `,
        category: 'Typography',
        content: {
            type:'text',
            content: 'Insert your text here'
        }
    });
};

export default (domc) => {
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const textType = domc.getType('text');
    const textView = textType.view;

    domc.addType('text', {
        model: {
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                'custom-name': 'Text',
                tagName: 'div',
                droppable: true,
                editable: true
            })
        },
            /*isComponent(el) {
              if(el && el.dataset && el.dataset.bsText) {
                return {type: 'text'};
              }
            }*/
        view: textView
    });
}
