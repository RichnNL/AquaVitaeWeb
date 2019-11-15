import {LanguageDataType, 
        SuppportedLanguagesIntialsType, 
        SuppportedLanguages,
        LanguageData,
        LanguageType,
        SuppportedLanguagesFullNameType} from '../../../constants/languageData';
import {STORAGEKEY} from '../../../constants/storageKey';



export interface ILanguageStore {
    currentLang:  SuppportedLanguagesIntialsType;
    textData: LanguageDataType ;
    switchLang(languageName: SuppportedLanguagesIntialsType | SuppportedLanguagesFullNameType): any;
    setLocalLang(): any;
    getSupportedLangs(): LanguageType[];
}

const LanguageStore: ILanguageStore = {
  currentLang: "en-US",
  textData: LanguageData["en-US"],
  switchLang(languageName: SuppportedLanguagesIntialsType | SuppportedLanguagesFullNameType) {
      // Can retrieve name based on inputing the initial or full language name
      const index = SuppportedLanguages.findIndex(l => languageName === l.initial || languageName === l.full);
      this.currentLang = SuppportedLanguages[index].initial;
      this.textData = LanguageData[this.currentLang];
    
    
      localStorage.setItem(STORAGEKEY.languageKey, this.currentLang);
  },
  setLocalLang() {
    let localLanguage;
    localLanguage = localStorage.getItem(STORAGEKEY.languageKey);

      if(localLanguage == null) {
        localLanguage = navigator.language;
        if(localLanguage != null && localLanguage.length > 3) {
          localLanguage = localLanguage.replace('_','-');
        }
      };

      if(SuppportedLanguages.find(lang => localLanguage === lang.initial)) {
        const index = SuppportedLanguages.findIndex(l => localLanguage === l.initial);
        this.currentLang = SuppportedLanguages[index].initial;
       }
       else {
        this.currentLang = SuppportedLanguages[0].initial;
      }
  },
  getSupportedLangs() {
    return SuppportedLanguages;
  }


}

const createLanguageStore = () => {
  const store = {
    ...LanguageStore
  };

  return store;
};

export type LanguageStoreType = ReturnType<typeof createLanguageStore>;


export default createLanguageStore;


