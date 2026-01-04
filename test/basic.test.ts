// Simple import test to verify project structure
import { LovelaceMultiStateEntitiesCard } from '../src/lovelace-multi-state-entities-card';
import { LovelaceMultiStateEntitiesCardEditor } from '../src/editor';

console.log('Verifying imports...');

if (LovelaceMultiStateEntitiesCard && LovelaceMultiStateEntitiesCardEditor) {
  console.log('✅ Imports successful');
  process.exit(0);
} else {
  console.error('❌ Imports failed');
  process.exit(1);
}
