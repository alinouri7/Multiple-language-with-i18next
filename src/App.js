import './App.css';
import { useTranslation, Trans } from 'react-i18next';
import i18n from './lang/i18n';
const lngs = {
  en: {nativeName : 'english'},
  ar: {nativeName : 'arabic'},
};



function App() {
  const { t } = useTranslation('common')
  
  return (
    <div className="App">
      {Object.keys(lngs).map((lng)=>(
        <button
        key={lng} style={{fontWeight : i18n.resolvedLanguage === lng ? 'bold' : 'normal'}} 
        type='submit'  
        onClick={()=> i18n.changeLanguage(lng)}  >
          {lngs[lng].nativeName}
        </button>
         ))}
      <div className='header' style={{color : i18n.resolvedLanguage === 'en' ? 'red' : 'blue'}}>
      <a>{t('description.home')}</a>
      <a>{t('description.about')}</a>
      <a>{t('description.test')}</a>
      <a>{t('description.footer')}</a>
      </div>
    </div>
  );
}

export default App;
