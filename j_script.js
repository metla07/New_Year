"use strict"

let offset = 0;
let step = 1;
let wall_one = document.querySelector('.moving_wall_one');
let wall_two = document.querySelector('.moving_wall_two');
let wall_three = document.querySelector('.moving_wall_three');
let wall_four = document.querySelector('.moving_wall_four');

        function move() {

            offset = offset - step;
                   wall_one.style.left = offset + 'px';
                   wall_two.style.top = offset + 'px';
                   wall_three.style.right = offset + 'px';
                   wall_four.style.bottom = offset + 'px';
            if (offset === -1) {
                sound();
            } else if (offset < -400) {
                 sound_2();
                return document.querySelector('.button_go').onclick = move2;

                     }else if (offset >= 0) {
                         return  offset = 0;
            }

            setTimeout(move, 0.1);

        }

            function move2() {

                offset = offset - -step;
                       wall_one.style.left = offset + 'px';
                       wall_two.style.top = offset + 'px';
                       wall_three.style.right = offset + 'px';
                       wall_four.style.bottom = offset + 'px';

                if (offset === -399) {
                    sound();
                }else if (offset >= 0) {
                    offset = 0;
                    sound_2();
                    return document.querySelector('.button_go').onclick = move;
                }
                setTimeout(move2, 0.1);

            }

        document.querySelector('.button_go').onclick = move;

            function sound() {
                const audio = new Audio();
                audio.preload = 'auto';
                audio.src ='mp3/open.mp3';
                audio.play();
            }
            function sound_2() {
                const audio = new Audio();
                audio.preload = 'auto';
                audio.src ='mp3/bells.mp3';
                audio.play();
            }