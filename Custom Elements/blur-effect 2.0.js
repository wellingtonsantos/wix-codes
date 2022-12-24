const createElement = (color, border, borderLocate, borderColor, borderRadius, blur) => {

    let Element = document.createElement('div');
    Element.style = `background: ${color};border${borderLocate != ' ' ? '-'+borderLocate+':' : ':'} ${border}px solid ${borderColor};border-radius: ${borderRadius}px;backdrop-filter: blur(${blur}px);-webkit-backdrop-filter: blur(${blur}px);position:absolute;top:0;bottom:0;left:0;right:0;`

    return Element;

};

class WixDefaultCustomElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(createElement(
            this.getAttribute('color'),
            this.getAttribute('border'),
            this.getAttribute('borderLocate'),
            this.getAttribute('borderColor'),
            this.getAttribute('borderRadius'),
            this.getAttribute('blur')
        ));
    }
}

customElements.define('blur-effect', WixDefaultCustomElement);