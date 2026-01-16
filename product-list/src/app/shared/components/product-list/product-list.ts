import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})

export class ProductList {
  list = [
    {
      "name": "Gaming Maus",
      "description": "Eine hochwertige Gaming Maus mit programmierbaren Tasten und RGB-Beleuchtung.",
      "specs": "- DPI: 16000\n- Gewicht: 120g\n- Anschluss: USB-C\n- Tasten: 8 programmierbare Tasten",
      "stock": 120,
      "price": 59.99
    },
    {
      "name": "Mechanische Gaming Tastatur",
      "description": "Robuste mechanische Tastatur mit schnellen Schaltern für präzises Gaming.",
      "specs": "Switches: Red, Layout: QWERTZ, Beleuchtung: RGB, Anschluss: USB",
      "stock": 75,
      "price": 129.99
    },
    {
      "name": "Gaming Headset",
      "description": "Surround-Sound Gaming Headset mit Geräuschunterdrückung.",
      "specs": "Sound: 7.1, Mikrofon: abnehmbar, Anschluss: USB, Gewicht: 320g",
      "stock": 60,
      "price": 89.99
    },
    {
      "name": "Gaming Monitor",
      "description": "Flüssiger Gaming Monitor mit hoher Bildwiederholrate.",
      "specs": "Größe: 27 Zoll, Auflösung: 2560x1440, Hz: 165, Reaktionszeit: 1ms",
      "stock": 40,
      "price": 349.99
    },
    {
      "name": "Gaming Mauspad",
      "description": "Großes Mauspad für präzise und gleichmäßige Mausbewegungen.",
      "specs": "Größe: 900x400mm, Material: Stoff/Gummi, Rutschfest",
      "stock": 200,
      "price": 24.99
    },
    {
      "name": "Gaming Controller",
      "description": "Ergonomischer Controller für PC und Konsole.",
      "specs": "Verbindung: Bluetooth/USB, Akku: 20h, Vibrationsmotoren",
      "stock": 85,
      "price": 69.99
    },
    {
      "name": "Gaming Stuhl",
      "description": "Bequemer Gaming Stuhl mit ergonomischem Design.",
      "specs": "Material: Kunstleder, Belastbar bis: 150kg, Verstellbar: Höhe/Neigung",
      "stock": 25,
      "price": 199.99
    },
    {
      "name": "Streaming Mikrofon",
      "description": "Kondensator-Mikrofon für Streaming und Voice-Chat.",
      "specs": "Richtcharakteristik: Niere, Anschluss: USB-C, Samplingrate: 96kHz",
      "stock": 50,
      "price": 109.99
    },
    {
      "name": "Webcam Full HD",
      "description": "Hochauflösende Webcam für Streaming und Videokonferenzen.",
      "specs": "Auflösung: 1080p, FPS: 60, Fokus: Autofokus, Anschluss: USB",
      "stock": 90,
      "price": 79.99
    },
    {
      "name": "Gaming Laptop Kühlpad",
      "description": "Effektives Kühlpad zur Temperaturreduzierung von Gaming Laptops.",
      "specs": "Lüfter: 5, Größe: bis 17 Zoll, Anschluss: USB",
      "stock": 110,
      "price": 39.99
    }
  ];
}
