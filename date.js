const MAX_NO_STEPS = 3;


let noCount = 0;

function handleNo() {
    noCount++;

    const prev = document.getElementById('step-' + (noCount - 1));
    const next = document.getElementById('step-' + noCount);

    if (prev) prev.style.display = 'none';
    if (next) {
        next.style.display = 'block';
    }

    if (noCount >= 2 && noCount < MAX_NO_STEPS) {
        const btnId = 'btn-no-' + noCount;
        const btn = document.getElementById(btnId);
        if (btn) moveButton(btn);
    }
}

function moveButton(btn) {
    const card = document.getElementById('card');
    const cw = card.offsetWidth;
    const ch = card.offsetHeight;

    const x = Math.random() * (cw - 120) - cw / 2 + 60;
    const y = Math.random() * (ch * 0.5) - ch * 0.3;

    btn.style.position = 'absolute';
    btn.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
}

function handleYes() {
    for (let i = 0; i <= MAX_NO_STEPS; i++) {
        const el = document.getElementById('step-' + i);
        if (el) el.style.display = 'none';
    }

    const success = document.getElementById('success');
    success.style.display = 'flex';

    // Запускаем сердечки
    launchHearts();
}

function launchHearts() {
    const container = document.getElementById('hearts');
    const emojis = ['💘', '💖', '💗', '🌸', '✨', '💝', '🌺'];

    for (let i = 0; i < 22; i++) {
        setTimeout(function() {
            const h = document.createElement('span');
            h.className = 'heart';
            h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            h.style.setProperty('--dur', (1.2 + Math.random() * 1.2) + 's');
            h.style.setProperty('--size', (14 + Math.random() * 18) + 'px');
            h.style.left = (Math.random() * 92) + '%';
            h.style.animationDelay = (Math.random() * 0.4) + 's';
            container.appendChild(h);
            setTimeout(function() { h.remove(); }, 2800);
        }, i * 90);
    }
}