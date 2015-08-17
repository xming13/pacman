/**
 * Created by ming on 8/15/15.
 */
$(function () {
    var mainTimeline = new TimelineMax({paused: true});
    var pacmanTimeline = new TimelineMax();

    var monsterAfterRule = CSSRulePlugin.getRule(".monster:after");
    console.log(monsterAfterRule);
    var timePerDot = .5;
    pacmanTimeline.addLabel("pacman")
        .to(".characters", timePerDot * 15, { left: "100%", ease: Linear.easeNone, onComplete: pacmanReverse }, "pacman")
        .to(".pacman .top", timePerDot / 2, { rotation: -45, repeat: 21, yoyo: true }, "pacman")
        .to(".pacman .bottom", timePerDot / 2, { rotation: 45, repeat: 21, yoyo: true }, "pacman")
//        .to(".monster", timePerDot / 2, { y: "-=3px", repeat: 31, yoyo: true }, "pacman")
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
        .to(monsterAfterRule, timePerDot / 2, { cssRule: { top: "-=7px", repeat: 30, yoyo: true }});

    function pacmanReverse() {
        $(".monster").addClass("vulnerable");
        $(".pacman").addClass("reverse");

        var pacmanReverseTimeline = new TimelineMax({delay: 1});
        pacmanReverseTimeline.addLabel("pacmanReverse")
            .to(".characters", timePerDot * 15 / 1.5, { left: "0", ease: Linear.easeNone}, "pacmanReverse")
            .to(".pacman .top", timePerDot / 2 / 1.5, { rotation: 45, repeat: 30, yoyo: true }, "pacmanReverse")
            .to(".pacman .bottom", timePerDot / 2 / 1.5, { rotation: -45, repeat: 30, yoyo: true }, "pacmanReverse")
            .to(".monster .mouth", timePerDot / 2 / 1.5, {
                x: "-=1",
                y: "+=1",
                repeat: 30,
                yoyo: true
            }, "pacmanReverse")
            .play();
    }

    mainTimeline.add(pacmanTimeline, 0);
    mainTimeline.play();
});

