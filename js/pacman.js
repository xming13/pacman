/**
 * Created by ming on 8/15/15.
 */
$(function () {
    var mainTimeline = new TimelineMax({paused: true});
    var pacmanTimeline = new TimelineMax();

    pacmanTimeline.addLabel("pacman")
        .to(".pacman", 10, { xPercent: 1000, ease: Linear.easeNone }, "pacman")
        .to(".pacman .top", .5, {rotation: -45, repeat: 19, yoyo: true }, "pacman")
        .to(".pacman .bottom", .5, { rotation: 45, repeat: 19, yoyo: true }, "pacman")
        .to(".dot1", .1, { opacity: 0, delay: 1}, "pacman")
        .to(".dot2", .1, { opacity: 0, delay: 2}, "pacman")
        .to(".dot3", .1, { opacity: 0, delay: 3}, "pacman")
        .to(".dot4", .1, { opacity: 0, delay: 4}, "pacman")
        .to(".dot5", .1, { opacity: 0, delay: 5}, "pacman")
        .to(".dot6", .1, { opacity: 0, delay: 6}, "pacman")
        .to(".dot7", .1, { opacity: 0, delay: 7}, "pacman")
        .to(".dot8", .1, { opacity: 0, delay: 8}, "pacman")
        .to(".dot9", .1, { opacity: 0, delay: 9}, "pacman")

    mainTimeline.add(pacmanTimeline, 0);
    mainTimeline.play();
});
