
import Header from './header';
import Jumbo from './jumbotron.js';
import ContentRow from './content-row.js';

import JSONDATA from '../MOCK_DATA.json';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Jumbo />
      <ContentRow />
      {JSONDATA.map((key, val) => {
        return (
          <div style={{ color: "red" }}>{key.avatar}{key.first_name}</div>
        )
      })}
    </div>
  )
}

export default LandingPage;