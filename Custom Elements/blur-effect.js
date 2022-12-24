const createStyle = (blur, opacity, color, border, image) => {
  
  const styleElement = document.createElement('style');
  styleElement.innerHTML = `
    .overlay:before {
      background-image: url(${ image });
      background-repeat: no-repeat;
      background-size: 100vw;
    }

    .overlay {
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
      z-index: 0;
      background-color: ${ color };
      border-radius: ${ border }px;
    }

    .overlay:before {
      content: '';
      filter: blur(${ blur }px);
      position: absolute;
      height: 100%;
      width: 100%;
      opacity: ${ opacity };
      z-index: -1;
      transform: scale(1.08);
    }
  `;
  return styleElement;
};

let createContainer = () => {

  const container = document.createElement('div');
  container.id = 'blur-effect';
  container.className = 'overlay';

  return container;

};

class BlurEffect extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(createStyle( this.getAttribute('blur'), this.getAttribute('opacity'), this.getAttribute('bgColor'), this.getAttribute('border'), this.getAttribute('image') ));
    this.appendChild(createContainer());
  }
}
customElements.define('blur-effect', BlurEffect);

// INSTRUÇÕES

// For the element to work, you must have a paid plan with a domain installed.
// The tag name of the custom element must be: blur-effect
// You must also add the following attributes and values ​​to the custom element:
// blur: 8
// opacity: 0.7
// bgColor: background color that goes with the blended blur, whichever you prefer, we don't use video #d3ffd5
// border: 20, element border adjustment
// image: image that will be used for the effect to be applied, use the image that uses the background

// INSTRUCTIONS

// Para que o elemento funcione, você deve ter um plano pago com dominio instalado.
// O nome da tag do elemento personalizado deve ser: blur-effect
// Deve também adicionar ao elemento personalizado o seguintes atributos e valores:
// blur: 8
// opacity: 0.7
// bgColor: cor do fundo que vai misturar com o desfoque, a que preferir, no vídeo usamos #d3ffd5
// border: 20, curvatura da borda do elemento
// image: image que usara para o efeito ser aplicado, use a imagem que usou de fundo