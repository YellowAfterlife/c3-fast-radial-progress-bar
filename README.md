# Fast Radial Progress Bar

A lightweight radial progress bar (or radial cooldown) for Construct 3.

![c3-radial-progress-bar](https://user-images.githubusercontent.com/731492/120188623-03e44b80-c21f-11eb-92ce-0b88dbb5ff6d.gif)

It has fewer features than
[skymen's radial progress bar](https://www.construct.net/en/make-games/addons/559/radial-progress),
but it does have the advantage of requiring barely any polygons to draw.

A more or less direct port of my [GameMaker script](https://yal.cc/gamemaker-circular-cooldown-rectangle/)!

## The premise

The fastest way to draw a circle is to not draw a circle:

![image](https://user-images.githubusercontent.com/731492/120184087-3ab76300-c219-11eb-9d77-f81243e81eb3.png)

Unfortunately, Construct 3 doesn't have a "triangle fan" nor "triangle list" primitive type, so we have to make-do with folding one side of a "strip" into center.

## Contents

This addon adds a single behaviour that you can bind onto objects (e.g. Sprites).

The behaviour has two properties (value, max value) with matching actions to set them and expressions to get them.

It _might_ support timelines but I have no familiarity with them.