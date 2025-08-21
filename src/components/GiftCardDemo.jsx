import GiftCardComposer from './GiftCardComposer';
// Importa una imagen base (PNG/JPG) tipo “tarjeta”
import cardBase from '../assets/bono.png';

export default function GiftCardDemo() {
  return (
    <section style={{ background: '#fdfbe7', padding: '24px 16px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 12 }}>Prueba Gift Card</h2>

      <GiftCardComposer
        baseImage={cardBase}
        premio="Sigue intentando"
        codigo="MOVIENNISN8"
        options={{
          // Si quieres forzar tamaño de salida (opcional)
          width: 1080,
          height: 1080,
          qualityScale: 2,
          downloadName: 'giftcard-ejemplo.png',
          prize: {
            xPct: 32,
            yPct: 46,
            maxWidthPct: 70,
            font: 'bold 40px "CCTimSaleLower Bold", Arial, sans-serif',
            color: '#9b1f24',
            align: 'center',
            lineHeight: 1.12,
            shadow: { blur: 6, color: 'rgba(0,0,0,0.25)', offsetX: 0, offsetY: 2 }
          },
          code: {
            xPct: 30,
            yPct: 83,
            maxWidthPct: 80,
            font: 'bold 50px "Gasoek One", Arial, sans-serif',
            color: '#3a1f0b',
            align: 'center',
            shadow: { blur: 0, color: 'transparent', offsetX: 0, offsetY: 0 }
          }
        }}
      />
    </section>
  );
}
