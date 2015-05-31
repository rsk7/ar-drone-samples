var speed = 0.4;

module.exports = [
    { key: 'j', action: 'back', data: [speed] },
    { key: 'k', action: 'front', data: [speed] },
    { key: 'l', action: 'left', data: [speed] },
    { key: 'h', action: 'right', data: [speed] },
    { key: 'u', action: 'up', data: [speed] },
    { key: 'v', action: 'down', data: [speed] },
    { key: 't', action: 'takeoff' },
    { key: 'm', action: 'land' },
    { key: 'b', action: 'stop' },
    { key: 'i', action: 'clockwise', data: [speed] },
    { key: 'o', action: 'counterClockwise', data: [speed] },
    { key: 'f', action: 'animate', data: ['flipLeft', 15] },
    { key: 'd', action: 'animate', data: ['flipRight', 15] },
    { key: 's', action: 'animate', data: ['flipAhead', 15] },
    { key: 'a', action: 'animate', data: ['flipBehind', 15] },
    { key: 'q', action: 'animate', data: ['phi30Deg', 1000] },
    { key: 'w', action: 'animate', data: ['thetaM30Deg', 1000] },
    { key: 'e', action: 'animate', data: ['turnaroundGodown', 1000] },
    { key: 'r', action: 'animate', data: ['wave', 1000] }
];

