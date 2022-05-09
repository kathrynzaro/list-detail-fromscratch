export function renderStopLinks(stop) {
    const div = document.createElement('div');
    div.classList.add('stop');

    const img = document.createElement('img');
    img.src = stop.image;
    
    const a = document.createElement('a');
    a.href = `./stop-detail/?id=${stop.id}`;

    a.append(img);
    div.append(a);
    return div;
}