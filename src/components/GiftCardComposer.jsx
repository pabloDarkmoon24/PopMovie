import { useEffect, useRef, useState } from 'react';
import bono from '../assets/bono.png'

/**
 * Componente de prueba para “pintar” premio y código encima de una imagen
 * y descargar el resultado como PNG en alta resolución.
 *
 * Props principales:
 * - baseImage: string (src de la imagen base)
 * - premio: string
 * - codigo: string
 * - options: {
 *    width, height: dimensiones de salida en px (opcional; si no, usa tamaño de la imagen)
 *    prize: { xPct, yPct, maxWidthPct, font, color, align, lineHeight, shadow }
 *    code:  { xPct, yPct, maxWidthPct, font, color, align, shadow, letterSpacing }
 *    qualityScale: number (para HiDPI, default 2)
 *    downloadName: string
 *   }
 */
export default function GiftCardComposer({
  baseImage = bono,
  premio = 'Bono $10.000',
  codigo = 'MOVIE-ABCD1234',
  options = {},
}) {
  const canvasRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [img, setImg] = useState(null);

  const {
    width,
    height,
    qualityScale = 2,
    downloadName = 'giftcard-popmovie.png',
    prize = {
      xPct: 50,        // posición X en %
      yPct: 38,        // posición Y en %
      maxWidthPct: 70, // ancho máximo del texto (envoltura)
      font: 'bold 48px "CCTimSaleLower Bold", Arial, sans-serif',
      color: '#9b1f24',
      align: 'center', // 'left' | 'center' | 'right'
      lineHeight: 1.15,
      shadow: { blur: 6, color: 'rgba(0,0,0,0.25)', offsetX: 0, offsetY: 2 }
    },
    code = {
      xPct: 50,
      yPct: 58,
      maxWidthPct: 80,
      font: 'bold 44px "Gasoek One", Arial, sans-serif',
      color: '#3a1f0b',
      align: 'center',
      shadow: { blur: 0, color: 'transparent', offsetX: 0, offsetY: 0 },
      letterSpacing: 2 // px entre caracteres
    }
  } = options;

  // Carga de imagen base
  useEffect(() => {
    if (!baseImage) return;
    const image = new Image();
    image.crossOrigin = 'anonymous'; // por si la imagen está en otro dominio con CORS
    image.src = baseImage;
    image.onload = () => {
      setImg(image);
      setReady(true);
    };
    image.onerror = () => {
      console.error('No se pudo cargar la imagen base.');
      setReady(false);
    };
  }, [baseImage]);

  // Utilidad: envolver texto
  const wrapText = (ctx, text, maxWidth) => {
    const words = text.split(' ');
    const lines = [];
    let line = '';

    for (let i = 0; i < words.length; i++) {
      const testLine = line ? `${line} ${words[i]}` : words[i];
      const testWidth = ctx.measureText(testLine).width;
      if (testWidth > maxWidth && i > 0) {
        lines.push(line);
        line = words[i];
      } else {
        line = testLine;
      }
    }
    if (line) lines.push(line);
    return lines;
  };

  // Utilidad: dibujar texto con estilos + sombras + alineación
  const drawTextBlock = (ctx, {
    text,
    x,
    y,
    maxWidth,
    font,
    color,
    align = 'center',
    lineHeight = 1.2,
    letterSpacing = 0,
    shadow
  }) => {
    ctx.save();
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.textAlign = align;

    if (shadow && shadow.color && shadow.blur > 0) {
      ctx.shadowColor = shadow.color;
      ctx.shadowBlur = shadow.blur;
      ctx.shadowOffsetX = shadow.offsetX || 0;
      ctx.shadowOffsetY = shadow.offsetY || 0;
    } else {
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
    }

    // envolvemos el texto si hay maxWidth
    const lines = maxWidth ? wrapText(ctx, text, maxWidth) : [text];

    // Dibujar por línea con letterSpacing
    const metrics = ctx.measureText('M'); // aproximar alto
    const approxLineHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
    const stepY = approxLineHeight * lineHeight;

    lines.forEach((line, idx) => {
      if (letterSpacing !== 0) {
        // dibujar caracter por caracter
        let offsetX = 0;
        // calcular ancho total de la línea con letterSpacing
        const baseWidth = ctx.measureText(line).width;
        const extra = (line.length - 1) * letterSpacing;
        let startX = x;
        if (align === 'center') startX = x - (baseWidth + extra) / 2;
        if (align === 'right')  startX = x - (baseWidth + extra);

        for (let i = 0; i < line.length; i++) {
          const ch = line[i];
          ctx.fillText(ch, startX + offsetX, y + idx * stepY);
          offsetX += ctx.measureText(ch).width + letterSpacing;
        }
      } else {
        ctx.fillText(line, x, y + idx * stepY);
      }
    });

    ctx.restore();
  };

  // Dibujo principal
  useEffect(() => {
    if (!ready || !img) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Dimensiones base (si no se pasaron por props, usamos las de la imagen)
    const targetW = width || img.width;
    const targetH = height || img.height;

    // Escala para HiDPI
    const scale = qualityScale;
    canvas.width = targetW * scale;
    canvas.height = targetH * scale;
    canvas.style.width = `${targetW}px`;
    canvas.style.height = `${targetH}px`;

    // Limpia y dibuja imagen base
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
    ctx.clearRect(0, 0, targetW, targetH);
    ctx.drawImage(img, 0, 0, targetW, targetH);

    // Calcular posiciones y anchos máximos
    const prizeX = (prize.xPct / 100) * targetW;
    const prizeY = (prize.yPct / 100) * targetH;
    const prizeMaxW = (prize.maxWidthPct / 100) * targetW;

    const codeX = (code.xPct / 100) * targetW;
    const codeY = (code.yPct / 100) * targetH;
    const codeMaxW = (code.maxWidthPct / 100) * targetW;

    // Dibujar premio
    drawTextBlock(ctx, {
      text: premio,
      x: prizeX,
      y: prizeY,
      maxWidth: prizeMaxW,
      font: prize.font,
      color: prize.color,
      align: prize.align,
      lineHeight: prize.lineHeight,
      letterSpacing: 0,
      shadow: prize.shadow
    });

    // Dibujar código
    drawTextBlock(ctx, {
      text: codigo,
      x: codeX,
      y: codeY,
      maxWidth: codeMaxW,
      font: code.font,
      color: code.color,
      align: code.align,
      lineHeight: 1.1,
      letterSpacing: code.letterSpacing,
      shadow: code.shadow
    });
  }, [ready, img, premio, codigo, width, height, prize, code, qualityScale]);

const handleDownload = () => {
  // Tamaño mayor para exportar
  const exportScale = 5; // multiplica por 5 (200x90 → 1000x450)
  const exportW = (width || img.width) * exportScale;
  const exportH = (height || img.height) * exportScale;

  // Crear un canvas temporal
  const exportCanvas = document.createElement('canvas');
  const ctx = exportCanvas.getContext('2d');

  exportCanvas.width = exportW;
  exportCanvas.height = exportH;

  // Dibujar imagen base escalada
  ctx.drawImage(img, 0, 0, exportW, exportH);

  // Calcular posiciones en proporción
  const prizeX = (prize.xPct / 100) * exportW;
  const prizeY = (prize.yPct / 100) * exportH;
  const prizeMaxW = (prize.maxWidthPct / 100) * exportW;

  const codeX = (code.xPct / 100) * exportW;
  const codeY = (code.yPct / 100) * exportH;
  const codeMaxW = (code.maxWidthPct / 100) * exportW;

  // Dibujar premio
  ctx.font = prize.font.replace(/\d+px/, (m) => `${parseInt(m) * exportScale}px`);
  ctx.fillStyle = prize.color;
  ctx.textAlign = prize.align;
  ctx.fillText(premio, prizeX, prizeY, prizeMaxW);

  // Dibujar código
  ctx.font = code.font.replace(/\d+px/, (m) => `${parseInt(m) * exportScale}px`);
  ctx.fillStyle = code.color;
  ctx.textAlign = code.align;
  ctx.fillText(codigo, codeX, codeY, codeMaxW);

  // Descargar
  const url = exportCanvas.toDataURL('image/png');
  const a = document.createElement('a');
  a.href = url;
  a.download = downloadName.replace('.png', `-HD.png`);
  a.click();
};


  return (
    <div style={{ display: 'grid', gap: 12, justifyItems: 'center' }}>
      <canvas ref={canvasRef} />
      <div style={{ display: 'flex', gap: 12 }}>
        <button onClick={handleDownload}>Descargar PNG</button>
      </div>
    </div>
  );
}
