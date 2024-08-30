var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";

    blur.style.left = dets.x - 150 + "px";
    blur.style.top = dets.y - 150 + "px";
})

gsap.to("#nav", {
    backgroundColor: "maroon",
    height: "100px",
    duration: 0.2,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 0.3
    }
})

gsap.to("#main", {
    backgroundColor: "green",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        //markers: true,
        start: "top -30%",
        end: "top -80%",
        scrub: 2,
    }
})