import { findById } from "../utils.js";
import { stops } from "../stop-detail.js";

const params = new URLSearchParams(window.location.search);
const stop = findById(params.get('id'), stops);

const stopName = document.getElementById('stop-name');
stopName.textContent = stop.what;
const stopImage = document.getElementById('stop-image');
stopImage.src = stop.image;
const info = document.getElementById('info');
info.textContent = `On their cross country road trip... Kat, Joe, and Renly stopped at ${stop.what} in ${stop.where} to ${stop.why}.`;
