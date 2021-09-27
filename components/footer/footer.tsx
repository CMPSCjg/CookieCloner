import 'bootstrap/dist/css/bootstrap.min.css';

export default function FooterComp() {
    return (
        <footer>
            <span>Powered by{' '}
                <img src="/favicon.ico" alt="cookie" className="footer-img" />
                s and users like you.
            </span>
            <style type='text/css'>{`
                    footer {
                        width: 100%;
                        height: 100px;
                        font-family: gluten;
                        border-top: 1px solid #eaeaea;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    footer a {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .footer-img {
                        width: 20px;
                        height: 20px;
                    }
            `}</style>
        </footer>
    )
}
