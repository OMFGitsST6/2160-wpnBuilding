import './App.css';
import Output from './components/ui/output';

export default function App() {
  const uiCorner = 'var(--ui-corner)';

  return (
    <div className='app'>
      <div style={{
        padding: '1em',
        border: '1px solid lightgray',
        borderRadius: uiCorner,
        display: 'flex',
        flexDirection: 'column'
      }}>
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
