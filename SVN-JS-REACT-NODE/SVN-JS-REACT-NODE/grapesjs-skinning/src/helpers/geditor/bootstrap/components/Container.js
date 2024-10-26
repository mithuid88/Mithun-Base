
export const ContainerBlock = (bm, label) => {
    bm.add('container', {
        label: `
        <svg aria-hidden="true" width="24" height="50" focusable="false" data-prefix="fas" data-icon="window-maximize" class="svg-inline--fa fa-window-maximize fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-16 160H64v-84c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12v84z"></path></svg>
            <div>${label}</div>
        `,
        category: 'Layout',
        content: {
            type: 'container',
            classes: ['container']
        }
    });
};

export default (domc) => {
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    domc.addType('container', {
        model: {
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                'custom-name': 'Container',
                tagName: 'div',
                droppable: true,
                traits: [
                    {
                        type: 'class_select',
                        options: [
                            {value: 'container', name: 'Fixed'},
                            {value: 'container-fluid', name: 'Fluid'}
                        ],
                        label: 'Width'
                    }
                ].concat(defaultModel.prototype.defaults.traits)
            })
        },
        isComponent(el) {
            if(el && el.classList && (el.classList.contains('container') || el.classList.contains('container-fluid'))) {
                return {type: 'container'};
            }
        },
        view: defaultView
    });
}