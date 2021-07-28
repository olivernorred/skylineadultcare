document.querySelectorAll('.parallax').forEach(el => {

	let offsetTop = offset(el).top

	// el.style.position = "relative"
	let scrollfactor = el.getAttribute('parallax')

	addEventListener('scroll', ()=> {
		if(window.scrollY < 500) {
			requestAnimationFrame(()=> {
				el.style.transform = "translate(0, " + -scrollfactor * window.scrollY + "px)"
				// el.style.top = -scrollfactor * window.scrollY + "px"
			})
		}
	})
})

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}