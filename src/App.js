import {content} from "./components/contents";
import {Card} from "./components/Card";
import {PermamentFeatures} from "./components/PermanentFeatures";

export default function App() {

  const sideContent = () => {
    return (
        <div>
          <h2>Portfolio</h2>
          <div className="padding" >
            <a className="link" href="https://github.com/Exilic/portfolio" target="_blank" rel="noreferrer">GitHub repository</a>
          </div>
        </div>
    )
  }

  return (
      <PermamentFeatures setId="main-container" overview={true} sideContent={sideContent()}>
        <div id="ContentList">
          {content.map((links, index) => (<Card index={index} links={links} />))}
        </div>
      </PermamentFeatures>
  );
}