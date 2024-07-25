import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();
const addConfetti = () => {
    jsConfetti.addConfetti({
        emojis: ['✨','⚡️'],
        emojiSize: 20,
        confettiNumber: 50 })
}

export default addConfetti;