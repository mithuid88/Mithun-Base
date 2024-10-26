import _s from "underscore.string";
import contexts from '../bootstrap-contexts';

export const BadgeBlock = (bm, label) => {
    bm.add('badge', {
        label: `
        <svg aria-hidden="true" width="24" height="50" focusable="false" data-prefix="fas" data-icon="certificate" class="svg-inline--fa fa-certificate fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z"></path></svg>
            <div>${label}</div>
        `,
        category: 'Components',
        content: {
            type: 'badge',
            content: 'New!'
        }
    });
};

export default (domc) => {
    const textType = domc.getType('text');
    const textModel = textType.model;
    const textView = textType.view;

    domc.addType('badge', {
        model: {
            defaults: Object.assign({}, textModel.prototype.defaults, {
                'custom-name': 'Badge',
                tagName: 'span',
                classes: ['badge'],
                traits: [
                    {
                        type: 'class_select',
                        options: [
                            {value: '', name: 'None'},
                            ... contexts.map(function(v) { return {value: 'badge-'+v, name: _s.capitalize(v)} })
                        ],
                        label: 'Context'
                    },
                    {
                        type: 'class_select',
                        options: [
                            {value: '', name: 'Default'},
                            {value: 'badge-pill', name: 'Pill'},
                        ],
                        label: 'Shape'
                    }
                ].concat(textModel.prototype.defaults.traits)
            })
        },
        isComponent(el) {
            if(el && el.classList && el.classList.contains('badge')) {
                return {type: 'badge'};
            }
        },
        view: textView
    });
}
