/*
known issues:
- BS dropdown JS isn't attached if you remove the existing toggle and add a new one
*/

import _ from "underscore";

export const LinkBlock = (bm, label) => {
    bm.add('link', {
        label: `
        <svg aria-hidden="true" width="24" height="50" focusable="false" data-prefix="fas" data-icon="link" class="svg-inline--fa fa-link fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"></path></svg>
            <div>${label}</div>
        `,
        category: 'Basic',
        content: {
            type: 'link',
            content: 'Link text'
        }
    });
};

export default (editor) => {
    const comps = editor.DomComponents;
    const textType = comps.getType('text');
    const textModel = textType.model;

    const linkType = comps.getType('link');
    const linkView = linkType.view;

    comps.addType('link', {
        model: {
            defaults: Object.assign({}, textModel.prototype.defaults, {
                'custom-name': 'Link',
                tagName: 'a',
                droppable: true,
                editable: true,
                traits: [
                    {
                        type: 'text',
                        label: 'Href',
                        name: 'href',
                        placeholder: 'https://www.grapesjs.com'
                    },
                    {
                        type: 'select',
                        options: [
                            {value: '', name: 'This window'},
                            {value: '_blank', name: 'New window'}
                        ],
                        label: 'Target',
                        name: 'target',
                    },
                    {
                        type: 'select',
                        options: [
                            {value: '', name: 'None'},
                            {value: 'button', name: 'Self'},
                            {value: 'collapse', name: 'Collapse'},
                            {value: 'dropdown', name: 'Dropdown'}
                        ],
                        label: 'Toggles',
                        name: 'data-toggle',
                        changeProp: 1
                    }
                ].concat(textModel.prototype.defaults.traits)
            }),
            init2() {
                //textModel.prototype.init.call(this);
                this.listenTo(this, 'change:data-toggle', this.setupToggle);
                this.listenTo(this, 'change:attributes', this.setupToggle); // for when href changes
            },
            setupToggle(a, b, options = {}) { // TODO this should be in the dropdown comp and not the link comp
                if (options.ignore === true && options.force !== true) {
                    return;
                }
                console.log('setup toggle');
                const attrs = this.getAttributes();
                const href = attrs.href;
                // old attributes are not removed from DOM even if deleted...
                delete attrs['data-toggle'];
                delete attrs['aria-expanded'];
                delete attrs['aria-controls'];
                delete attrs['aria-haspopup'];
                if (href && href.length > 0 && href.match(/^#/)) {
                    console.log('link has href');
                    // find the el where id == link href
                    const els = this.em.get('Editor').DomComponents.getWrapper().find(href);
                    if (els.length > 0) {
                        console.log('referenced el found');
                        var el = els[0]; // should only be one el with this ID
                        const el_attrs = el.getAttributes();
                        //delete el_attrs['aria-labelledby'];
                        const el_classes = el_attrs.class;
                        if (el_classes) {
                            console.log('el has classes');
                            const el_classes_list = el_classes.split(' ');
                            const intersection = _.intersection(['collapse', 'dropdown-menu'], el_classes_list);
                            if (intersection.length) {
                                console.log('link data-toggle matches el class');
                                switch (intersection[0]) {
                                    case 'collapse':
                                        attrs['data-toggle'] = 'collapse';
                                        break;
                                }
                                attrs['aria-expanded'] = el_classes_list.includes('show');
                                if (intersection[0] === 'collapse') {
                                    attrs['aria-controls'] = href.substring(1);
                                }
                            }
                        }
                    }
                }
                this.set('attributes', attrs, {ignore: true});
            },
            classesChanged(e) {
                console.log('classes changed');
                if (this.attributes.type === 'link') {
                    if (this.attributes.classes.filter(function (klass) {
                        return klass.id === 'btn'
                    }).length > 0) {
                        this.changeType('button');
                    }
                }
            }
        }, 
        isComponent(el) {
            if (el && el.tagName && el.tagName === 'A') {
                return {type: 'link'};
            }
        },
        view: linkView
    });

}
