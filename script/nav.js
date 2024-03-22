// Nav component

class Nav extends HTMLElement {

  // The browser calls this method when the element is
  // added to the DOM.

  connectedCallback() {

     this.innerHTML = `
    <div id="nav">
      <a href="/index.html">Tillbaka</a>
     </div>
    `
  };
};

customElements.define('nav-component', Nav);

// Footer component

class Footer extends HTMLElement {
  
  // The browser calls this method when the element is
  // added to the DOM.

  connectedCallback() {
 
     this.innerHTML = `
    <div id="footer">
      <p>Hello footer</p>
      <p>Next line</p>
    </div>
    `
  };
};

customElements.define('footer-component', Footer);