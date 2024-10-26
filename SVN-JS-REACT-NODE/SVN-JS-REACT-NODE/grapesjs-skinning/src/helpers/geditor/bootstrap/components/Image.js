
export const ImageBlock = (bm, label) => {
    bm.add('bs-image', {
        label: `
        <svg aria-hidden="true" width="24" height="50" focusable="false" data-prefix="fas" data-icon="image" class="svg-inline--fa fa-image fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"></path></svg>
            <div>${label}</div>
        `,
        category: 'Media',
        content: {
            type: 'bs-image'
        }
    });
};

export default (domComponent) => {
    const img_src_default = 'https://dummyimage.com/800x500/999/222';
    const imageType = domComponent.getType('image');
    const model = imageType.model;
    const view = imageType.view;
    const type = 'bs-image';

    domComponent.addType(type, {
        model: model.extend({
            defaults: Object.assign({}, model.prototype.defaults, {
                'custom-name': 'Image',
                tagName: 'img',
                resizable: 1,
                attributes: {
                    src: img_src_default,
                },
                classes: ['img-fluid'],
                traits: [
                    {
                        type: 'text',
                        label: 'Source (URL)',
                        name: 'src'
                    },
                    {
                        type: 'text',
                        label: 'Alternate text',
                        name: 'alt'
                    }
                ].concat(model.prototype.defaults.traits)
            })
        }, {
            isComponent: function(el) {
                if(el && el.tagName === 'IMG') {
                    return {type: type};
                }
            }
        }),
        view: view
    });
}
