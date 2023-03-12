import './App.css';
import SectionNews from './components/SectionNews/SectionNews';
import SectionSearch from './components/SectionSearch/SectionSearch';
import SectionPanels from './components/SectionPanels/SectionPanels';
import {map} from './data/map'
import {ether} from './data/ether'
import {pops} from './data/pops'
import {programTV} from './data/programTV'
import {news} from './data/news'
import {categories} from './data/categories'
import {exchangeRates} from './data/exchangeRates'
import {categoriesSearch} from './data/categoriesSearch'


function App() {
  return (
    <div className="App">
       <SectionNews
          categories={categories}
          news={news}
          exchangeRates={exchangeRates}
        />
        <SectionSearch
          search={categoriesSearch}
          advertising="Найдётся всё. Например, фаза луны сегодня"
          logo="http//"
        />
        <SectionPanels
          map ={map}
          ether={ether}
          programTV={programTV}
          pops={pops}
        />
    </div>
  );
}

export default App;
