import './App.css';
import React, { type JSX } from 'react';
import BuildManager from './builder/buildManager';
import Output from './components/ui/output';

export default function App() {
  const uiCorner = 'var(--ui-corner)';

  /* React resources */
  const buildRef = React.useRef<BuildManager>(new BuildManager());

  /* Components */
  const rowSummaryHead: JSX.Element = (
    <tr>
      <th>Section Summary</th>
      <th>Item Name</th>
      <th>Atk Bonus</th>
      <th>Damage</th>
      <th>Critical</th>
      <th>Effect</th>
      <th>Range</th>
      <th>Fire Rate</th>
      <th>Ammo</th>
      <th>Magazine</th>
      <th>Size</th>
      <th>Weight</th>
      <th>Absorption</th>
      <th>CR Cost</th>
      <th>Special Rules / Effects</th>
    </tr>
  );
  const rowSection1Head: JSX.Element = (
    <tr className='lite'>
      <th></th>
      <th>Chassis & Calibers</th>
      <th></th>
      <th>Grade</th>
      <th></th>
      <th></th>
      <th>Range</th>
      <th>Modes</th>
      <th>RoF Tier</th>
      <th>Volume</th>
      <th>Size</th>
      <th>Weight</th>
      <th>Absorption</th>
      <th>CR Cost</th>
      <th></th>
    </tr>
  );

  return (
    <div className='app'>
      <div style={{
        padding: '1em',
        border: '1px solid lightgray',
        borderRadius: uiCorner,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <table>
          <tbody>
            <tr>
              <th className='lite'>Weapon Chassis</th>
              <td colSpan={14}>
                <div>{'> Everything except the Chassis itself and its size will be modified later on. This information only vaguely describes the weapon.'}</div>
                <div>{'> Negative absorption will be represented as 0 Absorption in the final weapon.'}</div>
                <div>{'> * Denotes that not all ammunition of this caliber is available'}</div>
              </td>
            </tr>
            {rowSection1Head}
            {rowSummaryHead}
          </tbody>
        </table>
        <input type='text' value={'red-dark'} style={{background: 'var(--pal-red-dark)', borderRadius: uiCorner}} />
        <input type='text' value={'red-main'} style={{background: 'var(--pal-red-main)', borderRadius: uiCorner}} />
        <input type='text' value={'red-lite'} style={{background: 'var(--pal-red-lite)', borderRadius: uiCorner}} />
        <input type='text' value={'grn-dark'} style={{background: 'var(--pal-grn-dark)', borderRadius: uiCorner}} />
        <input type='text' value={'grn-main'} style={{background: 'var(--pal-grn-main)', borderRadius: uiCorner}} />
        <input type='text' value={'grn-lite'} style={{background: 'var(--pal-grn-lite)', borderRadius: uiCorner}} />
        <input type='text' value={'blu-dark'} style={{background: 'var(--pal-blu-dark)', borderRadius: uiCorner}} />
        <input type='text' value={'blu-main'} style={{background: 'var(--pal-blu-main)', borderRadius: uiCorner}} />
        <input type='text' value={'blu-lite'} style={{background: 'var(--pal-blu-lite)', borderRadius: uiCorner}} />
        <Output type='text' value={'blu-lite'} style={{background: 'var(--pal-blu-lite)', borderRadius: uiCorner}} />
      </div>
    </div>
  )
}
