///////////////////////////////////////////////////////////
// Changing year to current one
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Making mobile navigation toggle work
function mobileNavToggle() {
	headerEl.classList.toggle('nav-open');
	//Disable scrolling
	document.body.classList.toggle('overflow-y-disable');
	document
		.getElementsByTagName('html')[0]
		.classList.toggle('overflow-y-disable');
}

const btnNavEl = document.querySelector('.btn-mobile-nav');
const btnMainNav = document.querySelectorAll('.main-nav-link');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', mobileNavToggle);
btnMainNav.forEach(link => {
	link.addEventListener('click', mobileNavToggle);
});

///////////////////////////////////////////////////////////
// Sticky navigation
const sectionHeroEl = document.querySelector('.section-hero');

const observer = new IntersectionObserver(
	entries => {
		const entry = entries[0];
		// console.log(entry);

		if (!entry.isIntersecting) document.body.classList.add('sticky');
		if (entry.isIntersecting) document.body.classList.remove('sticky');
	},
	{
		root: null,
		threshold: 0,
		rootMargin: '-80px',
	}
);

observer.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
	var flex = document.createElement('div');
	flex.style.display = 'flex';
	flex.style.flexDirection = 'column';
	flex.style.rowGap = '1px';

	flex.appendChild(document.createElement('div'));
	flex.appendChild(document.createElement('div'));

	document.body.appendChild(flex);
	var isSupported = flex.scrollHeight === 1;
	flex.parentNode.removeChild(flex);
	console.log(isSupported);

	if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();
