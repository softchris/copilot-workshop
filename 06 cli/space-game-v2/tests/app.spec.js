
const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!doctype html><html><body><canvas id="gameCanvas"></canvas></body></html>');
global.document = dom.window.document;
global.window = dom.window;
global.Image = dom.window.Image;


import {Player} from '../src/Player.js';
import {Enemy} from '../src/Enemy.js';
import {Laser} from '../src/Laser.js';
import {Meteor} from '../src/Meteor.js';
import {Game} from '../src/Game.js';

console.log("Player", Player);

test('creates a player object', () => {
    const player = new Player(100, 100, 50, 50, 'player.png');
    expect(player.x).toBe(100);
    expect(player.y).toBe(100);
    expect(player.width).toBe(50);
    expect(player.height).toBe(50);
    expect(player.image).toBe('player.png');
});

test('creates an enemy object', () => {
    const enemy = new Enemy(200, 200, 50, 50, 'enemy.png');
    expect(enemy.x).toBe(200);
    expect(enemy.y).toBe(200);
    expect(enemy.width).toBe(50);
    expect(enemy.height).toBe(50);
    expect(enemy.image).toBe('enemy.png');
});

test('creates a laser object', () => {
    const laser = new Laser(300, 300, 5, 10, 'laser.png');
    expect(laser.x).toBe(300);
    expect(laser.y).toBe(300);
    expect(laser.width).toBe(5);
    expect(laser.height).toBe(10);
    expect(laser.image).toBe('laser.png');
});

test('creates a meteor object', () => {
    const meteor = new Meteor(400, 400, 50, 50, 'meteor.png');
    expect(meteor.x).toBe(400);
    expect(meteor.y).toBe(400);
    expect(meteor.width).toBe(50);
    expect(meteor.height).toBe(50);
    expect(meteor.image).toBe('meteor.png');
});

test('detects collisions', () => {
    const game = new Game();
    const rect1 = { x: 100, y: 100, width: 50, height: 50 };
    const rect2 = { x: 120, y: 120, width: 50, height: 50 };
    const rect3 = { x: 200, y: 200, width: 50, height: 50 };
    expect(game.isColliding(rect1, rect2)).toBe(true);
    expect(game.isColliding(rect1, rect3)).toBe(false);
});