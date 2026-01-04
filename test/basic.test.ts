// Simple import test to verify project structure
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
  url: 'http://localhost',
});

(global as any).window = dom.window;
(globalThis as any).window = dom.window;
(global as any).document = dom.window.document;
(globalThis as any).document = dom.window.document;
(global as any).customElements = dom.window.customElements;
(globalThis as any).customElements = dom.window.customElements;
(global as any).HTMLElement = dom.window.HTMLElement;
(globalThis as any).HTMLElement = dom.window.HTMLElement;
(global as any).Event = dom.window.Event;
(globalThis as any).Event = dom.window.Event;
(global as any).CustomEvent = dom.window.CustomEvent;
(globalThis as any).CustomEvent = dom.window.CustomEvent;
(global as any).Node = dom.window.Node;
(globalThis as any).Node = dom.window.Node;

// Mock customCards
(dom.window as any).customCards = [];

async function runTest() {
  const { LovelaceMultiStateEntitiesCard } = await import('../src/lovelace-multi-state-entities-card.js');
  const { LovelaceMultiStateEntitiesCardEditor } = await import('../src/editor.js');

  console.log('Verifying imports...');

  if (LovelaceMultiStateEntitiesCard && LovelaceMultiStateEntitiesCardEditor) {
    console.log('✅ Imports successful');
    process.exit(0);
  } else {
    console.error('❌ Imports failed');
    process.exit(1);
  }
}

runTest();
