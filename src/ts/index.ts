import { notesToPlayInOrder } from "./music-to-play";


const BEATS_PER_MINUTE = 240;

function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function playMusic() {
    const notes = notesToPlayInOrder;
    const playDelay = (60 / BEATS_PER_MINUTE) * 1000;

    for (const note of notes) {
        const audioId = `${note.pitch}${note.accidental || ""}${note.octave}`;
        const audioElement = document.getElementById(audioId) as HTMLAudioElement;

        if (audioElement) {
            audioElement.play();
            await wait(note.beats * playDelay);
            audioElement.pause();
            audioElement.currentTime = 0;
        }
    }
}

document.getElementById('start-playing')?.addEventListener('click', playMusic);