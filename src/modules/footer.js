import "../files/css/footer.scss"

const Footer = () => {
    return ( <div className="Footer">
        <div className="c">
            <div className="Title">
                <h1>Flüchtlingsbewegung</h1>
                <p className="d bindestrich">-</p>
                <p className="d">Die Flucht aus Europa</p>
            </div>

            <div className="Cat Team">
                <h4>Team</h4>
                <a href="https://www.instagram.com/arman010305/">Arman</a><br />
                <a href="https://www.instagram.com/dustin_dm__/">Dustin</a><br />
                <a href="https://www.instagram.com/cxr_vxriven/">Iven</a><br />
                <a href="https://www.instagram.com/regen_ud69/">Lucas</a><br />
            </div>

            <div className="Cat">
                <h4 className="d">Informationen</h4>
                <a href="/imprint">Impressum</a><br />
                <a href="/datenschutz">Datenschutz</a><br />
            </div>
        </div>
        <hr />
        <p className="Copyright">© {new Date().getFullYear()} Dustin Meyer (DustinDEV2more Development)</p>
        <p className="Copyright">Covered by MIT License.</p>
        <p className="Copyright">All used Images and other assets are excluded from this license.</p>
    </div> );
}
 
export default Footer;<div className="Footer">
</div>