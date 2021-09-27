import 'bootstrap/dist/css/bootstrap.min.css';

export const Loader = (props) => {
    const { size } = props;
    return (
        <div className="loader" style={ { width: size + 'px', height: size + 'px'}}>

            <style jsx>{`

                .loader { 
                    border: 16px #eaeaea solid;
                    border-top: 16px #E6CEA0 solid;
                    border-radius: 50%;
                    display: block;
                    margin: auto;
                    animation: rotate 2s linear infinite;
                }

                @keyframes rotate {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>

        </div>
    )
}