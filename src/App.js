import React from 'react';
import '@animaliads/css-tokens/global-tokens.css';
import '@animaliads/animalia-brand/theme.css';
import '@animaliads/ani-checkbox';
import './style.css';

export default function App() {
  return (
    <ani-checkbox>
      <span class="label">Google</span>
    </ani-checkbox>
  );
}
