class MathRandom extends HTMLElement {
	
	static {
		
		this.tagName = 'math-random',
		
		this.gt = 1,
		this.gv = null,
		this.ls = 0,
		this.lv = null,
		this.max = 1,
		this.min = 0,
		this.number = 1,
		this.prefix = 'dice',
		
		this.__observedAttributes = [ 'gt', 'gv', 'int', 'lt', 'lv', 'max', 'min', 'number', 'prefix' ];
		
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
		
		const { ceil, floor, random } = Math,
				{ exclusive, gt, gv, int, ls, lv, number, prefix, style } = this,
				ex = int && !exclusive;
		let i,v, range, { max, min } = this;
		
		i = -1, min > max && (max = min), int && (min = ceil(min), max = floor(max)), range = max - min + ex;
		while (++i < number)	v = random() * range + min,
									int && (v = floor(v)),
									ls === null ?
										gt === null ||
											(gt <= v ? gv === null || (v = gv) : lv === null || (v = lv)) :
										v <= ls ?
											lv === null || (v = lv) :
											gv === null || (gt === null ? (v = gv) : gt <= v && (v = gv)),
									style.setProperty(prefix + i, v),
									i || style.setProperty(prefix.slice(0,-1), v);
		
	}
	
	get exclusive() {
		
		return this.hasAttribute('exclusive');
		
	}
	set exclusive(v) {
		
		this.toggleAttribute('exclusive', !!v);
		
	}
	get gt() {
		
		const v = this.hasAttribute('gt') ? +this.getAttribute('gt') : null, { ls } = this;
		
		return v === null ? v : Math.max(Number.isNaN(v) ? MathRandom.gt : v, ls);
		
	}
	set gt(v) {
		
		this.setAttribute('gt', v);
		
	}
	get gv() {
		
		const v = this.hasAttribute('gv') ? +this.getAttribute('gv') : null;
		
		return v === '' || v === null ? null : Number.isNaN(v) ? MathRandom.gv : v;
		
	}
	set gv(v) {
		
		this.setAttribute('gv', v);
		
	}
	get int() {
		
		return this.hasAttribute('int');
		
	}
	set int(v) {
		
		this.toggleAttribute('int', !!v);
		
	}
	get ls() {
		
		const v = this.hasAttribute('ls') ? +this.getAttribute('ls') : null;
		
		return v !== null && Number.isNaN(v) ? MathRandom.ls : v;
		
	}
	set ls(v) {
		
		this.setAttribute('ls', v);
		
	}
	get lv() {
		
		const v = this.hasAttribute('lv') ? +this.getAttribute('lv') : null;
		
		return v === null || v === '' ? null : Number.isNaN(v) ? MathRandom.lv : v;
		
	}
	set lv(v) {
		
		this.setAttribute('lv', v);
		
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