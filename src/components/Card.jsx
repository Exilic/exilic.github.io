
export const Card = ({index, links}) => {

    return (
        <div id="ContentCard">
            <a key={index} href={"https://exilic.github.io/" + links[0]}>
                <img src={`/img/${links[1]}`} alt={links[2]}/>
                <section>
                    <h3><span>Subject:</span> {links[3][0]}</h3>
                    <p>{links[3][1]}</p>
                </section>
            </a>
        </div>
    )
}