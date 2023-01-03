class MathRandom extends HTMLElement {
	
	static {
		
		this.tagName = 'math-random',
		
		this.number = 1,
		this.prefix = 'dice',
		
		this.__observedAttributes = [ 'number', 'prefix' ];
		
	}
	static get observedAttributes() {
		
		return this.__observedAttributes;
		
	}
	
	constructor() {
		
		super();
		
	}
	async connectedCallback() {
		
		this.dice();
		
	}
	async attributeChangedCallback() {
		
		this.isConnected && this.dice();
		
	}
	
	dice() {
		
		const { random } = Math, { number, prefix, style } = this;
		let i;
		
		if (number === 1) {
			
			style.setProperty(prefix.slice(0,-1), i = random()), style.setProperty(prefix + '0', i);
			
		} else {
			
			i = -1;
			while (++i < number) style.setProperty(prefix + i, random());
			
		}
		
	}
	
	get number() {
		
		const v = parseInt(this.getAttribute('number'));
		
		return Number.isNaN(v) || v < 0 ? MathRandom.number : v;
		
	}
	set number(v) {
		
		return this.setAttribute('number', v);
		
	}
	get prefix() {
		
		return '--' + ((this.hasAttribute('prefix') ? this.getAttribute('prefix') : this.id) || MathRandom.prefix) + '-';
		
	}
	set prefix(v) {
		
		return this[(typeof v === 'boolean' ? 'toggle' : 'set') + 'Attribute']('prefix', v);
		
	}
	
}
addEventListener('DOMContentLoaded', () => customElements.define(MathRandom.tagName, MathRandom), { once: true });