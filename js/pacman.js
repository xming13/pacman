/**
 * Created by ming on 8/15/15.
 */
$(function () {
    var mainTimeline = new TimelineMax({paused: true});
    var pacmanTimeline = new TimelineMax();

    var timePerDot = .6;
    pacmanTimeline.addLabel("pacman")
        .to(".characters", timePerDot * 15, { left: "100%", ease: Linear.easeNone }, "pacman")
        .to(".pacman .top", timePerDot / 2, {rotation: -45, repeat: 20, yoyo: true }, "pacman")
        .to(".pacman .bottom", timePerDot / 2, { rotation: 45, repeat: 20, yoyo: true }, "pacman")
        .to(".dot1", .1, { opacity: 0, delay: timePerDot }, "pacman")
        .to(".dot2", .1, { opacity: 0, delay: timePerDot * 2}, "pacman")
        .to(".dot3", .1, { opacity: 0, delay: timePerDot * 3}, "pacman")
        .to(".dot4", .1, { opacity: 0, delay: timePerDot * 4}, "pacman")
        .to(".dot5", .1, { opacity: 0, delay: timePerDot * 5}, "pacman")
        .to(".dot6", .1, { opacity: 0, delay: timePerDot * 6}, "pacman")
        .to(".dot7", .1, { opacity: 0, delay: timePerDot * 7}, "pacman")
        .to(".dot8", .1, { opacity: 0, delay: timePerDot * 8}, "pacman")
        .to(".dot9", .1, { opacity: 0, delay: timePerDot * 9}, "pacman")
        .to(".dot10", .1, { opacity: 0, delay: timePerDot * 10}, "pacman")

    mainTimeline.add(pacmanTimeline, 0);
    mainTimeline.play();
});
