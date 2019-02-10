/**
 SOUNDS
 Game sounds.

 @author Pablo Pizarro R. @ppizarror.com
 @license MIT
 */
"use strict";

/**
 * Sound class.
 *
 * @class
 * @constructor
 */
function TMSSound() {
    /* eslint-disable arrow-parens */
    /* eslint-disable new-cap */
    /* eslint-disable no-continue */
    /* eslint-disable no-extra-parens */

    /**
     * Avaiable sounds.
     */
    this.sound = {
        BUTTON: 'click',
        CLICK: 'click',
        FLAG: 'flag',
        GAMEOVER: 'gameOver',
        GAMEWIN: 'gameWin',
        MENU: 'mainmenu',
        MUSIC: 'music',
        UNFLAG: 'unflag',
        WRONG: 'wrong',
    };

    /**
     * Sound keys.
     * @type {string[]}
     * @private
     */
    this._soundkeys = Object.keys(this.sound);

    /**
     * Create ion sound.
     */
    ion.sound({ // http://ionden.com/a/plugins/ion.sound/en.html
        sounds: [
            {
                name: this.sound.CLICK,
                preload: true,
            },
            {
                name: this.sound.FLAG
            },
            {
                name: this.sound.GAMEOVER
            },
            {
                name: this.sound.GAMEWIN
            },
            {
                name: this.sound.MENU
            },
            {
                name: this.sound.MUSIC
            },
            {
                name: this.sound.UNFLAG
            },
            {
                name: this.sound.WRONG
            }
        ],
        multiplay: true,
        path: 'resources/sounds/',
        preload: false,
        volume: 1.0,
    });

    /**
     * Check sound.
     *
     * @function
     * @param {string} sound
     * @returns {boolean}
     * @private
     */
    this._check_sound = function (sound) {
        return this._soundkeys.includes(sound);
    };

    /**
     * Play sound.
     *
     * @function
     * @param {string} sound
     */
    this.play = function (sound) {
        if (!this._check_sound(sound)) return;
        ion.sound.play(sound);
    };

    /**
     * Stop sound.
     *
     * @function
     * @param {string} sound
     */
    this.stop = function (sound) {
        if (!this._check_sound(sound)) return;
        ion.sound.stop(sound);
    };

    /**
     * Pause sound.
     *
     * @function
     * @param {string} sound
     */
    this.pause = function (sound) {
        if (!this._check_sound(sound)) return;
        ion.sound.pause(sound);
    };

}

/**
 * Application sounds.
 * @type {TMSSound}
 * @global
 */
let app_sound = new TMSSound();