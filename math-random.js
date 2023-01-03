class MathRandom extends HTMLElement {
	
	static {
		
		this.tagName = 'math-random',
		
		this.int = 0,
		this.max = 1,
		this.min = 0,
		this.number = 1,
		this.prefix = 'dice',
		
		this.__observedAttributes = [ 'int', 'max', 'min', 'number', 'prefix' ];
		
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
		
		const { ceil, floor, random } = Math, { exclusive, int, number, prefix, style } = this,
				l = number > int ? number : int, ex = exclusive ? 0 : 1, pi = prefix + 'i-';
		let i, v,vi,range,rangeI, { max, min } = this, mini, maxi;
		
		i = -1, min > max && (max = min), int && (mini = ceil(min), maxi = floor(max)),
		range = max - min, rangeI = maxi - mini + ex;
		while (++i < l)	i < number && style.setProperty(prefix + i, (v = random()) * range + min),
								i < int && style.setProperty(pi + i, floor(v * rangeI + mini)),
								i ||
									(
										number && style.setProperty(prefix.slice(0,-1), style.getPropertyValue(prefix + i)),
										int && style.setProperty(pi.slice(0,-1), style.getPropertyValue(pi + i))
									);
		
	}
	
	get exclusive() {
		
		return this.hasAttribute('exclusive');
		
	}
	set exclusive(v) {
		
		this.toggleAttribute('exclusive', !!v);
		
	}
	get int() {
		
		let v0;
		const v =	(v0 = this.getAttribute('int')) === null ? MathRandom.int :
							v0 === '' ? this.hasAttribute('number') ? this.number : 1 : parseInt(v0);
		
		return Number.isNaN(v) || v < 0 ? MathRandom.int : v;
		
	}
	set int(v) {
		
		this.setAttribute('int', v);
		
	}
	get max() {
		
		const v = this.hasAttribute('max') ? +this.getAttribute('max') : MathRandom.max;
		
		return Number.isNaN(v) ? MathRandom.max : v;
		
	}
	set max(v) {
		
		this.setAttribute('max', v);
		
	}
	get min() {
		
		const v = this.hasAttribute('min') ? +this.getAttribute('min') : MathRandom.min;
		
		return Number.isNaN(v) ? MathRandom.min : v;
		
	}
	set min(v) {
		
		this.setAttribute('min', v);
		
	}
	get number() {
		
		const v = parseInt(this.getAttribute('number'));
		
		return Number.isNaN(v) || v < 0 ? MathRandom.number : v;
		
	}
	set number(v) {
		
		this.setAttribute('number', v);
		
	}
	get prefix() {
		
		return '--' + ((this.hasAttribute('prefix') ? this.getAttribute('prefix') : this.id) || MathRandom.prefix) + '-';
		
	}
	set prefix(v) {
		
		this[(typeof v === 'boolean' ? 'toggle' : 'set') + 'Attribute']('prefix', v);
		
	}
	
}
addEventListener('DOMContentLoaded', () => customElements.define(MathRandom.tagName, MathRandom), { once: true });