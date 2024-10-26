import _s from "underscore.string";
import contexts from '../bootstrap-contexts';

export const AlertBlock = (bm, label) => {
    bm.add('alert', {
        label: `
        <svg aria-hidden="true" width="24" height="50" focusable="false" data-prefix="fas" data-icon="exclamation-triangle" class="svg-inline--fa fa-exclamation-triangle fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>
            <div>${label}</div>
        `,
        category: 'Components',
        content: {
            type: 'alert',
            content: 'This is an alert—check it out!'
        }
    });
};

export default (domc) => {
    const textType = domc.getType('text');
    const textModel = textType.model;
    const textView = textType.view;

    domc.addType('alert', {
        model: {
            defaults: Object.assign({}, textModel.prototype.defaults, {
                'custom-name': 'Alert',
                tagName: 'div',
                classes: ['alert'],
                traits: [
                    {
                        type: 'class_select',
                        options: [
                            {value: '', name: 'None'},
                            ... contexts.map(function(v) { return {value: 'alert-'+v, name: _s.capitalize(v)} })
                        ],
                        label: 'Context'
                    }
                ].concat(textModel.prototype.defaults.traits)
            })
        },
        isComponent(el) {
            if(el && el.classList && el.classList.contains('alert')) {
                return {type: 'alert'};
            }
        },
        view: textView
    });
}
