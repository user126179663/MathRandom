class MathRandom extends HTMLElement {
	
	static {
		
		this.tagName = 'math-random',
		
		this.number = 1,
		this.prefix = '--dice-',
		
		this.readyHandler = rs => window.addEventListener('DOMContentLoaded', rs, this.readyOption),
		this.readyOption = { once: true },
		
		this.attributeFilter = [ 'number', 'prefix' ],
		this.childAttributeFilter = [ 'data-dice-disabled', 'data-dice-number', 'data-dice-prefix' ],
		this.mutationObserverAttributeFilter = [ ...this.attributeFilter, ...this.childAttributeFilter ],
		this.mutationObserverInit = {
			attributeFilter: this.mutationObserverAttributeFilter,
			childList: true,
			subtree: true
		},
		
		this.__observedAttributes = [ 'number', 'prefix' ];
		
	}
	//static get observedAttributes() {
	//	
	//	return this.__observedAttributes;
	//	
	//}
	
	static dice(number, prefix) {
		
		const { random } = Math,
				{ dataset, style } = this, { diceNumber = number, dicePrefix } = dataset, values = [];
		let i,l;
		
		i = -1, l = diceNumber === number ? number : Number.isNaN(l = parseInt(diceNumber)) || l < 0 ? number : l,
		dicePrefix && (prefix = '--' + dicePrefix + '-');
		while (++i < l) style.setProperty(prefix + i, values[i] = random());
		
		return values;
		
	}
	
	static mutated(mrs) {
		
		const { tagName } = MathRandom, l = mrs.length;
		let i,i0,l0, mr,nodes,node;
		
		i = -1;
		while (++i < l) {
			
			switch ((mr = mrs[i]).type) {
				
				case 'attributes':
				(
					(mr.target === this && MathRandom.attributeFilter.indexOf(mr.attributeName) !== -1) ||
					(
						mr.target.closest(tagName) === this &&
						MathRandom.childAttributeFilter.indexOf(mr.attributeName) !== -1
					)
				) && (i = l);
				break;
				
				case 'childList':
				if (l0 = (nodes = mr.addedNodes).length) {
					i0 = -1;
					while (
						++i0 < l0 &&
						(
							!((node = nodes[i0]) instanceof Element) ||
							'data-dice-disabled' in node.dataset ||
							node.closest(tagName) !== this
						)
					);
					i0 === l0 || (i = l);
				}
				break;
				
			}
			
		}
		
		i === l || this.dice();
		
	}
	
	constructor() {
		
		super();
		
		const { mutated, mutationObserverInit, readyHandler, readyOption } = MathRandom;
		
		this.ready = document.readyState === 'interactive' ? Promise.resolve() : new Promise(readyHandler, readyOption),
		
		(this.observer = new MutationObserver(this.mutated = mutated.bind(this))).observe(this, mutationObserverInit);
		
	}
	async connectedCallback() {
		
		this.dice();
		
	}
	//async attributeChangedCallback() {
	//	
	//	const changed = this.changed = Symbol();
	//	
	//	await this.ready,
	//	
	//	changed === this.changed && this.isConnected && this.dice();
	//	
	//}
	
	dice() {
		
		const { dice, tagName } = MathRandom, { number, prefix, style } = this;
		let i,l, id, values;
		
		for (const element of this) {
			
			values = dice.call(element, number, prefix);
			
			if (id = element.id) {
				
				i = -1, l = values.length, id = prefix + id + '-';
				while (++i < l) style.setProperty(id + i, values[i]);
				
			}
			
		}
		
	}
	
	*[Symbol.iterator]() {
		
		const { tagName } = MathRandom, targets = this.querySelectorAll('*'), iterated = [];
		let i,l,i0,l0,i1,l1, li, target, ds, selector, elements,element;
		
		i = li = -1, l = targets.length;
		while (++i < l) {
			
			if ((target = targets[i]).closest(tagName) === this) {
				
				if ('diceDisabled' in (ds = target.dataset)) {
					
					if (selector = ds.diceDisabled) {
						
						i0 = -1, l0 = (elements = target.querySelectorAll(selector)).length, l1 = li + 1;
						while (++i0 < l0) {
							i1 = -1, element = elements[i0];
							while (++i1 < l1 && iterated[i1] !== element);
							i1 === l1 || (iterated.splice(i1, 1), --li, --l1);
						}
						
					}
					
				} else iterated[++li] = target;
				
			}
			
		}
		
		i = -1, ++li;
		while (++i < li) yield iterated[i];
		
	}
	
	get number() {
		
		const v = parseInt(this.getAttribute('number'));
		
		return Number.isNaN(v) || v < 0 ? MathRandom.number : v;
		
	}
	set number(v) {
		
		return this.setAttribute('number', v);
		
	}
	get prefix() {
		
		const v = this.getAttribute('prefix');
		
		return v ? '--' + v + '-' : MathRandom.prefix;
		
	}
	set prefix(v) {
		
		return this.setAttribute('prefix', v);
		
	}
	
}
addEventListener('DOMContentLoaded', () => customElements.define(MathRandom.tagName, MathRandom), { once: true });