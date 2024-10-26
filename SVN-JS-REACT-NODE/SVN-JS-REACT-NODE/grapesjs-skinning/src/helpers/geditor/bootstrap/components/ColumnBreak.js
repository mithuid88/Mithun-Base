
export const ColumnBreakBlock = (bm, label) => {
    bm.add('column_break', {
        label: `
        <svg aria-hidden="true" width="24" height="50" focusable="false" data-prefix="fas" data-icon="equals" class="svg-inline--fa fa-equals fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 304H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32zm0-192H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
            <div>${label}</div>
        `,
        category: 'Layout',
        content: {
            type: 'column_break'
        }
    });
};

export default (domc) => {
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    domc.addType('column_break', {
        model: {
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                'custom-name': 'Column Break',
                tagName: 'div',
                classes: ['w-100']
            })
        },
        isComponent(el) {
            if(el && el.classList && el.classList.contains('w-100')) { // also check if parent is `.row`
                return {type: 'column_break'};
            }
        },
        view: defaultView
    });
}
