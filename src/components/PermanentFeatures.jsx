
export const PermamentFeatures = ({children, setId, overview, sideContent}) => {
    return (
        <div id="sitebase">
            <div id="sidebar">
                <div>
                    <h1>Stuff Made</h1>
                    <p className="uppercase">By Tobias Engberg</p>
                </div>
                <div>
                    {overview ? undefined : <a href="https://www.exilic.github.io" className="link right">&larr; Back to overview</a>}
                </div>
                <div>
                    {sideContent}
                </div>
            </div>
            {children}

        </div>
    )
}